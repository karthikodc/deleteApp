
function init() {
	loadUser();
	console.log("loadUser() started");
		
};

	
function loadUser() {
	$(document).ready(function () {
		$("#content").text("The DOM is now loaded and can be manipulated.");
		var viewer;
		console.log("Ready started");
	});
	console.log("loadUser() started");
	showMessage("Loading the currently logged in user ...");
	osapi.jive.core.users.get({
		id : '@viewer'
	}).execute(function(response) {
			console.log("loadUser() response = " + JSON.stringify(response));
			user = response.data;
			$(".user-name").html("").html(user.name);
			
		});
}

function showMessage(message) {
    $("#status-message").html("").html(message);
    showOnly("status-div");
}

// Show only the specified top level div
function showOnly(id) {
    $(".top-level-div").hide();
    $("#" + id).show();
    gadgets.window.adjustHeight();
}

// Register our on-view-load handler
gadgets.util.registerOnLoadHandler(init);
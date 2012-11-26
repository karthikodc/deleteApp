// Currently logged in user
var user;

function init() {
	loadUser();
	console.log("loadUser() started");
		
};



// Load the private documents for this user
function loadDocuments() {
  console.log("loadDocuments() started");
  //showMessage("Loading private documents for '" + user.name + "' ...");
  var request = osapi.jive.corev3.contents.get({
     
     "author": "https://apps-public-cloud-trunk.jivesoftware.com/people/pradeep"
 });

 request.execute(function(data) {
     console.log("Fetched the document!", data);
 });
  
}	
function loadUser() {
	$(document).ready(function () {
		$("#content").text("The DOM is now loaded and can be manipulated.");
		var viewer;
		console.log("Ready started");
	});
	console.log("loadUser() started");
	showMessage("Loading the currently logged in user ...");
	/*osapi.jive.corev3.users.get({
		id : '@viewer'
	}).execute(function(response) {
			console.log("loadUser() response = " + JSON.stringify(response));
			user = response.data;
			$(".user-name").html("").html(user.name);
			
		});*/
		loadDocuments();
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
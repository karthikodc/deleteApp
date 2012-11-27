// Currently logged in user
var user;

function init() {
	loadUser();
	console.log("loadUser() started");
		
};



// Load the private documents for this user
function loadUserContents() {
  console.log("loadUserContents() started");
  showMessage("Loading users content for '" + user.name.formatted + "' ...");
  var request = osapi.jive.corev3.contents.get({
     //"type": "document",
     //"uri": documentURI,
     "author": "https://apps-public-cloud-trunk.jivesoftware.com/people/"+user.id
 });

 request.execute(function(data) {
     //console.log("Fetched the document!", data);
	 console.log("Fetched the document= " + JSON.stringify(data));
 });
 getMember();
}

function getMember() {
var request = osapi.jive.corev3.people.Person.getMembers({"author":"https://apps-public-cloud-trunk.jivesoftware.com/people/"+user.id
    
  }).execute(function(response) {
	console.log("Fetched the Member= " + JSON.stringify(response));
  });
}
function loadUser() {
	$(document).ready(function () {
		$("#content").text("The DOM is now loaded and can be manipulated.");
		
		console.log("Ready started");
	});
	
	console.log("loadUser() started");
	showMessage("Loading the currently logged in user ...");
	
	osapi.jive.corev3.people.get({id : '@me'})
		.execute(function(response) {
			console.log("loadUser() response = " + JSON.stringify(response));
			user = response;
			
			$(".user-name").html("").html(user.name.formatted);
			loadUserContents();
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
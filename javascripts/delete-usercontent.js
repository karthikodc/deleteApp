// Currently logged in user


function init() {
	loadUser();
	console.log("loadUser() started");
		
};



// Load the private documents for this user
function loadDocuments() {
  console.log("loadDocuments() started");
  showMessage("Loading private documents for '" + viewer.name + "' ...");
  var request = osapi.jive.corev3.contents.get({
     //"type": "document",
     //"uri": documentURI,
     "author": "@me"
 });

 request.execute(function(data) {
     console.log("Fetched the document!", data);
 });
}
function loadUser() {
	$(document).ready(function () {
		$("#content").text("The DOM is now loaded and can be manipulated.");
		
		console.log("Ready started");
	});
	var viewer;
	console.log("loadUser() started");
	showMessage("Loading the currently logged in user ...");
	
	osapi.jive.corev3.people.get({id : '@me'})
		.execute(function(response) {
			console.log("loadUser() response = " + JSON.stringify(response));
			viewer = response;
			
			//$(".user-name").html("").html(viewer.name.formatted);
			//loadDocuments();
			var authorURI="https://apps-public-cloud-trunk.jivesoftware.com/people/";
			 var request = osapi.jive.corev3.contents.get({
				//"type": "document",
				//"uri": documentURI,
				"author": "https://apps-public-cloud-trunk.jivesoftware.com/people/"+viewer.jive.username
			});
			request.execute(function(data) {
				//console.log("Fetched the document!", data);
				console.log("Fetched the document = " + JSON.stringify(data));
			});
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
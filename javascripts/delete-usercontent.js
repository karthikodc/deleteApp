// Currently logged in user
var user;

function init() {
	loadUser();
	console.log("loadUser() started");
		
};



// Load the private documents for this user
function loadDocuments() {
  console.log("loadDocuments() started");
  showMessage("Loading private documents for '" + user.name + "' ...");
  
  user.Documents.get({
    limit : 1000
  }).execute(function(response) {
    console.log("loadDocuments() response = " + JSON.stringify(response));
    var html = '<ul>';
    documents = response.data;
    $.each(documents, function(index, doc) {
      html += '<li>';
      html += '<a href="#" class="document-select" data-index="' + index + '">' + doc.subject + '</a>';
      html += ' (' + doc.viewCount + ' views)';
      html += '</li>';
    });
    html += '</ul>';
    $("#documents-list").html("").html(html);
    $(".document-select").click(function () {
      var index = $(this).attr("data-index");
      current = documents[index];
      $(".document-subject").html("").html(current.subject);
      showDocument();
    });
    showOnly("documents-div");
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
	osapi.jive.core.users.get({
		id : '@viewer'
	}).execute(function(response) {
			console.log("loadUser() response = " + JSON.stringify(response));
			user = response.data;
			$(".user-name").html("").html(user.name);
			loadDocuments();
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
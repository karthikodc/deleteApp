

$(document).ready(function () {
  $("#content").text("The DOM is now loaded and can be manipulated.");
	var documentURI = ""; //A given URI of a document
	var authorURI="https://apps-onprem.jivesoftware.com/people/"
	var placeURI="https://apps-onprem.jivesoftware.com/groups/accenturetest";
	var request = osapi.jive.corev3.contents.get({
     "type": "document",
     "fields": "@all",
	 "place":placeURI,
	 "author":authorURI,
	});

	request.execute(function(data) {
     console.log("Fetched the document!", data);
	});
});

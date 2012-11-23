

// On-view-load initialization
function init() {
      $(document).ready(getUserContent);
	  gadgets.window.adjustHeight();
}


$(document).ready(function () {
  

function getUserContent() {
$("#content").text("The DOM is now loaded and can be manipulated.");
});
}

// Register our on-view-load handler
gadgets.util.registerOnLoadHandler(init);

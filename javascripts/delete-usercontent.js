

$(document).ready(function () {
 // $("#content").text("The DOM is now loaded and can be manipulated.");
	var viewer;
	gadgets.util.registerOnLoadHandler(init);
	
	function init() {
		 $("#select-group-button").click(loadUser);
		viewer = opensocial.data.getDataContext().getDataSet('viewer');
		console.log("loadUser() started");
		
	};
	function loadUser() {
    console.log("loadUser() started");
    showMessage("Loading the currently logged in user ...");
    osapi.jive.core.users.get({
        id : '@viewer'
    }).execute(function(response) {
            console.log("loadUser() response = " + JSON.stringify(response));
            user = response.data;
            $(".user-name").html("").html(user.name);
            loadGroups();
        });
}
});

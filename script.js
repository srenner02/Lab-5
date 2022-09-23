
//runs when page loads
window.onload = init;
		function init() {
			addLastUpdate();
		}

//Updates the HTML with the lastModified property of document
//We are using it in the footer of each page except the index
//We call it above so it runs when the page loads (window.onload)
function addLastUpdate(){
  var modDate = document.lastModified;
  document.getElementById("update_date").innerHTML = modDate;
}
// script runs on page load
window.onload = init;
		function init() {
			addLastUpdate();
		}
//updates variable modDate with the date the document was last modified
function addLastUpdate(){
  var modDate = document.lastModified;
  document.getElementById("update_date").innerHTML = modDate;
}

function validateForm() {
  let x = document.forms["lab5Form"]["status"].value;
  if (x == "") {
    alert("Marital Status must be selected");
    return false;
  }
}
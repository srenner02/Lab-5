// script runs on page load
window.onload = init;
		function init() {
			addLastUpdate();
		}
//Function to display last modified in footer
function addLastUpdate(){ 
  //from w3schools.com/jsref/prop_doc_lastmodified.asp
  const date = new Date(document.lastModified); 
  //gets last_modified element and converts to toDateString
  document.getElementById("last_modified").innerHTML = "Last Modified " + date.toDateString();
}
//validate function for the marital status radio
function validateForm() {
  //pulls status value from lab 5 form and assigns to x
  let x = document.forms["lab5Form"]["status"].value;
  //if x is blank(no option chosen) displays alert
  if (x == "") {
    alert("Marital Status must be selected");
    return false;
  }
}
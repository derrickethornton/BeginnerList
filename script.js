var button = document.getElementById("enter");
var input = document.getElementById("userInput")
var ul = document.querySelector("ul");
button.addEventListener("click", function() {
	checkInput();
});
input.addEventListener("keydown", function(event) {
	if(event.keyCode === 13) {
		checkInput();
	}
})

function checkInput() {
	if(input.value != "") {
		var listItem = document.createElement("li");
		var listItemText = document.createTextNode(input.value);
		listItem.appendChild(listItemText);
		ul.appendChild(listItem);
		input.value = "";
	}
}
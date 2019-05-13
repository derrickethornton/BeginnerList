var button, input, ul;
button = document.getElementById("enter");
input = document.getElementById("userInput")
ul = document.querySelector("ul");

function createElement() {
	var listItem, listItemText;
	listItem = document.createElement("li");
	listItemText = document.createTextNode(input.value);
	listItem.appendChild(listItemText);
	ul.appendChild(listItem);
	input.value = "";
}

function checkAddInputValue() {
	if(input.value != "") {
		createElement();
	}
}

function addAfterClick() {
	checkAddInputValue();
}

function addAfterEnter() {
	if(event.keyCode === 13) {
		checkAddInputValue();
	}
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keydown", addAfterEnter);

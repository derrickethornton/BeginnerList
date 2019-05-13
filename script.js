var button, input, ul, li;
button = document.getElementById('enter');
input = document.getElementById('userInput')
ul = document.querySelector('ul');
li = document.querySelector('li')

function createElement() {
	var listItem, listItemText, delButton, delButtonText;
	listItem = document.createElement('li');
	delButton = document.createElement('button');
	listItemText = document.createTextNode(input.value);
	delButtonText = document.createTextNode('Delete');
	listItem.appendChild(listItemText);
	delButton.appendChild(delButtonText);
	delButton.classList.add('circle');
	delButton.addEventListener('click', function() {
		ul.removeChild(delButton.parentNode);
	});
	ul.appendChild(listItem);
	listItem.appendChild(delButton);
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
li.addEventListener("click", function() {
	li.classList.toggle('strike');
});

var button, input, ul, example;

button = document.getElementById('enter');
input = document.getElementById('userInput')
ul = document.querySelector('ul');
example = document.querySelector('li')

function createElement() {
	if(example != undefined)
	{
		ul.removeChild(example);
		example = undefined;
	}
	var listItem, listItemText, delButton, delButtonText, divButton;
	listItem = document.createElement('li');
	delButton = document.createElement('button');
	divButton = document.createElement('div');
	listItemText = document.createTextNode(input.value);
	delButtonText = document.createTextNode('Delete');
	listItem.appendChild(listItemText);
	delButton.appendChild(delButtonText);
	delButton.classList.add('circle');
	delButton.addEventListener('click', function() {
		ul.removeChild(divButton);
	});
	listItem.addEventListener('click', function() {
		listItem.classList.toggle('strike');
	});
	divButton.appendChild(listItem);
	divButton.appendChild(delButton);
	divButton.classList.add('flexed');
	ul.appendChild(divButton);
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
example.addEventListener("click", function() {
	li.classList.toggle('strike');
});

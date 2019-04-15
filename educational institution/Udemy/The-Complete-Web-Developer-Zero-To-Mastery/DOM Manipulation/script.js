var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var button2 = document.getElementById("remove");
var input2 = document.getElementById("userinput2");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeListElement() {
	var li = document.getElementById("li");
	list.removeChild(list.childNodes[0]);

}

function removeListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function removeListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
button2.addEventListener("click", removeListAfterClick);

input.addEventListener("toggle", addListAfterKeypress);
input2.addEventListener("toggle", removeListAfterClick);
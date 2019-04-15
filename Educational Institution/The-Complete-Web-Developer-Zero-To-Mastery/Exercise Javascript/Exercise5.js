function checkDriverAge(age) {

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge(92);

function checkDriverAge2() {
	var age2 = prompt("Now your child's age mister");
	if(Number(age2) < 6) {
		alert("Please, use a specialized belt for your child");
	} else if (Number(age) > 6) {
		alert("Enjoy the time with your child mister");
	}

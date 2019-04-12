/*

Officer: 9812102
CaseNum: 303-0-60671408-9812102

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	Whilst the mouse is being dragged:
	- Make restrictedVaultComb_0 equal to 6

	When the mouse button is released:
	- Make restrictedVaultComb_0 equal to 3

	Whilst the mouse is moving:
	- Make restrictedVaultComb_0 equal to 4

	When any key is pressed:
	- Make restrictedVaultComb_0 equal to 12

	When any key is pressed:
	- Make restrictedVaultComb_1 equal to 28

	When any key is released:
	- Make restrictedVaultComb_1 equal to 55

	Whilst the mouse is moving:
	- Make restrictedVaultComb_1 equal to 88

	Whilst the mouse is being dragged:
	- Make restrictedVaultComb_1 equal to 71



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var restrictedVaultComb_0;
var restrictedVaultComb_1;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	restrictedVaultComb_0 = 0;
	restrictedVaultComb_1 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    restrictedVaultComb_0 = 4;
    restrictedVaultComb_1 = 88;
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
    restrictedVaultComb_0 = 6;
    restrictedVaultComb_1 = 71;
}

function mousePressed()
{
	console.log("mousePressed");
    
    restrictedVaultComb_1 = 28;
}

function mouseReleased()
{
	console.log("mouseReleased");
    restrictedVaultComb_0 = 3;
    restrictedVaultComb_1 = 88;
}

function keyPressed()
{
	console.log("keyPressed", key);
    restrictedVaultComb_0 = 12;
    restrictedVaultComb_1 = 28;
}

function keyReleased()
{
	console.log("keyReleased", key);
    restrictedVaultComb_1 = 55;
    
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{


	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, restrictedVaultComb_0, 31);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(restrictedVaultComb_1);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

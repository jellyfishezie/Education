/*
The case of the Python Syndicate
Stage 4

Officer: 9812102
CaseNum: 301-3-68417100-9812102

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecilKarpinskiImage;
var linaLovelaceImage;
var annaKarpinskiImage;
var countessHamiltonImage;
var rockyKrayImage;
var pawelKarpinskiImage;

var rockyKrayObj;


//declare your new objects below


var cecilKarpinskiXPos = 115;
var cecilKarpinskiYPos = 40;
var linaLovelaceXPos = 408;
var linaLovelaceYPos = 40;
var annaKarpinskiXPos = 701;
var annaKarpinskiYPos = 40;
var countessHamiltonXPos = 115;
var countessHamiltonYPos = 309;
var pawelKarpinskiXPos = 701;
var pawelKarpinskiYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObj = {
		x: 408,
		y: 309,
		image: rockyKrayImage
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImage, cecilKarpinskiXPos, cecilKarpinskiYPos);
	image(linaLovelaceImage, linaLovelaceXPos, linaLovelaceYPos);
	image(annaKarpinskiImage, annaKarpinskiXPos, annaKarpinskiYPos);
	image(countessHamiltonImage, countessHamiltonXPos, countessHamiltonYPos);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(pawelKarpinskiImage, pawelKarpinskiXPos, pawelKarpinskiYPos);


}
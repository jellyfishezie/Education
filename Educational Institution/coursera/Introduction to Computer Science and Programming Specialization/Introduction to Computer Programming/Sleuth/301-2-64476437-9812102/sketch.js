/*
The case of the Python Syndicate
Stage 3


Officer: 9812102
CaseNum: 301-2-64476437-9812102

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Pawel karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Pawel karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var rockyKrayImage;
var linaLovelaceImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;
var robbieKrayImage;
var countessHamiltonImage;

var pawelKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rockyKrayImage = loadImage("krayBrothers1.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObj = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
    image(rockyKrayImage, pawelKarpinskiObj.x, pawelKarpinskiObj.y - 269);
	image(linaLovelaceImage, pawelKarpinskiObj.x + 293, pawelKarpinskiObj.y - 269);
	image(bonesKarpinskiImage, pawelKarpinskiObj.x + 586, pawelKarpinskiObj.y - 269);
	image(robbieKrayImage, pawelKarpinskiObj.x + 293, pawelKarpinskiObj.y);
	image(countessHamiltonImage, pawelKarpinskiObj.x + 586, pawelKarpinskiObj.y);

}
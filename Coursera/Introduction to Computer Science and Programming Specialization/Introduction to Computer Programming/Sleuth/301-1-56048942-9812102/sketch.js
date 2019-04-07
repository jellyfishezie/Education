/*
The case of the Python Syndicate
Stage 2


Officer: 9812102
CaseNum: 301-1-56048942-9812102

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var countess_hamilton_img;
var bones_karpinski_img;
var rocky_kray_img;
var pawel_karpinski_img;
var lina_lovelace_img;
var cecil_karpinski_img;


var pawel_karpinski_x_coordinate = 115;
var pawel_karpinski_y_coordinate = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_img = loadImage("countessHamilton.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	lina_lovelace_img = loadImage("lina.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_img, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate);
    image(countess_hamilton_img, pawel_karpinski_x_coordinate, pawel_karpinski_y_coordinate - 269);
	image(bones_karpinski_img, pawel_karpinski_x_coordinate + 293, pawel_karpinski_y_coordinate - 269);
	image(rocky_kray_img, pawel_karpinski_x_coordinate + 586, pawel_karpinski_y_coordinate - 269);
	image(lina_lovelace_img, pawel_karpinski_x_coordinate + 293, pawel_karpinski_y_coordinate);
	image(cecil_karpinski_img, pawel_karpinski_x_coordinate + 586, pawel_karpinski_y_coordinate);

}
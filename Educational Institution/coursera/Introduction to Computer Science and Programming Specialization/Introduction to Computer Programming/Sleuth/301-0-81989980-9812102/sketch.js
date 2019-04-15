/*
The case of the Python Syndicate
Stage 1

Officer: 9812102
CaseNum: 301-0-81989980-9812102

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var bones_karpinski_image;
var countess_hamilton_image;
var pawel_karpinski_image;
var lina_lovelace_image;
var anna_karpinski_image;
var rocky_kray_image;



//declare your new variables below
var pawel_karpinski_loc_x = 701;
var pawel_karpinski_loc_y = 40;
var lina_lovelace_loc_x = 115;
var lina_lovelace_loc_y = 309;
var bones_karpinski_loc_x = 115;
var bones_karpinski_loc_y = 40;
var countess_hamilton_loc_x = 408;
var countess_hamilton_loc_y = 40;
var anna_karpinski_loc_x = 408;
var anna_karpinski_loc_y = 309;
var rocky_kray_loc_x = 701;
var rocky_kray_loc_y = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	lina_lovelace_image = loadImage("lina.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_image, pawel_karpinski_loc_x, pawel_karpinski_loc_y);
    
	image(bones_karpinski_image, bones_karpinski_loc_x, bones_karpinski_loc_y);
	image(countess_hamilton_image, countess_hamilton_loc_x, countess_hamilton_loc_y);
	image(lina_lovelace_image, lina_lovelace_loc_x, lina_lovelace_loc_y);
	image(anna_karpinski_image, anna_karpinski_loc_x, anna_karpinski_loc_y);
	image(rocky_kray_image, rocky_kray_loc_x, rocky_kray_loc_y);

}
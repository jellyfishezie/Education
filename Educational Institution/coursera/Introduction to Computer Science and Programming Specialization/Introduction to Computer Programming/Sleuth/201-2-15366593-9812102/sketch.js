/*
201 - The case of Judge Hopper
Stage 3 - The dressing room

Officer: 9812102
CaseNum: 201-2-15366593-9812102

No sooner do you enter the lobby of the Cobol Theatre than the sound of gunshots leads you running towards the backstage area. You head towards a swinging door, the star dressing room. Sure enough you find a series of bullet holes peppered across the mirror. You are about to turn round and resume your chase when you notice a familiar pattern in the holes. Frantically you grab some lipstick from the dresser and draw on the mirror.

Use the vertex function to complete the pattern.


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to join the bullet holes below

    beginShape(POINTS);
    vertex(663,143);
    vertex(612,169);
    vertex(663,215);
    vertex(745,275);
    vertex(665,320);
    vertex(741,368);
    endShape();
}

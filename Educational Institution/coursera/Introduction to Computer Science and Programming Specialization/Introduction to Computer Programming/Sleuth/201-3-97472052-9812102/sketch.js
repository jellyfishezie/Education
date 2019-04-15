/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 9812102
CaseNum: 201-3-97472052-9812102

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


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

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(540, 100); //1
    vertex(700, 83) //2
    vertex(700, 380); //3
    vertex(850, 383); //4
    vertex(850, 488); //5
    vertex(480, 485); //6
    vertex(480, 365); //7
    vertex(540, 365); //8
    vertex(540, 100); //9
    endShape();
}

function setup()
{
	//create your canvas here
    createCanvas(500,500);
}

function draw()
{
	//do your drawing here
    background(250,240,230);
    
    
    stroke(0,0,0);
    strokeWeight(18);
    fill(250,240,230);
    ellipse(250,250,450,450);
    
    noStroke();
    fill(176,196,222, 100);
    triangle(40, 0, 100,-10,540,490);
    

    fill(255,165,0, 100);
    triangle(400, 0, 300,-10,-50,550);
    
    stroke(0,0,0, 100);
    strokeWeight(1);
    fill(255,255,0,100);
    ellipse(250,250,200,200);
     fill(255,165,0,100);
    ellipse(200,200,100,100);
     fill(255,0,0,100);
    ellipse(150,150, 100,100);
     fill(0,255,255);
    ellipse(350,150, 100, 100);
    
    stroke(0,0,0);
    line(100, 400, 450, 200);
    line(400, 400, 150, 200);
    line(400, 400, 250, 200);
    line(100, 250, 450, 250);
}
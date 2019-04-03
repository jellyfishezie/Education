function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{
	// white triangles
    strokeWeight(24);
    fill(255,255,255);
    //First
    rect(0, 50, 600/6, 600/4);
    //Second
    rect(0, 207, 600/6, 310);
    
    
    // black space
    fill(0,0,0);
    //First
    rect(0, 200, 100, 6);
    
    
    
    //set the fill colour to red
	fill(255, 0, 0);
    //set a thick stroke weight for the black lines
	strokeWeight(16);
    //draw the red rectangle 
	rect(100, 50, 600, 600);
	
    //blue square
    strokeWeight(10);
    fill(30,144,255);
    rect(0, 517, 95, 110);
    
    //white square
    fill(255,255,255);
    rect(100, 517, 543, 110);
    rect(650, 517, 50, 66);
    
    //yellow square
    fill(255,255,102);
    rect(650, 593, 50, 70);
    
    strokeWeight(0)
    fill(255,255,255);
    rect(0, 0, 760, 68); // white line horizantal top
    rect(690, 0, 50, 650); // white line downward right
    rect(0, 0, 12, 750); //white line downward left
    rect(0, 670, 740, -48); //white horizantal bottom
    
}
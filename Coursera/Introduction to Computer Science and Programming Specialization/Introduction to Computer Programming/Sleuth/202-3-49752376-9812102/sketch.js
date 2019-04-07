/*

Officer: 9812102
CaseNum: 202-3-49752376-9812102

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce orange filled text with black outline in Diggity font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(631,568);
	textSize(34);
}

function draw()
{
	background(255);

	push();
	fill(255,255,0);
	stroke(255,0,255);
	textFont(Melissa);
//	text("Perhaps", 304,214);
	pop();
	fill(255,255,0);
	stroke(0,0,0);
	textFont(RonsFont);
//	text("so,", 317,292);
	push();
	stroke(0,0,255);
	textFont(Diggity);
//	text("The", 273,172);
	pop();
	stroke(0,0,255);
	textFont(Melissa);
//	text("Is", 565,102);
	push();
	stroke(255,0,255);
	textFont(RonsFont);
//	text("ilence.", 490,172);
//	text("no", 110,102);
	pop();
	textFont(Diggity);
//	text("?", 262,292);
	fill(0,255,255);
	textFont(Melissa);
//	text("of", 156,292);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("for", 96,249);
//	text("send", 452,292);
	fill(255,192,203);
	textFont(Diggity);
//	text("avoiding", 138,214);
	textFont(Melissa);
//	text("sort", 338,249);
	stroke(0,0,0);
	textFont(Diggity);
//	text("relationship", 80,138);
	fill(255,165,0);
	stroke(0,255,0);
	textFont(RonsFont);
//	text("away", 16,249);
	fill(255,192,203);
	textFont(Diggity);
//	text("secrets,", 326,172);
	fill(255,165,0);
	textFont(Ballpointprint);
//	text("continual", 386,102);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("and", 271,249);
	fill(255,255,0);
//	text("not", 367,138);
	push();
	stroke(255,0,255);
//	text("I", 363,292);
	pop();
	stroke(255,0,0);
	textFont(Ballpointprint);
//	text("I", 14,102);
	textFont(RonsFont);
//	text("me", 229,214);
	stroke(0,255,0);
	textFont(Ballpointprint);
//	text("Are", 25,214);
	textFont(Diggity);
//	text("?", 247,172);
	fill(255,192,203);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("these", 297,102);
//	text("we", 390,214);
	fill(0,255,255);
	textFont(RonsFont);
//	text("more", 15,172);
	fill(255,192,203);
	textFont(Melissa);
//	text("My", 19,34);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Diggity);
//	text("sure", 424,138);
//	text("you", 90,214);
	textFont(RonsFont);
//	text("s", 476,172);
	fill(255,165,0);
	textFont(Melissa);
//	text("s.", 345,333);
	fill(0,255,255);
//	text("out.", 480,249);
	stroke(255,0,255);
	textFont(Diggity);
//	text("longer", 152,102);
	fill(255,165,0);
	stroke(0,0,0);
	text("ignore", 224,102);
	text("safe", 208,138);
	fill(255,192,203);
	stroke(0,0,255);
	textFont(RonsFont);
//	text("can", 393,292);
	textFont(Ballpointprint);
//	text("can", 56,102);
//	text("break", 183,249);
	push();
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Diggity);
//	text("all", 449,249);
	pop();
	textFont(Melissa);
//	text("x", 86,469);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("guarded", 129,333);
//	text("you", 16,292);
//	text("our", 13,138);
	textFont(Melissa);
//	text("how", 485,138);
	stroke(0,0,0);
	textFont(RonsFont);
//	text("short", 75,292);
//	text("?", 280,214);
	fill(255,165,0);
	textFont(Ballpointprint);
//	text("can", 129,172);
	fill(255,192,203);
	stroke(255,0,255);
	textFont(Melissa);
//	text("delays.", 494,102);
	push();
	fill(255,165,0);
	stroke(0,255,0);
//	text("Are", 521,249);
	pop();
	fill(0,255,255);
//	text("sometime", 256,333);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(RonsFont);
//	text("a", 156,249);
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("I'm", 289,138);
	stroke(255,0,255);
	textFont(Melissa);
//	text("should", 443,214);
	push();
	stroke(0,0,255);
	textFont(Ballpointprint);
//	text("cash.", 529,292);
	pop();
	stroke(255,0,0);
	textFont(Diggity);
//	text("If", 288,292);
	stroke(0,0,0);
	textFont(Melissa);
//	text("?", 270,138);
	fill(0,255,255);
	stroke(255,0,255);
	textFont(Ballpointprint);
//	text("this", 388,249);
	fill(255,165,0);
	stroke(255,0,0);
//	text("go", 508,214);
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Melissa);
//	text("are", 51,333);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Diggity);
	text("take", 183,172);
	text("the", 426,172);
	textFont(RonsFont);
//	text("much", 530,138);
//	text("darling", 57,34);
	fill(0,255,255);
	stroke(0,255,0);
//	text("Daisy", 8,469);
	stroke(255,0,255);
//	text("I", 99,172);
	fill(255,165,0);
	stroke(0,0,0);
	textFont(Diggity);
	text("money", 185,292);
	fill(0,255,255);
	textFont(Melissa);
//	text("You", 10,333);
//	text("yours,", 122,401);
	textFont(RonsFont);
//	text("so", 89,333);
//	text("Forever", 8,401);
	stroke(255,0,0);
	textFont(Diggity);
//	text("Bob,", 163,34);



}

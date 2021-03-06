
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject,PaperObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,660);
	PaperObject = new Paper(200,150,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  PaperObject.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var option = {
			x:130,
			y:-145
		}
	  Body.applyForce(PaperObject.body,PaperObject.body.position,option);  
	}
}


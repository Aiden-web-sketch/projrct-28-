
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1=new Roof(500,200,500,20)

	rope1=new Rope()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(5,600,8);

  roof1.display()
  
  drawSprites();
 
}




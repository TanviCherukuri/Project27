
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof,
rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,150,700,10);

	bobObject1 = new Bob(200,200,10);
	bobObject2 = new Bob(250,200,10);
	bobObject3 = new Bob(300,200,10);
	bobObject4 = new Bob(350,200,10);
	bobObject5 = new Bob(400,200,10);

	rope1 = new Rope(bobObject1.body,{x:200,y:150});
	rope2 = new Rope(bobObject2.body,{x:250,y:150});
	rope3 = new Rope(bobObject3.body,{x:300,y:150});
	rope4 = new Rope(bobObject4.body,{x:350,y:150});
	rope5 = new Rope(bobObject5.body,{x:400,y:150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




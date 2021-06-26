
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball;
var block1;
var block2;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution:0.8,
		isStatic:false,
		friction:0,
		density:1.2,
	
	}

	var ground_options={
		isStatic: true,
		
	  }
	


	block1 = Bodies.rectangle(600,650,30,20,ground_options);
	World.add(world,block1);
	
    plane = Bodies.rectangle(600,700,1200,20,ground_options);
    World.add(world,plane);

	ball = Bodies.circle(30,100,35,ball_options);
	World.addBody(world,ball);


	block2 = Bodies.rectangle(750,650,30,20,ground_options);
	World.add(world,block2);


	



	


	Engine.run(engine);


	
	
  
rectMode(CENTER);
ellipseMode(RADIUS);


}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  push()
  fill("white");
  stroke("white");
  ellipse(ball.position.x,ball.position.y,30);
  pop();

 fill("yellow");
 rect(plane.position.x,plane.position.y,2000,29);
push();
fill("yellow");

 rect(block1.position.x,block1.position.y,15,70);
 rect(block2.position.x,block2.position.y,15,70);
 
pop();
  
  

 
}


function keyPressed()
{
  if(keyCode == RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-40});
    }
	if(keyCode == LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-10,y:0});
    }
	
}







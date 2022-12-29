
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,30,ball_options)
	World.add(world,ball)

	Engine.run(engine);
	groundObj = new Ground(450,770,900,20)
	leftSide = new Ground(650,725,10,100)
	rightSide = new Ground(750,725,10,100)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,30,30)
  verticalForce()

  groundObj.display()
  leftSide.display()
  rightSide.display()
}

function verticalForce(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-8})
	}
}






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var engine;
var ground; 
var box1Body,box2Body,box3Body;  
var box1,box2,box3;
var ball1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground= new Ground(400,690,800,15);

    
    //create pysics boxes
	box1Body = Bodies.rectangle(400,630,200,20,{isStatic:true} );
  World.add(world, box1Body);
  
  box2Body = Bodies.rectangle(400,630,200,20,{isStatic:true} );
  World.add(world, box1Body);
  
  box3Body = Bodies.rectangle(400,630,200,20,{isStatic:true} );
  World.add(world, box1Body);
  
  //creating boxes

  box1 = createSprite(640,680,200,20);
  box1.shapeColor = "pink";

  box2 = createSprite(550,620,20,100);
  box2.shapeColor = "pink";

  box3 = createSprite(730,620,20,100);
  box3.shapeColor = "pink";

//creating circle

ball1 =new Ball(100,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();
  ball1.display();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85, y:85});
  
  }
}



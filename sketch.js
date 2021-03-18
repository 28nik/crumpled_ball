
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var keychecker = 1;
var box1, box2, box3;
var xPos = 450;
var yPos = 10;
var dustbin;

function preload(){
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1350, 615);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(width-(width-1050),height-(height-510),10,120);
	box2 = new Box(width-(width-1100),height-(height-570),110,10);
	box3 = new Box(width-(width-1150),height-(height-510),10,120);
	paperObject=new Paper(80,450,50);
	trash = new Dustbin(1100,510, 120,145);
	// trashBody = Bodies.circle(100 , 200 , 15 , {restitution:0.3, friction: 0.5, density: 1.5});
	// World.add(world, trashBody);
	

	ground = Bodies.rectangle(width/2, height-15, width, 30, {isStatic: true})
	World.add(world, ground);

	groundSprite = createSprite(ground.position.x, ground.position.y, width, 30)
	// trash = createSprite(width-(width-1100),width-(width-1150),90,90);
	
	launcher= new Launcher(paperObject.body, {x:200, y:250});

	Engine.run(engine);

	
  
}


function draw() {
	
	

	Engine.update(engine);
	imageMode(CENTER);
	background(255);
	paperObject.display();
	box1.display();
	box2.display();
	box3.display();
	launcher.display();
	trash.display();
	
	fill("pink");
	
	drawSprites();
 
	
	
}


// function keyPressed() {
// 	if (keyCode === UP_ARROW) {

// 	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
// 	}
// }

function mouseDragged() {
	Matter.Body.setPosition(paperObject.body, {x: mouseX, y: mouseY})
      }
      
      function mouseReleased() {
	launcher.fly();
      }

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var i1;
var treeObj, knife1 ,ground1, sling1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var kill;
var play1 =false
var t =false
var gameState =0;

function preload(){
	boy1=loadImage("boy.png");
	dogI = loadImage("dog.png");
rip =loadImage("rip.png");
kill = loadSound("kill.mp3")
  }

function setup() {

	createCanvas(1300, 600)

	engine = Engine.create();
	world = engine.world;

	knife1 =new knife(235,420,30); 
	sling1=new SlingShot(knife1 .body,{x:235,y:420})
 ground1 = new ground(1100,500,100,100)

	dog1 = createSprite(1100,500,100,20);
	dog1.addImage(dogI);
	dog1.scale=0.5;
	
	input1 = createInput("name");
	input2 =createInput("name");
  
	input1.position(50,100);
  input2.position(50,200);
   button =createButton("play");
   button.size(100,100)
  button.position(50,300)
	
	button.mousePressed(()=> {
		gameState =1
	})
	
	
	
	

	Engine.run(engine);

}

function draw() {


  background("lightGreen");
  textSize(30);
  fill('purple');
  textFont("Broadway");

  
 
  if(gameState === 0)
  {
	  dog1.visible = false
	  text("enter your name here",50,50);

	  text("enter the name of your enemy",20,170);



}

if(gameState === 1)
{
	
	dog1.visible = true;
	button.hide();
input1.hide() ;
  input2.hide();

  


	text("Press space to get another chance!!",50 ,50);


	text(input1.value(),200,370);
	text(input2.value(),1100,390);
	image(boy1,180,360,250,300)


	detectollision(knife1,ground1)
  

	knife1.display();

  
}
if(gameState === 2)
{


	fill("blue")
	strokeWeight(6)
	stroke("black")
	text("Press refresh to play again!!",50 ,50);



	text("made for  Abhudhay ",50,150);
	text ("made by aadi",50,250);
	text("animations by agam",50,350);
	text("sound by aadi",50,450);
	text("idea by shub ",50,550);
}

drawSprites();
}

function mouseDragged()
{
	if( gameState === 1)
	{
	Matter.Body.setPosition(knife1 .body, {x:mouseX, y:mouseY}) 

	}
}

function mouseReleased()
{
if(gameState === 1)
{
	sling1.fly();
}	
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(knife1.body, {x:235, y:420}) 
	  sling1.attach(knife1.body);
	}
  }
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.h+lstone.r && play1 === false)
   {
	   play1 = true
	   kill.play();
	 dog1.addImage(rip);
	 gameState = 2;
	 
   } 
  }

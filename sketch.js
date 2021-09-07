var ISS;
var iss_image;
var scottKelly;
var eating_image;
var drinking_image;
var sleeping_image;
var excercise1_image;
var moving_image;
var brush;
var instructions;
var instructions_image;
var bathing_image;

function preload(){
  iss_image =loadImage("iss.png");
  eating_image =loadAnimation("eat1.png", "eat2.png");
  drinking_image =loadAnimation("drink1.png","drink2.png");
  sleeping_image =loadImage("sleep.png");
  excercise1_image =loadAnimation("gym11.png","gym12.png");
  brush = loadAnimation("brush.png");
  instructions_image = loadImage("instructions.png");
  moving_image = loadAnimation("move.png", "move1.png");
  bathing_image = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(400, 400);
   
  ISS = createSprite(200,200,400,400);
  ISS.addAnimation("background",iss_image);
  ISS.scale=0.1;

  instructions= createSprite(100,150);
 instructions.addAnimation("guiding", instructions_image);
 instructions.scale=0.5;

  scottKelly = createSprite(300,230);
  scottKelly.addAnimation("sleeping",sleeping_image);
  scottKelly.scale=0.1;
  
 

}

function draw() {
  background(221);

  if(keyDown("UP_ARROW")){
    scottKelly.addAnimation("brushing",brush );
    scottKelly.changeAnimation("brushing");
    scottKelly.y= 200;
    scottKelly.x= 200;
    scottKelly.velocityX=0;
    scottKelly.velocityY=0;
  }
 
  if(keyDown("DOWN_ARROW")){
    scottKelly.addAnimation("gymming",excercise1_image );
    scottKelly.changeAnimation("gymming");
    scottKelly.y= 200;
    scottKelly.x= 200;
    scottKelly.velocityX=0;
    scottKelly.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    scottKelly.addAnimation("eating",eating_image );
    scottKelly.changeAnimation("eating");
    scottKelly.y= 200;
    scottKelly.x= 200;
    scottKelly.velocityX=0;
    scottKelly.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    scottKelly.addAnimation("bathing",bathing_image );
    scottKelly.changeAnimation("bathing");
    scottKelly.y= 200;
    scottKelly.x= 200;
    scottKelly.velocityX=0;
    scottKelly.velocityY=0;
  }

  if(keyDown("space")){
    scottKelly.addAnimation("moving",moving_image );
    scottKelly.changeAnimation("moving");
    scottKelly.y= 200;
    scottKelly.x= 200;
    scottKelly.velocityX=-2;
    scottKelly.velocityY=3;
  }


  drawSprites();
}
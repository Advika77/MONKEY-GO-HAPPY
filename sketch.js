
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
var rand;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
createCanvas(400,400);
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
monkey.x=50;
  
  ground=createSprite(400,350,400,10);
  ground.x=ground.width/2;
  invisibleGround = createSprite(200,360,400,10);
  invisibleGround.visible = false;
   
  
   edges = createEdgeSprites();
  }


function draw() {
spawnBananas();
  spawnObstacles();
  background("white");
 
  
  if(keyDown("space")&&monkey.y>=290.5){
    monkey.velocityY = -10;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  
 ground.velocityx=-4;
  console.log(ground.x);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime : " + survivalTime , 100 ,50);
  
  monkey.collide(invisibleGround);
  
 drawSprites(); 
}

function spawnBananas() {
  
   if(frameCount%60===0){
var banana=createSprite(300,200,10,30);
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.y=Math.round(random(100,300));
  console.log(banana.depth);
 banana.velocityX= -5;
     banana.lifeTime=100;
  monkey.depth=banana.depth; 
    monkey.depth=banana.depth+1;
}
}
function spawnObstacles(){

  
   if(frameCount%60===0){
  obstacle=createSprite(300,200,10,30);
  
  obstacle.scale=0.1;
     obstacle.lifeTime=100;
      obstacle.velocityX= -6;
  obstacle.y=Math.round(random(355,360));
    obstacle.addImage(obstacleImage);
   console.log(obstacle.depth);
 obstacle.depth=monkey.depth;
    monkey.depth=monkey.depth+1;

  }
}






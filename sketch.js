var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg;

function preload(){
   bg = loadImage("bg.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  //camera.x=monkey.x;
  

  ground = createSprite(400,380,800,10);
  ground.velocityX=-2;
  ground.x=ground.width/2;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(bg);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  camera.y=monkey.y;
  monkey.collide(ground);
  survivalTime=Math.round(frameCount/60);
text("survival Time:-"+survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.5
  spawnFood();
  spawnObstacle();
  drawSprites();
  
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.velocityX=-5;
    banana.addImage(bananaImage);
    banana.lifeTime=300;
    banana.scale=0.1
    FoodGroup.add(banana);
  }
}

function spawnObstacle(){
  if(frameCount % 120 === 0){
    var obstacle = createSprite(800,360,40,10);
   // obstacle.y=random(120,200);
    obstacle.velocityX=-5;
       obstacle.addImage(obstacleImage);
       obstacle.lifeTime=300;
       obstacle.scale=0.1
    obstacleGroup.add(obstacle);
  }
}







var space, spaceImage;
var ship, shipImage;
var meteor, meteorImage, meteorGroup;
var EdgeSprites;
var gameState;
var PLAY=1;
var END=0;
var score;
function preload() 
{
  spaceImage = loadImage("UniversV5.png");
  shipImage = loadImage("shipV5.png");
  meteorImage = loadImage("meteoroid.png");
}

function setup() 
{
  createCanvas(400, 400);

  space = createSprite(160, 50, 200,6);
  space.addImage(spaceImage);

  ship = createSprite(200, 300, 20, 20);
  ship.addImage(shipImage);

  meteorGroup = new Group();

  gameState = PLAY;
  
  score = 0;
  
}

function draw() 
{
  background("black");

  ship.setCollider("rectangle", -10, -10);
  
  
  text("Score: "+ score, 350,50);
  

  if (gameState===PLAY) 
  {
   
    
    
    if (meteorGroup.isTouching(ship)) 
    {
      
      gameState=END;
      
    }
    
    ship.scale = 0.2;

   space.velocityY = 1;
   space.scale = 0.4;
    
    score = score + Math.round(getFrameRate()/60);
    
    if (space.y > 210) 
    {
      space.y = 0;
    }
  
    if (ship.x > 400) 
    {
      ship.x = 0;
    }
  
    if (ship.x < 0) 
    {
      ship.x = 400;
    }
  
    if (keyDown("right")) 
    {
      ship.x = ship.x + 10;
    }
  
    if (keyDown("left")) 
    {
      ship.x = ship.x - 10;
    }

   spwanmetors();
   drawSprites();
    fill("white");
    textSize(25);
    text("Score: "+ score, 280,30);
    
    
  }

if(gameState===END) 
  {
    console.log("Game Ended");
    text("Your final score was:-"+score,200,200)
  }

  ship.debug = false;
 
 
  

  
}
function spwanmetors() 
{
  if (frameCount % 60 === 0) 
  {
    meteor = createSprite(Math.round(random(0, 400)), -10, 20, 20);
    meteor.addImage(meteorImage);
    meteor.scale = 0.1;
    meteor.velocityY = 8;
    meteor.lifetime = 100;
    meteorGroup.add(meteor);
  }
}

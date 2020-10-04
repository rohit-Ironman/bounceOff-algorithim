var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(700, 200, 80, 50);
  movingRect.shapeColor = "yellow";

  fixedRect  = createSprite(200,200,50,80);
  fixedRect.shapeColor = "yellow";

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5; 
}

function draw() {
  background(0);  



  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 ) {
    movingRect.velocityX = -1*movingRect.velocityX;
    fixedRect.velocityX = -1*fixedRect.velocityX;
  }
  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = -1*movingRect.velocityY;
      fixedRect.velocityY = -1*fixedRect.velocityY;
  }

 /* if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
     
  }
  else {
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }*/



  
  drawSprites();
}
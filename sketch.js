var fixingRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixingRect = createSprite(600,400,50,80);
  fixingRect.shapeColor ="red";
  fixingRect.debug = true;
  
  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixingRect.x < fixingRect.width/2 + movingRect.width/2
    && fixingRect.x - movingRect.x < fixingRect.width/2 + movingRect.width/2
    && fixingRect.y - movingRect.y < fixingRect.height/2 + movingRect.height/2
    && movingRect.y - fixingRect.y < fixingRect.height/2 + movingRect.height/2){

      movingRect.shapeColor = "blue";
      fixingRect.shapeColor = "blue";
    }
   else
    {
     movingRect.shapeColor = "red";
     fixingRect.shapeColor = "red";
    }
    


  drawSprites();
}
var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600,400,40,80);
  fixedrect.shapeColor="green";

  movingrect=createSprite(200,400,80,30);
  movingrect.shapeColor="green";

  movingrect.velocityX=2;
  fixedrect.velocityX=-2;
}

function draw() {
  background(255,255,255);  

  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  
  bounceOff(movingrect,fixedrect);

  //isTouching();

  drawSprites();
}




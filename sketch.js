var mBox,fBox,box1,box2;

function setup() {
  createCanvas(800,400);

  mBox = createSprite(100,200,50,50);
  mBox.shapeColor="green";
  fBox = createSprite(400,200,50,50);
  fBox.shapeColor="green";
  box1 = createSprite(100,300,50,50);
  box1.shapeColor="blue";
  box2 = createSprite(300,300,50,50);
  box1.velocityX=2;
  box2.velocityX=-2;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow");
  mBox.x=mouseX;
  mBox.y=mouseY;
  if((mBox.x-fBox.x < mBox.width/2+fBox.width/2) && (fBox.x-mBox.x < mBox.width/2+fBox.width/2)
  && (mBox.y-fBox.y < mBox.height/2+fBox.height/2) && (fBox.y-mBox.y < mBox.height/2+fBox.height/2)){
    mBox.shapeColor="red";
    fBox.shapeColor="red";
  }  
  else{
    mBox.shapeColor="green";
    fBox.shapeColor="green";
  }
  if((box1.x-box2.x < box2.width/2+box1.width/2) && (box2.x-box1.x < box2.width/2+box1.width/2)){
    box1.velocityX=box1.velocityX*(-1);
    box2.velocityX=box2.velocityX*(-1);
  }

  drawSprites();
}
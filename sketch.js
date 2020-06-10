var frect,mrect,g1,g2,g3,g4;
function setup() {
  createCanvas(800,400);
  frect=createSprite(200,250,50,80);
  mrect=createSprite(400,200,80,30);
  g1=createSprite(250,200,50,50);
  g2=createSprite(350,200,50,50);
  g3=createSprite(450,200,50,50);
  g4=createSprite(550,200,50,50);


  mrect.shapeColor=("orange");
  frect.shapeColor=("red");
  g1.shapeColor=("purple");
  g2.shapeColor="blue";
  g3.shapeColor="green";
  g4.shapeColor="white";

mrect.debug=true;
frect.debug=true;

  mrect.velocityY=-5;
  frect.velocityY=5;
}

function draw() {
  background(0);
  
 
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

 if(isTouching(mrect,g4)){
  mrect.shapeColor="orange";
  g4.shapeColor="green";
}
else{
  mrect.shapeColor=("orange");
  g4.shapeColor=("red");
 }
 bounceOff(mrect,frect);
drawSprites();


}


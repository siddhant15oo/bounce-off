var some
var two



function setup() {
  createCanvas(800,400);
  some=createSprite(600, 200, 50, 50);
  two=createSprite(200,200,50,50)
  some.velocityX=-3
  two.velocityX=3
}


function draw() {
  background(255,255,255);  
  

  some.shapeColor="blue"
  two.shapeColor="red"

  if (some.x-two.x<some.width/2+two.width/2){
   some.velocityX=3
   two.velocityX=-3
  }
  if (some.x>800) {
    some.velocityX=-3
  }
  if (two.x<0){
    two.velocityX=3
  }

  drawSprites();
}
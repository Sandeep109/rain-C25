function setup() {
  createCanvas(innerWidth,innerHeight);
  frameRate(1000);
  

}

function draw() {
  background(0);  
  stroke(0,0,0) ;
  l = createSprite(random(100,1500),random(-200,-100),4,50)
  l.velocityY  = 30;
  if(l.y > 1200){
    l.y = -100;

  }
  
 drawSprites();
}
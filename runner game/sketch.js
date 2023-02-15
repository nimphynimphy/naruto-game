var Score= 0
const PLAY = 1
 const END = 0
gameState = PLAY 

function preload()
{
  bgImage= loadImage("background.jpg");
narutoImage= loadImage("naruto.png");

susukeImage=loadImage("susuke.png")


}




function setup() {
  createCanvas(600,300);
  bg=createSprite(300, 70, 600, 300);
  bg.addImage(bgImage)
  bg.scale=0.65
  bg.velocityX=-2
  naruto=createSprite(50,250,60,60)
  naruto.addImage(narutoImage)
  naruto.scale=0.4
ground=createSprite(300,300,600,10)
naruto.debug=false
naruto.setCollider("rectangle",0,0,50,200)
susukeGroup = new Group ()

}

function draw() {
  background(55,55,55); 
  drawSprites();



  if(gameState=== PLAY){
    fill("yellow")
    textSize(20)
    text("score"+Score,50,100 )
    Score= Score+ Math.round(frameCount/60)
  }
else if (gameState === END){
  susukeGroup.destroyEach()
  naruto.destroy()
  fill("red")
  textSize(40)
text("GAME OVER!",150,150)
bg.velocityX=0
}

if (susukeGroup.isTouching(naruto)) {
   gameState= END
}
  
if(keyDown("space")&&naruto.y >= 100) {
 naruto.velocityY = -20;
  }

  naruto.velocityY = naruto.velocityY + 0.8
  naruto.collide(ground)
 
  if(bg.x<200){
    bg.x=width/2
  }
  
  createsusuke()
 

}
  

function createsusuke(){
  if(frameCount%150===0){
susuke=createSprite(600,260,60,60)
susuke.addImage(susukeImage)
susuke.velocityX=-2
susuke.scale=0.45
susukeGroup.add(susuke)
  }
}

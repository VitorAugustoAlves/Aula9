var bloco

function setup() {
  createCanvas(800,800);
bloco=createSprite(400,400,30,30)
bloco.shapeColor=("white")
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  bloco.x=bloco.x+5
}
if(keyDown('Left')){
  bloco.x=bloco.x-5
}
if(keyIsDown(UP_ARROW)){
  bloco.y=bloco.y-5
}
if(keyIsDown(DOWN_ARROW)){
  bloco.y=bloco.y+5
}
drawSprites()
}





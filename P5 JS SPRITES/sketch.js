var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = color(255);
 box.position.x=0;
 box.position.y=150;
 box.velocityX=5
}

function draw()
{
 background(220);
 drawSprites();
}


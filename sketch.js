var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var leaves,leavesImg;
var redLeaf, redLeafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
  redLeaf = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x =mouseX ;
  drawSprites();
  var select=Math.round(random(1,3));
  if(frameCount % 80 ==0){
    if(select===1){
    createApples();
    }
    else if(select===2){
      createOrange();
    }
    else{
      createRed();
    }
}
}

function createApples(){
    var apple=createSprite(random(50, 350),40,10,10);
    apple.addImage(applesImg);
    apple.scale=0.07;
    apple.velocityY=3;
    apple.lifeTime=150;

}

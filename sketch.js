//Create variables here
var dog, dogh, dogS;
var database,Foods;
function preload()
{ 
  //load images here
  dogh= loadImage("images/dogImg.png");
  dogS= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogS);
  dog.scale=0.1;
  foodstock=database.ref("Food");
  foodstock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)) {
  writeStock(Foods);
  dog.addImage(dogh);
  }
  drawSprites();
  //add styles here
  fill (255,255,254);
  stroke ("black");
  text("Food reamining"+ Foods,170,200);
}
function readStock(data) {
  Foods=data.val();
}
function writeStock(x) {
  if(x<=0) {
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}


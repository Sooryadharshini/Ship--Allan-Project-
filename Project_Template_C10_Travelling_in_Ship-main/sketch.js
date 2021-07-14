var ship, ship1;
var sea , sea1, edges;

function preload () {
 ship1=loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
 sea1=loadAnimation("sea.png");
}

function setup () {
createCanvas(600,500);

//Creating the Sea
sea = createSprite(600,300);
sea.addAnimation("sea",sea1);
sea.scale=0.5;
sea.velocityX=-1;

//Creating the Ship
ship = createSprite(50,200,20,50);
ship.addAnimation("ship",ship1);

//Soorya - Changed CreateEdgeSprites spelling 
edges = createEdgeSprites();

//Adding Scale to Ship 
ship.scale=0.25;
ship.x=90;
ship.y=300;
}

function draw () {
 background("blue");

 //Soorya- changed KeyDown spelling 
 if(keyDown("enter")) {
  ship.velocityX= 5;
 }
 
 if(keyDown("Left")) {
     ship.velocityX= -5;
 }

 if(keyDown("space")) {
     ship.velocityX=0;
 }

 if(sea.x<0) {
     sea.x=sea.width/2;
 }

 ship.collide(edges[3])
 
 drawSprites();
}
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1, log2, log3, log4;
var bird1;

function setup() {
  createCanvas(1200,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  ground= new Ground(600,height,1200,20);
  box1 = new Box(700,320,70,70);
  pig1= new Pig(810,350);
  box2 = new Box(920,320,70,70);
  log1=new Log(810,260,300,PI/2);

  box3 = new Box(700,225,70,70);
  pig2= new Pig(810,195);
  box4 = new Box(920,255,70,70);
  log2=new Log(810,105,300,PI/2);

  box5 = new Box(810,70,70,70);
  log3=new Log(760,70,150,PI/7);
  log4=new Log(860,70,150,-PI/7);

  bird1= new Bird(200,200)
}

function draw() {
  background("black");
   Engine.update(myEngine);
  
  
 box1.display();
 box2.display();
 ground.display();
 pig1.display();
 log1.display();

 box3.display();
 box4.display();
 pig2.display();
 log2.display();

 box5.display();
 log3.display();
log4.display();
bird1.display();
}
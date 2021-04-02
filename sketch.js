const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2, box3, box4 , box5;
var Bird1;
var pig1,pig2;
var log1;
var log2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    Bird1 =new bird(150,100);
    pig1 = new pig(810,350);
    pig2= new pig(810,220);
    log1 = new log(810,260,300,PI/2 );
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    box5 = new box (810,160,70,70);
    log2 = new log(810,180,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Bird1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    pig2.display();
  
  
  
  
  
}
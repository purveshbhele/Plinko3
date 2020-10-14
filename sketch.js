const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];


function setup() {
  createCanvas(500,650);
  
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,643,600,10);
    line1 = new Line(100,540,10,200);
    line2 = new Line(200,540,10,200);
    line3 = new Line(300,540,10,200);
    line4 = new Line(400,540,10,200);
    dot1= new Dot(480,300,10,10);
    dot2= new Dot(420,300,10,10);
    dot3= new Dot(360,300,10,10);
    dot4= new Dot(300,300,10,10);
    dot5= new Dot(240,300,10,10);
    dot6= new Dot(180,300,10,10);
    dot7= new Dot(120,300,10,10);
    dot8= new Dot(60,300,10,10);
    dota1= new Dot(20,200,10,10);
    dota2= new Dot(80,200,10,10);
    dota3= new Dot(140,200,10,10);
    dota4= new Dot(200,200,10,10);
    dota5= new Dot(260,200,10,10);
    dota6= new Dot(320,200,10,10);
    dota7= new Dot(380,200,10,10);
    dota8= new Dot(440,200,10,10);
    dotb1= new Dot(480,100,10,10);
    dotb2= new Dot(420,100,10,10);
    dotb3= new Dot(360,100,10,10);
    dotb4= new Dot(300,100,10,10);
    dotb5= new Dot(240,100,10,10);
    dotb6= new Dot(180,100,10,10);
    dotb7= new Dot(120,100,10,10);
    dotb8= new Dot(60,100,10,10);
   
}



function draw() {
  background(250, 215, 160);
  Engine.update(engine);
  
  
      
  ground.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  dot1.display();
  dot2.display();
  dot3.display();
  dot4.display();
  dot5.display();
  dot6.display();
  dot7.display();
  dot8.display();
  dota1.display();
  dota2.display();
  dota3.display();
  dota4.display();
  dota5.display();
  dota6.display();
  dota7.display();
  dota8.display();
  dotb1.display();
  dotb2.display();
  dotb3.display();
  dotb4.display();
  dotb5.display();
  dotb6.display();
  dotb7.display();
  dotb8.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  
  drawSprites();
}
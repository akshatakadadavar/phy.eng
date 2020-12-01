const Engine =Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, object;



function setup() {
  var canvas =createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

   var options={
     isStatic:true
   }


  object= Bodies.rectangle(200,100,50,50,options)
  World.add(world,object)
  console.log(object)
 
  console.log(object.position.x)
 console.log(object.position.y)
}

function draw() {
  background("lightblue"); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect (object.position.x,object.position.y,50,50)
  drawSprites();
}
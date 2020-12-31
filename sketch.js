var bullet1, bullet2, bullet3, bullet4;
var wall1, wall2, wall3, wall4;
var divider1, divider2, divider3;
var speed1, speed2, speed3, speed4; 
var weight1, weight2, weight3, weight4;
var thickness1, thickness2, thickness3, thickness4;


function setup() {
  createCanvas(1600,400);

  //giving thickness, speed and weight their values
  speed1 = random(223,321);
  weight1 = random(30,52);
  thickness1 = random(22,83);
  speed2 = random(223,321);
  weight2 = random(30,52);
  thickness2 = random(22,83);
  speed3 = random(223,321);
  weight3 = random(30,52);
  thickness3 = random(22,83);
  speed4 = random(223,321);
  weight4 = random(30,52);
  thickness4 = random(22,83);


  //creating walls
  wall1 = createSprite(1530,50,20,50);
  wall2 = createSprite(1530,150,20,50);
  wall3 = createSprite(1530,250,20,50);
  wall4 = createSprite(1530,350,20,50);


  //creating bullets
  bullet1 = createSprite(30, 50, 10, 10);
  bullet1.velocityX = speed1;
  bullet1.shapeColor = color(255,255,255);

  bullet2 = createSprite(30, 150, 10, 10);
  bullet2.velocityX = speed2;
  bullet2.shapeColor = color(255,255,255);
  
  bullet3 = createSprite(30, 250, 10, 10);
  bullet3.velocityX = speed3;
  bullet3.shapeColor = color(255,255,255);
  
  bullet4 = createSprite(30, 350, 10, 10);
  bullet4.velocityX = speed4;
  bullet4.shapeColor = color(255,255,255);
  
  //creating dividers
  divider1 = createSprite(800,100,1600,5);
  divider1.shapeColor = color(255,255,255);

  divider2 = createSprite(800,200,1600,5);
  divider2.shapeColor = color(255,255,255);

  divider3 = createSprite(800,300,1600,5);
  divider3.shapeColor = color(255,255,255);
 
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(wall1.x - bullet1.x < (bullet1.width + wall1.width) / 2){
    bullet1.velocityX = 0;
    bullet1.x = 1515;
    var damage = (0.5 * weight1 * speed1 * speed1) / (thickness1 * thickness1 * thickness1);
    if (damage > 10) {
      wall1.shapeColor = color(255,0,0);
    }
    if (damage < 10) {
      wall1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x - bullet2.x < (bullet2.width + wall2.width) / 2){
    bullet2.velocityX = 0;
    bullet2.x = 1515;
    var damage = (0.5 * weight2 * speed2 * speed2) / (thickness2 * thickness2 * thickness2);
    if (damage > 10) {
      wall2.shapeColor = color(255,0,0);
    }
    if (damage < 10) {
      wall2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x - bullet3.x < (bullet3.width + wall3.width) / 2){
    bullet3.velocityX = 0;
    bullet3.x = 1515;
    var damage = (0.5 * weight3 * speed3 * speed3) / (thickness3 * thickness3 * thickness3);
    if (damage > 10) {
      wall3.shapeColor = color(255,0,0);
    }
    if (damage < 10) {
      wall3.shapeColor = color(0,255,0);
    }
  }

  if(wall4.x - bullet4.x < (bullet4.width + wall4.width) / 2){
    bullet4.velocityX = 0;
    bullet4.x = 1515;
    var damage = (0.5 * weight4 * speed4 * speed4) / (thickness4 * thickness4 * thickness4);
    if (damage > 10) {
      wall4.shapeColor = color(255,0,0);
    }
    if (damage < 10) {
      wall4.shapeColor = color(0,255,0);
    }
  }
}

function hasCollide(o1, o2){
  if(o1.x - o2.x < (o1.width+o2.width)/ 2){
    return true;
  }
  return false;
  
  
}
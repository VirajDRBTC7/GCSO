var car,wall,speed,weight,x;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  //speed = 88;
  //weight = 1055;
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "blue";
  wall = createSprite(1330, 200, 60, height/2);
}

function draw() {
  background(255,255,255); 
  if (car.isTouching(wall)){
    Deformation=0.5*weight*speed*speed/22500
    car.velocityX = 0;
    car.x = 1300;
  if (Deformation<100){
     car.shapeColor = "green"
  }
  else if(Deformation>180){
    car.shapeColor = "red"
 }
  else if (Deformation>=100 || Deformation<=180){
    car.shapeColor = "yellow" 
  }
  

  console.log("Deformation"+Deformation)
  console.log("speed"+speed)
  console.log("weight"+weight)
     
}

 // if (Deformation=0.5*weight*speed*speed/22500>100)&&(Deformation=0.5*weight*speed*spedd/22500<180){
 //    car.shapeColor = ("yellow")
   // }
 // if (Deformation=0.5*weight*speed*speed/22500>180) {
 //   car.shapeColor = ("red")
 // }

    drawSprites();
  }

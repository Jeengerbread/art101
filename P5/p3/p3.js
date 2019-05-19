var mass = [];
var positionX = [];
var positionY = [];
var velocityX = [];
var velocityY = [];
var storedSecond = 0;
var storedMinute = 0;
var storedHour = 0;

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  fill(245, 140, 35, 192);
  storedSecond = second();
  storedMinute = minute();
  storedHour = hour();
  for (var particle = 0; particle < storedSecond; particle++){
  	addNewParticle(0.003);
  }
  for (var particle = 0; particle < storedMinute; particle++){
  	addNewParticle(0.009);
  }
  for (var particle = 0; particle < storedHour; particle++){
  	addNewParticle(0.03);
  }
}

function draw() {
  background(32);
  sizeDetermination();
  
  for (var particleA = 0; particleA < mass.length; particleA++) {
    var accelerationX = 0, accelerationY = 0;
    
    for (var particleB = 0; particleB < mass.length; particleB++) {
      if (particleA != particleB) {
        var distanceX = positionX[particleB] - positionX[particleA];
        var distanceY = positionY[particleB] - positionY[particleA];

        var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
        if (distance < 1) distance = 1;

        var force = (distance - 320) * mass[particleB] / distance;
        accelerationX += force * distanceX;
        accelerationY += force * distanceY;
      }
    }
    
    velocityX[particleA] = velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
    velocityY[particleA] = velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
  }
  
  for (var particle = 0; particle < mass.length; particle++) {
    positionX[particle] += velocityX[particle];
    positionY[particle] += velocityY[particle];
    
    ellipse(positionX[particle], positionY[particle], mass[particle] * 1000, mass[particle] * 1000);
  }
}

function addNewParticle(x) {
  size = x;
  mass.push(size);
  positionX.push(random(1000));
  positionY.push(random(1000));
  velocityX.push(0);
  velocityY.push(0);
}

function sizeDetermination() {
  var secondTemp = second();
  var minuteTemp = minute();
  var hourTemp = hour();
  var secondChanged = false;
  var minuteChanged = false;
  var hourChanged = false;
	
  if (secondTemp != storedSecond) {
	  if (secondTemp == 0){
		  mass = [];
		  positionX = [];
		  positionY = [];
		  velocityX = [];
		  velocityY = [];
		  for (var particle = 0; particle < minuteTemp; particle++){
			  addNewParticle(0.009);
		  }
		  for (var particle = 0; particle < hourTemp; particle++){
			  addNewParticle(0.03);
		  }
		  secondChanged = true;
	  }
	  else if (minuteChanged != true && hourChanged != true) {
		  addNewParticle(0.003);
	  }
	  storedSecond = secondTemp;
  }
	
  if (minuteTemp != storedMinute) {
	  if (minuteTemp == 0){
		  mass = [];
		  positionX = [];
		  positionY = [];
		  velocityX = [];
		  velocityY = [];
		  for (var particle = 0; particle < secondTemp-1; particle++){
			  addNewParticle(0.003);
		  }
		  for (var particle = 0; particle < hourTemp; particle++){
			  addNewParticle(0.03);
		  }
		  minuteChanged = true;
	  }
	  else if (secondChanged != true && hourChanged != true){
		  addNewParticle(0.009);
	  }
	  storedMinute = minuteTemp;
  }
	
  if (hourTemp != storedHour) {
	  if (hourTemp == 0){
		  mass = [];
		  positionX = [];
		  positionY = [];
		  velocityX = [];
		  velocityY = [];
		  for (var particle = 0; particle < secondTemp; particle++){
			  addNewParticle(0.003);
		  }
		  for (var particle = 0; particle < minuteTemp; particle++){
			  addNewParticle(0.009);
		  }
		  hourChanged = true;
	  }
	  else if (secondChanged != true && minuteChanged != true) {
		  addNewParticle(0.03);
	  }
	  storedHour = hourTemp;
  }
  
}
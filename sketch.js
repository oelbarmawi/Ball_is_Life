/*
Authors:
Omar Elbarmawi
Luyi Huang
Evan Lohn
Shabaan Qureshi
Christian Choi
*/

var circle = {
  x: 250, 
  y: 250,  
  d: 100,   // radius
  xSpeed: 10,
  ySpeed: 5
};

var userCircle = {
  xpos: 0,
  ypos: 0,
  diameter: 40
}

var dir_right = true;
var dir_down = true;
var score = 0;
var count = 0;

function setup() {
  createCanvas(1200, 850);
}

function draw() {           // Loops over and over again
  // Background setup
  background(222);
  fill(255,0,0);            // Red, Green, Blue (RGB)
  ellipseMode(CENTER);
  fill(255,0,0);
  
  // Starting Circle
  ellipse(circle.x, circle.y, circle.d, circle.d);
  
  // Change Directions
  if (dir_right && dir_down) {
    southEast();
    checkDir();
  }else if (!dir_right && !dir_down) {
    northWest();
    checkDir();
  }else if (!dir_right && dir_down) {
    southWest();
    checkDir();
  }else if (dir_right && !dir_down) {
    northEast();
    checkDir();
  }
  if (mouseIsPressed) {
    score += 1;
    userCircle.xpos = mouseX;
    userCircle.ypos = mouseY;
  }
  
  
  function mouseReleased() {
    // User-Created Green Ball
    fill(20, 400, 40);
    noStroke();
    userCircle.diameter += 0.02*count;
    
    
    // Conditions to maintain the Green Circle within the border of the screen.
    x_dist = width - (userCircle.diameter/2)
    y_dist = height - (userCircle.diameter/2)
    if (userCircle.xpos > x_dist) {
      userCircle.xpos = x_dist;
    }
    if ((userCircle.xpos <= ((userCircle.diameter/2)))) {
      userCircle.xpos = userCircle.diameter/2;
    }
    if (userCircle.ypos >= y_dist) {
      userCircle.ypos = y_dist;
    }
    if (userCircle.ypos <= (userCircle.diameter/2)) {
      userCircle.ypos = userCircle.diameter/2;
    }
    ellipse(userCircle.xpos, userCircle.ypos, userCircle.diameter, userCircle.diameter);
  }
  
    mouseReleased();
    
    // Check intersection of two balls
    if (dist(circle.x, circle.y, userCircle.xpos, userCircle.ypos) <= ((circle.d/2) + (userCircle.diameter /2))) {
      console.log(count);
      alert("GAME OVER. Score:" + count);
      exit();
    }
}

function southEast() {
  circle.x += circle.xSpeed;
  circle.y += circle.ySpeed;
}

function southWest() {
  circle.x -= circle.xSpeed;
  circle.y += circle.ySpeed;
}

function northWest() {
  circle.x -= circle.xSpeed;
  circle.y -= circle.ySpeed;
}

function northEast() {
  circle.x += circle.xSpeed;
  circle.y -= circle.ySpeed;
}

function checkDir() {
  if (circle.x == width - (circle.d / 2) || circle.x == (circle.d / 2)) {
    dir_right = !dir_right;
    count += 1;
  }
  if (circle.y == height - (circle.d / 2) || circle.y == (circle.d / 2)) {
    dir_down = !dir_down
    count += 1;
  }
}

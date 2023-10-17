
let balls = [];
let position;
let velocity;

function setup() {
  createCanvas(300, 300); 
  
}


function draw() {
  background(220);
  
  
  for (let b of balls) {
    b.update();
    b.display();
   

  }
  
  if (mouseIsPressed) {
    
  }
}

function mousePressed() {
  // ball.vel.add(5, -5);
  let b = new Walker();
  balls.push(b);
}


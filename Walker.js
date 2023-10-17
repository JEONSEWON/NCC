class Walker {
  constructor() {
    
    let centerX = width / 2;
    let centerY = height / 2;
    
    this.pos = createVector(centerX, centerY);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.acc = createVector(0, 0);
    this.w = random(10, 30);
    // this.t = 5;
    this.path = [];
  }

  update() {
    let randomAcc = createVector(random(-1, 1), random(-1, 1));
    this.acc.add(randomAcc);
    this.vel.add(this.acc);
    this.vel.mult(0.80);
    this.pos.add(this.vel);
    
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -5;
    }
    
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -5;
    }
    this.path.push(createVector(this.pos.x, this.pos.y));
    
    if(this.path.length > 100){
      this.path.shift();
    }
    
    for (let other of balls){
      if(other !== this) {
        let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if (d < this.w / 2 + other.w / 2){
          let angle = atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x);
          let force = createVector(cos(angle), sin(angle));
          this.vel.add(force.mult(2));
        }
      }
    }
  }

 

  display() {
    fill(random(255), random(255), random(255));
    ellipse(this.pos.x, this.pos.y, this.w);
    
    noFill();
    beginShape();
    for (let p of this.path){
      vertex(p.x, p.y);
    }
    endShape();
  }
}

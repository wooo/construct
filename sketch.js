var bubbles = [];


function setup() {
  createCanvas(600, 400);

}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}



  function draw() {
    background(0);
    for (var i=0; i < bubbles.length; i++) {
    bubbles [i].move();
    bubbles [i].display();
  }
  
    if (bubbles.length > 20) {
    bubbles.splice(0, 1);

  }
  }
  
  
  function Bubble(x, y) {
    this.x = x;
    this.y = y;
  
    this.display = function () {
      stroke (255);
      fill(50, 0, 200, 100);
      ellipse (this.x, this.y, 100, 100);
    }
    
    this.move =function () {
      this.x = this.x + random (-1, 1);
      this.y = this.y + random (-1, 1);
    }
  }
  
  //   x: random (0, width),
  //   y: random (0, height),
  //   display: function() {
  //     stroke(255);
  //     fill(50);
  //     ellipse(this.x, this.y, 24, 24);
  //   },
  //   move: function() {
  //     this.x = this.x + random(-1, 1);
  //     this.y = this.y + random(-1, 1);
  //   }
  // }
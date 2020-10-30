// var x;
// var y;
//  // x = 250;
//   // y = 250;

let pos;
let prev;
function setup() {
  createCanvas(500, 500);
  background(51);
  pos = createVector(250, 250);
  prev = pos.copy();

}

// function draw() {

//   stroke(255);
//   strokeWeight(3);
//   point(x, y)


// }

function draw() {
  stroke(255);
  strokeWeight(3);
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos)

  let step = p5.Vector.random2D();
  let r = random(10);
  if (r < .02) {
    step.mult(random(25, 100))
  }
  pos.add(step);

  // switch (r) {
  //   case 0: {
  //     return pos.x = pos.x + 1;
  //   }
  //   case 1: {
  //     return pos.x = pos.x - 1;
  //   }
  //   case 2: {
  //     return pos.y = pos.y - 1;
  //   }
  //   default: {
  //     return pos.y = pos.y + 1;
  //   }
  // }
}

function setup() {
  simple();
}

function draw() {
  drawTree(400, 500, 90, 150);
}
function drawTree(x, y, angle, length) {
  strokeWeight(length * 0.04);
  let x1, y1;
  x1 = x + cos(angle) * length;
  y1 = y - sin(angle) * length;
  line(x, y, x1, y1);
  if (Math.log(length) > 2.3) {
    drawTree(x1, y1, random(360 * 5), length * 0.8);
    drawTree(x1, y1, random(360 * 5), length * 0.8);
  }
}

function setup() {
  simple();
}

function draw() {
  fill(100, 200, 200, 100);
  strokeWeight(1);
  patternGen(400, 300, 300);
}

function patternGen(x, y, size) {
  circle(x, y, size);
  if (Math.log(size) > 2.3) {
    patternGen(x + size * 0.5, y, size / 2);
    patternGen(x - size * 0.5, y, size / 2);
    patternGen(x, y - size * 0.5, size / 2);
    patternGen(x, y + size * 0.5, size / 2);
  }
}

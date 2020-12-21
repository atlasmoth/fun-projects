function setup() {
  simple();
}

function draw() {
  let size = 200;
  patternGen(400, 200, 200);
}

function patternGen(x = 400, y = 200, size = 50) {
  circle(x, y, size);
  if (Math.log(size) > 2) {
    patternGen(x + size * 0.5, y, size / 2);
    patternGen(x - size * 0.5, y, size / 2);
    patternGen(x, y - size * 0.5, size / 2);
    patternGen(x, y + size * 0.5, size / 2);
  }
}

class Ray {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.dir = createVector(1, 0);
  }
  show() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10)
    pop()
  }
  setDir() {

  }
  cast(wall) {
    const { a, b } = wall;
    const { x: x1, y: y1 } = a;
    const { x: x2, y: y2 } = b;

    const { x: x3, y: y3 } = this.pos;
    const x4 = x3 + this.dir.x;
    const y4 = y3 + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (den === 0) return;
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
    if (t > 0 && t < 1 && u > 0) {
      return true
    } else { return }

  }
}
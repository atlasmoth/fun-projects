class Pointer {
  x = 400;
  y = 600;
  step = 20;

  right = () => {
    const { x, y, step } = this;
    let x1 = x + step * sin(90);
    let y1 = y;

    line(x, y, x1, y1);
    this.x = x1;
    this.y = y1;
  };
  left = () => {
    const { x, y, step } = this;
    let x1 = x - step * sin(90);
    let y1 = y;

    line(x, y, x1, y1);
    this.x = x1;
    this.y = y1;
  };
  forward = () => {
    const { x, y, step } = this;
    let x1 = x;
    let y1 = y - step * sin(90);

    line(x, y, x1, y1);
    this.x = x1;
    this.y = y1;
  };
}

function setup() {
  simple();
}

function draw() {
  turtle();
}

function turtle() {
  const animal = new Pointer();

  for (let d of gen()) {
    if (d === "l") {
      animal.left();
    } else if (d === "r") {
      animal.right();
    } else {
      animal.forward();
    }
  }
}

function* gen() {
  let counter = 0;
  const grammars = ["l", "u", "r"];
  while (counter < 200) {
    yield grammars[randomNumber(2)];
    counter++;
  }
}

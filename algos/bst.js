const randNum = () => Math.round(Math.random() * 100);

class Node {
  data = randNum();
  left = null;
  right = null;
  count = 0;
}

class Bst {
  root = null;

  add = () => {
    const node = new Node();
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = node;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (node.data === current.data) {
        current.count++;
        return this;
      }
      if (node.data < current.data) {
        addSide("left");
      } else {
        addSide("right");
      }
    }
  };

  find = (val) => {
    if (!this.root) return undefined;

    let current = this.root,
      found = false;

    while (current && !found) {
      if (val < current.data) current = current.left;
      else if (val > current.data) current = current.right;
      else found = true;
    }

    if (!found) return "Nothing";
    return current;
  };
}

const bst = new Bst();

bst.add();
bst.add();
bst.add();
bst.add();
bst.add();
bst.add();
bst.add();
console.log(bst.find(50));

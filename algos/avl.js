const color = Object.freeze({
  RED: "red",
  BLACK: "black",
});

const comparison = Object.freeze({
  BIGGER: 1,
  BIGGER_OR_EQUAL: [1, 0],
  SMALLER: -1,
  SMALLER_OR_EQUAL: [-1, 0],
  EQUAL: 0,
});

class RedBlackNode {
  #color;
  left = null;
  right = null;
  constructor(key = null, parent = null) {
    this.key = key;
    this.parent = parent;
    if (key === null) {
      this.#color = color.BLACK;
    } else {
      this.#color = color.RED;
      this.left = new RedBlackNode(null, this);
      this.right = new RedBlackNode(null, this);
    }
  }

  get isRed() {
    return this.#color === color.RED;
  }
  get isBlack() {
    return !this.isRed;
  }
  get isNil() {
    return this.key === null;
  }
  get color() {
    return this.#color;
  }
  set color(newColor) {
    if (!this.isNil) {
      this.#color = newColor;
    }
  }
}

class RBtree {
  #root = null;

  insert = (key) => {
    const newNode = this.createNode(key);

    if (!this.#root) {
      this.#root = newNode;
    } else {
      this.#insertNode(newNode);
      if (!newNode.parent) {
        newNode.color = color.BLACK;
      } else {
        const parentNode = newNode.parent;
        const grandParentNode = parentNode.parent;
        const uncleNode =
          grandParentNode.left === parentNode
            ? grandParentNode.right
            : grandParentNode.left;

        if (uncleNode.isBlack) {
        } else {
          parentNode.color = color.BLACK;
          uncleNode.color = color.BLACK;
          grandParentNode.color = color.RED;
        }
      }
    }
  };

  #insertNode = (newNode, currentNode = this.#root) => {
    if (newNode.key <= currentNode.key) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
      } else {
        this.#insertNode(newNode, currentNode.left);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
      } else {
        this.#insertNode(newNode, currentNode.right);
      }
    }
  };
  get root() {
    return this.#root;
  }
  createNode = (key = null, parent = null) => {
    return new RedBlackNode(key, parent);
  };
}

const redBlack = new RBtree();
redBlack.insert(20);
redBlack.insert(30);
redBlack.insert(10);

const localCrypto = require("crypto");

const randName = () =>
  `linkedFile-${localCrypto.randomBytes(20).toString("utf8")}`;

class Tree {
  head = null;
  lastNode = null;
  push = (node = {}) => {
    if (!this.head) {
      this.head = node;
    }
    if (!this.lastNode) {
      this.lastNode = node;
    } else {
      this.lastNode.next = node;
      this.lastNode = node;
    }
  };

  pop = () => {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      this.lastNode = null;
      return;
    }
    let oldItem = this.head;
    let item = this.head.next;

    while (true) {
      if (!item.next) {
        this.lastNode = oldItem;
        let buff = this.lastNode.next;
        this.lastNode.next = null;
        return buff;
      }
      oldItem = item;
      item = item.next;
    }
  };
}

class Node {
  val = randName();
  next = null;
}

const tree = new Tree();

tree.push(new Node());
tree.push(new Node());
tree.push(new Node());
console.log(tree.pop());
console.log(tree.pop());
console.log(tree.pop());

console.log(tree);

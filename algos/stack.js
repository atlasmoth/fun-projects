const ebuka = { name: "Ebuka", age: 23, next: null };
const israel = { name: "Israel", age: 13, next: null };
const joshua = { name: "Joshua", age: 11, next: null };

class Node {
  val = Math.round(Math.random() * 100);
  next = null;
}

class Queue {
  head = null;
  lastItem = null;
  add = (obj) => {
    const { head } = this;
    const node = obj || new Node();
    if (!head) {
      this.head = node;
      this.lastItem = node;
    } else {
      this.lastItem.next = node;
      this.lastItem = node;
    }
  };
  remove = () => {
    if (!this.head) {
      return -1;
    } else {
      const tempNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.lastItem = null;
      }
      return tempNode;
    }
  };
}

class Stack extends Queue {
  remove = () => {
    if (!this.head) {
      return -1;
    }
    if (!this.head.next) {
      let tempHead = this.head;
      this.head = null;
      this.lastItem = null;
      return tempHead;
    }
    let base, baseNext;
    base = this.head;
    baseNext = base.next;
    while (true) {
      if (!baseNext.next) {
        let tempNode = baseNext;
        this.lastItem = base;
        this.lastItem.next = null;
        return tempNode;
      }
      base = baseNext;
      baseNext = baseNext.next;
    }
  };
}

const stack = new Stack();

stack.add(ebuka);
stack.add(israel);
stack.add(joshua);

console.log(stack.remove());

console.log(stack.remove());

console.log(stack.remove());
console.log(stack.remove());

console.log(stack.remove());

console.log(stack);

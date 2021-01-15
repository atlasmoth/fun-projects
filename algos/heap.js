const comparison = Object.freeze({
  BIGGER: 1,
  BIGGER_OR_EQUAL: [1, 0],
  SMALLER: -1,
  SMALLER_OR_EQUAL: [-1, 0],
  EQUAL: 0,
});

const defaultCompare = (a, b) => {
  if (a > b) return comparison.BIGGER;
  if (a < b) return comparison.SMALLER;

  return comparison.EQUAL;
};

class MinHeap {
  #heap = [];
  #compare;

  constructor(compareFn = defaultCompare) {
    this.#compare = compareFn;
  }
  get size() {
    return this.#heap.length;
  }
  get isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.isEmpty ? null : this.#heap[0];
  }
  print() {
    console.log(this.#heap);
  }
  insert(value = Math.round(Math.random() * 100)) {
    this.#heap.push(value);
    this.#siftUp(this.size - 1);

    return true;
  }
  #siftUp = (index) => {
    let parentIndex = this.#getParentIndex(index);
    while (
      index > 0 &&
      this.#compare(this.#heap[parentIndex], this.#heap[index]) ===
        comparison.BIGGER
    ) {
      this.#swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.#getParentIndex(index);
    }
  };
  #swap = (i, j) => {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  };
  #getLeftIndex = (index) => {
    return 2 * index + 1;
  };
  #getRightIndex = (index) => {
    return 2 * index + 2;
  };
  #getParentIndex = (index) => {
    return !index ? null : Math.floor((index - 1) / 2);
  };
}

const hp = new MinHeap();

hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));
hp.insert(Math.round(Math.random() * 100));

hp.print();

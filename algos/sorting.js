function basic(items) {
  let sorted = true;
  while (true) {
    for (let x in items) {
      if (items[Number(x) + 1] < items[x]) {
        sorted = false;
        let temp = items[x];
        items[x] = items[Number(x) + 1];
        items[Number(x) + 1] = temp;
      }
    }
    if (sorted) {
      return items;
    } else {
      sorted = true;
    }
  }
}

const randArray = () =>
  Array.from(new Array(Math.round(Math.random() * 100)), () =>
    Math.round(Math.random() * 255)
  );

// console.log(
//   basic([2, 4, 6, 53, 66, 3, 200, 8, 10, 12, 42, 14, 16, 18, 20].reverse())
// );

function insertion(items = []) {
  for (let i in items) {
    let j = i;
    let currentElement = items[i];
    while (currentElement < items[j - 1]) {
      items[j] = items[j - 1];
      j--;
    }
    items[j] = currentElement;
  }
  return items;
}

console.log(insertion(randArray()));

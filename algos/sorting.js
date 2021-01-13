const randArray = () =>
  Array.from(new Array(Math.round(Math.random() * 100)), () =>
    Math.round(Math.random() * 255)
  );

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

console.log(insertion([...randArray(), ...randArray()]));

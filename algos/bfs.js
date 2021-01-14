const airports = "PHX BKK OKC JFK LAX EZE HEL LOS LAP LIM".split(" ");

function routesGen(airports) {
  let count = 0;
  let paths = [];
  while (count < 2) {
    let index = Math.floor(Math.random() * airports.length);
    if (!paths.find((path) => path === airports[index])) {
      paths.push(airports[index]);
      count++;
    }
  }
  return paths;
}

const routes = (size) =>
  Array.from(new Array(size), routesGen.bind(null, airports));

const adjacenyList = new Map();
function addNode(airport) {
  adjacenyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacenyList.get(origin).push(destination);
  adjacenyList.get(destination).push(origin);
}

airports.forEach((airport) => addNode(airport));

routes(20).forEach((set) => addEdge(...set));

function bfs(start) {
  const visited = new Set();
  const line = [start];
  while (line.length > 0) {
    const airport = line.shift();
    const destinations = adjacenyList.get(airport);

    for (let child of destinations) {
      if (child === "BKK") {
        console.log("Found BKK!!");
      }

      if (!visited.has(child)) {
        visited.add(child);
        line.push(child);
      }
    }
  }
}

bfs("PHX");

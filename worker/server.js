const os = require("os");
const { Worker, parentPort, workerData } = require("worker_threads");
const path = require("path");

const cpuSize = os.cpus().length;

const segment = Math.fround(1000000000 / cpuSize);

let blocks = [];

for (let i = 0; i < cpuSize; i++) {
  blocks.push([segment * i, segment * (i + 1)]);
}

const promisifyIntensive = () => {
  return Promise.all(
    blocks.map(
      (data) =>
        new Promise((resolve, reject) => {
          const file = path.resolve("worker.js");
          const worker = new Worker(file, {
            workerData: data,
          });
          worker.on("message", resolve);
          worker.on("error", reject);
          worker.on("exit", (code) => {
            if (code !== 0)
              reject(new Error(`Worker stopped with exit code ${code}`));
          });
        })
    )
  );
};

promisifyIntensive().then((arr) => {
  const result = arr.reduce((acc, curr) => {
    return Math.log(acc * curr);
  });
  console.log(result);
});
console.log("this is pure beans");

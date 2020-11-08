const { Worker, parentPort, workerData } = require("worker_threads");

function intensive() {
  const [min, max] = workerData;

  let val = min === 0 ? 1 : min;

  for (let x = val; x < max; x++) {
    val = Math.log(x * (x + 1));
  }
  return val;
}

const result = intensive();

parentPort.postMessage(result);

const axios = require("axios");
const { Worker } = require("worker_threads");
const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const os = require("os");
// const reader = fs.createReadStream(
//   path.join(__dirname, "../shell/index.html"),
//   { highWaterMark: 1024 }
// );
// const writer = fs.createWriteStream(path.join(__dirname, "/stream.html"), {
//   flags: "w",
//   highWaterMark: 1024,
// });
// pipeline(reader, writer, console.table);

const demo = async (path) => {
  const reader = fs.createReadStream(path, { highWaterMark: 1024 });
  for await (let buffer of reader) {
    console.log(buffer.toString());
  }
};

// demo(path.join(__dirname, "../shell/index.html"));

function jsRoutines() {
  return Promise.all(
    Array.from(
      new Array(os.cpus().length + 1),
      () =>
        new Promise((resolve, reject) => {
          const worker = new Worker("./worker.js");
          worker.postMessage(Math.round(Math.random() * 100));
          worker.on("message", resolve);
          worker.on("error", reject);
          worker.on("exit", reject);
        })
    )
  );
}

jsRoutines().then(console.log);

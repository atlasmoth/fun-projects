const url = `https://jsonplaceholder.typicode.com/comments`;

const decoder = new TextDecoder("utf-8");

fetch(url).then(async (res) => {
  for await (let chunk of bigChunker(res.body.getReader())) {
    console.log(decoder.decode(chunk));
  }
});

async function* bigChunker(stream) {
  let done, value;
  while (!done) {
    ({ value, done } = await stream.read());
    !done ? yield value : null;
  }
}

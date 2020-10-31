const recorder = document.querySelector(`video.webcam`);
const video = document.querySelector("canvas.video");
const face = document.querySelector("canvas.face")

const videoCtx = video.getContext("2d")
const faceCtx = face.getContext("2d")


const image = document.querySelector("img")



async function populateVideo(){
  const stream = await navigator.mediaDevices.getUserMedia({video : {width : 1280, height : 720}});

  recorder.srcObject = stream;
  await recorder.play()

  face.width = video.width = recorder.videoWidth;
  face.height = video.height = recorder.videoHeight;

  // const faceDetector = new FaceDetector();
  // const faces = await faceDetector.detect(recorder);
  // console.log(faces)
  
}

populateVideo().catch(console.table)

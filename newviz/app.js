"use strict"


visualizer.width = innerWidth;
visualizer.height = innerHeight;

addEventListener("resize", () => {
  visualizer.width = innerWidth;
visualizer.height = innerHeight;
})


const audioCtx = new AudioContext();
const analyzerNode = new AnalyserNode(audioCtx,{fftSize : 256})


const getSound = ()=> {
  return navigator.mediaDevices.getUserMedia({audio : {echoCancellation : true, autoGainControl : true, noiseSuppression : true}})
}

const setupCtx = async () => {
  const soundStream = await getSound()
  if(audioCtx.state === "suspended"){
   await  audioCtx.resume()
  }
   audioCtx.createMediaStreamSource(soundStream).connect(analyzerNode).connect(audioCtx.destination)
}



function drawVisualizer(){

  const bufferLength = analyzerNode.frequencyBinCount;
  const data = new Uint8Array(bufferLength)
  analyzerNode.getByteFrequencyData(data)
  const {height,width} = visualizer;

  const barWidth = width / bufferLength;
    
  const vizCtx = visualizer.getContext("2d")
  vizCtx.clearRect(0,0,width,height)

  data.forEach((chunk,index) => {
    const y = chunk / 255 * (height * 3/4);
    
    const x = barWidth * index;
    
    vizCtx.fillStyle = `hsl(${y / (height * 4/3) * 360},100%,50%)`
    vizCtx.fillRect(x, height - y, barWidth, y);
  })

  requestAnimationFrame(drawVisualizer)
}
setupCtx()
drawVisualizer()
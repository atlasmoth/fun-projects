const audioCanvas = document.querySelector("canvas.display")
audioCanvas.width = window.innerWidth;
audioCanvas.height = window.innerHeight;
const canvasContext = audioCanvas.getContext("2d");

let analyzer;

window.addEventListener("resize",() => {
  audioCanvas.width = window.innerWidth;
  audioCanvas.height = window.innerHeight;
})

async function getAudio(){
  const stream = await navigator.mediaDevices.getUserMedia({audio : true});
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  const streamSource =  audioCtx.createMediaStreamSource(stream)
  streamSource.connect(analyzer);
  
  
  const timeData = new Uint8Array(analyzer.frequencyBinCount)
  const frequencyData = new Uint8Array(analyzer.frequencyBinCount)
  
  drawTime(timeData)
}

function drawTime(timeData){
  
  analyzer.getByteTimeDomainData(timeData)
  canvasContext.clearRect(0,0,window.innerWidth,window.innerHeight)
  canvasContext.lineWidth = 10;
  canvasContext.strokeStyle = "blue";
  canvasContext.beginPath();

  const sliceWidth = Math.log(analyzer.frequencyBinCount);

  let x = 0;

  timeData.forEach((data,index) => {
    const v = data / 128;
    const amplitude = v * window.innerHeight / 2;
    if(index === 0){
      canvasContext.moveTo(x,amplitude);
    }else{
      canvasContext.lineTo(x,amplitude)
    }
    x+= sliceWidth;
  })

  canvasContext.stroke()
  
  requestAnimationFrame(() => drawTime(timeData))
}

getAudio()


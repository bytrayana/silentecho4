var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

let pg;
let theta = 0.0; // Start angle at 0
let amplitude = 150.0; // Height of wave
let rSlider, gSlider, bSlider;
var sliderText, sliderWidth, sliderAnimation;
var button1 = false;
var button2 = false;
var button3 = false;
var button4 = false;

let waveX = [];
let waveY = [];


myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function setup() {
  // graphics stuff:
  createCanvas(windowWidth, windowHeight);
  textFont('Roboto Variable');
 // background(0);
  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 80);
  sliderText = createSlider(11,128,24);
  sliderText.position(20,110);
  sliderWidth = createSlider(50,300,100);
  sliderWidth.position(20,140);
  sliderAnimation = createSlider(5,30,20);
  sliderAnimation.position(20,170);

  // button1 = createButton("Click me!");
  // button1.mousePressed(showResult);
  myButton1 = createButton("Animation 1").mousePressed(()=> button1 = true);
  myButton1.position(20,200,100,10);
  myButton2 = createButton("Animation 2").mousePressed(()=> button2 = true);
  myButton2.position(20,230,100,10);
  myButton3 = createButton("Animation 3").mousePressed(()=> button3 = true);
  myButton3.position(20,260,100,10);
  myButton4 = createButton("Animation 4").mousePressed(()=> button4 = true);
  myButton4.position(20,290);

  fill(255);
  // instructions:
  //textSize(16);
  //textAlign(CENTER);
  text("say something", width / 2, height / 2);
  
  myRec.onResult = showResult;
  myRec.start();
  
  myVoice.speak("say something");
  
  
}

function draw() {

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
  text('text size',sliderText.x*2 +sliderText.width,125);

  //textAlign(CENTER, TOP);
  
 
  //background();

  text("say something", width/3,125);
  //text("move mouse to change animation", width/2,125);

  showResult();


}

function showResult() {
  theta += 0.02;
   let magnitude = (sliderWidth.value());
   let an = (sliderAnimation.value());
   //textFont('Roboto Variable');
   //textSize(sliderText.value());


  if (myRec.resultValue === true) {

    //background(0);
      for(let i = 0;i < (myRec.resultString).length;i++) {
//         if(button1){
//         const wave1 = tan(radians(i+frameCount*0.30 + i * 5)) * magnitude;
//         const wave2 = map(cos(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
//         const wave3 = cos(radians(frameCount + i * 5)) * magnitude;
//         const wave4 = map( tan(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.01, width*0.01);
//         const wave5 = cos(radians(frameCount + i * 5)) * magnitude;
//         const wave6 = sin(radians(i + (i * frameCount * an))) * magnitude;
//         const wave7 = sin(radians(frameCount + i * 5)) * magnitude;
//         const wave8 = map( tan(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
//         const wave9 = map (cos(radians(i+(frameCount*0.50 + (i*5)*0.5))), -1, 1, -width*0.150, width*0.150);
//         const wave10 = map (cos(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
        
//         waveX = [wave1, wave3, wave5, wave7, wave9];
//         waveY = [wave2, wave4, wave6, wave8, wave10];
       
//         let wX = random(waveX);
//        let wY = random(waveY);

//         push();
//         translate(wX, wY);
//         //textFont('Roboto Variable');
//         textSize(sliderText.value());
//         //stroke(sliderWidth.value());
//         text(myRec.resultString[i], width/2+ wX, height/2 + wY);
//         pop();
// }else{
//         const wave9 = map (cos(radians(i+(frameCount*0.50 + (i*5)*0.5))), -1, 1, -width*0.150, width*0.150);
//         const wave10 = map (cos(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
        
//    push();
//         translate(wave9, wave10);
//         //textFont('Roboto Variable');
//         textSize(sliderText.value());
//         //stroke(sliderWidth.value());
//         text(myRec.resultString[i], width/2+ wave9, height/2 + wave10);
//         pop();
// }
         if(button1){
        let wave1 = tan(radians(i+frameCount*0.30 + i * 5)) * magnitude;
        let wave2 = map(cos(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
        
        push();
        translate(wave1, wave2);
        //textFont('Roboto Variable');
        textSize(sliderText.value());
        //stroke(sliderWidth.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        }else  if (button2) {
        let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
        let wave2 = map( tan(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.01, width*0.01);
        
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();
         
        }else if (button3) {
        let wave1 = cos(radians(frameCount + i * 5)) * magnitude;
        let wave2 = sin(radians(i + (i * frameCount * an))) * magnitude;

        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        }else if (button4) {
        let wave1 = sin(radians(frameCount + i * 5)) * magnitude;
        let wave2 = map( tan(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
        
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();

        }else{
        let wave1 = map (cos(radians(i+(frameCount*0.50 + (i*5)*0.5))), -1, 1, -width*0.150, width*0.150);
        let wave2 = map (cos(radians(i+(frameCount*0.20 + (i*an)*0.20))), -1, 1, -width*0.100, width*0.100);
 
        push();
        translate(wave1, wave2);
        textSize(sliderText.value());
        text(myRec.resultString[i], width/2+ wave1, height/2+wave2);
        pop();
        }        
    }    
    //text(myRec.resultString, width / 2, height / 2);
    //myVoice.interrupt = checkbox.elt.checked;
    //myVoice.speak(myRec.resultString); // debug printer for voice options
    console.log(myRec.resultString);
  }

}

function mousePressed() {
  

  if (button1,button2,button3,button4) {
    button1 = !button1;
    button2 = !button2;

     button3 = !button3;
    button4 = !button4;
}
 }



let isRecording = false;
function toggleRecording() {
  if (!isRecording) {
    startRecording({
      // we're passing in 'onProgress' as a parameter to get status feedback on-screen - this is completely optional and you'd also get this info on the console!
      onProgress: (progress) => document.querySelector('#status').textContent = `progress: ${(100 * progress).toFixed(1)}% 🔄`
    });

    isRecording = true;
    document.querySelector('#status').textContent = 'is recording 🔴';
    document.querySelector('#button').textContent = 'stop recording ⏹️';
  } else {
    // simply stop the recording - p5.rec will do the rest:
    stopRecording();

    document.querySelector('#status').textContent = 'starting up... 🎥';
    document.querySelector('#button').disabled = true;
  }
}

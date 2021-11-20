song1 = "";
song2 = "";
 function preload(){
     song1 = loadSound("Letgo.mp3");
     song2 = loadSound("river.mp3");
 }

 function setup(){
     canvas = createCanvas(600,500);
     canvas.center();
    video = createCapture(VIDEO);
    video.hide();
 }

 function draw(){
     image(video, 0, 0, 600, 500);
 }

 function start(){
     song1.play();
 }

 function stop(){
    song1.stop();
}

function pause(){
    song1.pause();
}

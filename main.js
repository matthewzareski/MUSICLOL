song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
status1 = "";
status2 = "";


 function preload(){
     song1 = loadSound("Letgo.mp3");
     song2 = loadSound("river.mp3");
 }

 function setup(){
     canvas = createCanvas(600,500);
     canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function draw(){
     image(video, 0, 0, 600, 500);
    status1 = song1.isPlaying();
    status2 = song2.isPlaying();
     fill("#FF0000");
     stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {

     circle(leftWristX, leftWristY,20);
     song2.stop();
     if(status1 == false){
         song1.play();
         document.getElementById("songtitle").innerHTML = "Now playing = Let Go"
     }
    }

    if(scoreRightWrist > 0.2)
    {

     circle(rightWristX, rightWristY,20);
     song1.stop();
     if(status2 == false){
         song2.play();
         document.getElementById("songtitle").innerHTML = "Now playing = Washed Down In The River"
     }
    }
}

 function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY ="+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY ="+ rightWristY);
    }
}


 

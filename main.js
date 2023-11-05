peter_pan_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js";
Harry_Potter_Theme_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json";
leftWrist_x = 0;
leftWrist_y = 0
righttWrist_x = 0;
righttWrist_y = 0

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,600,530);
}

function preload() {
    peter_pan_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js");
    Harry_Potter_Theme_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json");
}

function modelLoaded() {
    console.log("PoseNet Is initialized");
}

function gotPoses(results) {
if(results.length > 0)
  {
    console.log(results);

    leftWrist_x = results[0].pose.leftWrist.x;
    leftWrist_y = results[0].pose.leftWrist.y;
    console.log("leftWrist_ = "+leftWrist_x+" leftWrist_y = "+ leftWrist_y);

    rightWrist_x = results[0].pose.rightWrist.x;
    rightWrist_y = results[0].pose.rightWrist.y;
    console.log("rightWrist_ = "+rightWrist_x+" rightWrist_y = "+ rightWrist_y);
  }
}
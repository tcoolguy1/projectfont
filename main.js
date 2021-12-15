nosex = 0;
nosey = 0;
difference = 0;
rightWristx = 0;
leftWristx = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
         nosex = results[0].pose.nose.x;
         nosey = results[0].pose.nose.y;
         console.log(nosex);
         console.log(nosey);
         leftWristx = results[0].pose.leftWrist.x;
         rightWristx = results[0].pose.rightWrist.x;
         difference = floor( leftWristx - rightWristx);
         console.log(difference);
         console.log(rightWristx);
         console.log(leftWristx);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
    fill('cyan');
    stroke('green');
    square(nosex, nosey, difference);
    document.getElementById("square_side").innerHTML = "sides of the square is " + difference + "px";
}

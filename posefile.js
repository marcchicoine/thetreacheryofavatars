// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
let pose;
let nose;
let img;
let noseX;
let noseY;
let earLX;
let earLY;
let earRY;
let earRX;
let d;
function setup() {
  createCanvas(400, 300);
  video = createCapture(VIDEO);
  video.size(width, height);
img = loadImage('hatapple.png');

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
    nose = results[0].pose.nose;
    rightEarP = results[0].pose.rightEar;
    leftEarP = results[0].pose.leftEar;
    rightWristP = results[0].pose.rightWrist;
    leftWristP = results[0].pose.leftWrist;
    rightElbowP = results[0].pose.rightElbow;
    leftElbowP = results[0].pose.leftElbow;
    leftShoulderP = results[0].pose.leftShoulder;
    rightShoulderP = results[0].pose.rightShoulder;
   noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
    earLX= results[0].pose.leftEar.x;
    earLY= results[0].pose.leftEar.y;

    earRX = results[0].pose.rightEar.x;
    earRY = results[0].pose.rightEar.y;

    rightHipP = results[0].pose.rightHip;
    leftHipP = results[0].pose.leftHip;

    rightKneeP = results[0].pose.rightKnee;
    leftKneeP = results[0].pose.leftKnee;
    rightAnkleP = results[0].pose.rightAnkle;
    leftAnkleP = results[0].pose.leftAnkle;
    // console.log(results);
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  // drawKeypoints();
  drawSkeleton();
  hatter();

}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill('#73F28F');
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);

        // drawingContext.filter = 'blur(40px)';

      }

    }
  }

}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}


hatter = function (){
  let d = dist(earLX, earLY, earRX, earRY);

  image(img, noseX - d , noseY - (1.5 * d), d*2, d*2);



}

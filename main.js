music1 = "";
music2 = "";
leftX = 0 ;
leftY = 0;
rightX = 0;
rightY = 0;
leftwrist =0;
rightwrist =0;
songlist = [];

function preload(){
    music1 = loadSound('videoplayback.mp3');  
    music2 = loadSound('dialouge.mp3');
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("modelloadedis initialized");
}
function gotPoses(results){
if(results.length>0){
    rightwrist = results[0].pose.keypoints[10].score;
    leftwrist = results[0].pose.keypoints[9].score;
    

    rightX = results[0].pose.rightWrist.x;
    rightY = results[0].pose.rightWrist.y;
    leftX = results[0].pose.leftWrist.x;
    leftY = results[0].pose.leftWrist.y;
}
}
function draw(){
    image(video,0,0,400,400);

    fill('#FFFF00');
    stroke('#FFFF00');

 music1play = music1.isPlaying();
 music2play = music2.isPlaying();

 if(leftwrist>0.2){
        cirle(leftX,leftY,20);
        music1play.stop();
        if(music1play==stop){
            music1play.start();
            document.getElementById("song_name").innerHTML="Song name : Behti hawa sa tha woh";
        }
 }
}
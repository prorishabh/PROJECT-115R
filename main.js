function preload()
{

}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot()
{
    save('Picture_Filter.png');  
}

function draw()
{
    image(video ,0,0,300,300);
}

function modelLoaded()
{
    console.log("Model is Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);

        console.log("rightEyex="+results[0].pose.rightEye.x);
        console.log("rightEyey="+results[0].pose.rightEye.y);

        console.log("leftEyex="+results[0].pose.leftEye.x);
        console.log("leftEyey="+results[0].pose.leftEye.y);

    }
}
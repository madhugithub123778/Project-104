Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90});
    
    cam = document.getElementById("camera");
    Webcam.attach(cam);

function takePicture(){
Webcam.snap(
function(data_uri){
document.getElementById("result").innerHTML= '<img id="my_image"src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NHqki6Xdk/model.json",modelLoaded);

function modelLoaded(){
console.log("Model is loaded");}

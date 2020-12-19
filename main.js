Webcam.set({
widht:350,
height:300,
image_format: 'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    }
    );
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7gNOr-PUI/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    img=document.getElementById('captured_image');
classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
   document.getElementById("result_name_accuracy").innerHTML=results[0].confidence.toFixed(3);
 //we rae taking the result in the array results[0]which will appear in the first of label and for accuracy we are fixing the value of the after decimal to 3 using tofixed function

}
}
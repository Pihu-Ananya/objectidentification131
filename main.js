status1=""
img=""
objects=[]

function preload() {
    img=loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(640 , 420)
    canvas.center()
    objectdetector=ml5.objectDetector("cocossd" , modelloaded)
    document.getElementById("status").innerHTML="status:detecting objects"
}
function modelloaded(){
    console.log('model is loaded')
    status1=true
    objectdetector.detect(img , getresult)
}

function getresult(error , results) {
    if(error){
        console.log(error)

    }
    else {
        console.log(results)
        objects=results
    }
}
function draw (){
    image(img ,0 , 0 , 640 , 420 )
    if(status1!=""){
    for(i=0;i<objects.length;i++){
    fill("white")
    stroke("blue")
    textSize(20)
    percent=floor(objects[i].confidence*100)
    text(objects[i].label+" "+percent+"%" , objects[i].x , objects[i].y)
    stroke("yellow")
    noFill()
    rect(objects[i].x , objects [i].y , objects[i].width , objects[i].height)
    strokeWeight(5) 
    document.getElementById("status").innerHTML="status:objects detected"
        }
    }
}



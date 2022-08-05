status1=""
img=""

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
    }
}
function draw (){
    image(img ,0 , 0 , 640 , 420 )
    fill("white")
    stroke("red")
    textSize(20)
    text("dog",200,75)
    noFill()
    rect(75 , 60 , 300 , 300)
    strokeWeight(5)
    fill("Blue")
    stroke("yellow")
    textSize(20)
    text("cat",400,95)
    noFill()
    rect(380, 70 , 300 , 300)
    strokeWeight(5)
}

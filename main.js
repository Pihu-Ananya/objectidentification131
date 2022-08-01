img=""

function preload() {
    img=loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(640 , 420)
    canvas.center()
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
}

let myPicker1;
let BrushSize;
let ClearButton;

function setup() {
    createCanvas(400, 400)

    const mainContainer = select("main")
    myPicker1 = createColorPicker();
    myPicker1.parent(mainContainer);
    myPicker1.position(330, 30);

 BrushSize = createSlider(5, 50)
 BrushSize.parent(mainContainer);
 BrushSize.position(180, 35)

 ClearButton = createButton("Clear All");
 ClearButton.parent(mainContainer);
 ClearButton.position(20, 350)

}

function mouseDragged() {
   noStroke();
   fill(myPicker1.value());
   circle(mouseX, mouseY, BrushSize.value());
}

function reset() {
   background(255)
}

function draw() {
    ClearButton.mousePressed(reset)
}


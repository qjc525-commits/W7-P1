let shapeButton;



function setup() {
    createCanvas(400, 400)

    const mainContainer = select("main")

    shapeButton = createButton("Circle");
    shapeButton.parent(mainContainer);
    shapeButton.position(0, 370);
    shapeButton.size(400, 30);

}

function draw() {
    
    shapeButton.mouseClicked(createSquare);

}
function createSquare() {
    fill(random(255), random(255), random(255));
    noStroke(circle);
    circle(random(400), random(400), random(100));
}

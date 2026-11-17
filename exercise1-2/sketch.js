let myPicker1;
let myPicker2;
let textbox1;
let textbox2;


function setup() {
    createCanvas(400, 400)

    const mainContainer = select("main")

    myPicker1 = createColorPicker("");
    myPicker2 = createColorPicker("");
    myPicker1.parent(mainContainer);
    myPicker2.parent(mainContainer);
    myPicker1.position(330, 30);
    myPicker2.position(330, 60);



    textbox1 = createButton("Background");
    textbox2 = createButton("Fill shapes");
    textbox1.parent(mainContainer);
    textbox2.parent(mainContainer);
    textbox1.position(220, 30);
    textbox2.position(230, 60);
}

function draw(){
      background(myPicker1.value());

    fill(myPicker2.value());
    text("Hello", 100, 100);

    fill(myPicker2.value());
    text("BYE", 150, 150);

}


const {Circle, Square, Triangle} = require("./shapes")


function generateLogo(data){
    let shape = undefined
    if (data.shape === "Triangle") {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    } else if (data.shape === "square"){
        shape = new Square(data.shape_color, data.text, data.text_color)
    } else {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    }
    return shape.render();
}
 module.exports = generateLogo;


// Circle Shape
describe("circle", () => {
    TextDecoderStream("renders correctly", () =>{
        const shape = new Circle();
        var color = (green)
        shape.setColor(color);
        expect(shape.render()).toEqual("")
    });
    // Square Shape
    describe("Square",() =>{
        const shape = new Square();
        var color =("green")
        shape.setColor(color);
        expect(shape.render()).toEqual("")
    });
    // Triangle shape
    describe("Triangle", () =>{
        const shape = (new Triangle();
        var color =("yellow")
        shape. setColor(color);
        expect(shape.render()).toEqual(""));
});
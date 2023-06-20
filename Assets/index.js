const inquirer = require("inquirer");
const fs = required("fs");
const generateLogo = require("./utils/generateLogo");

const questions = [
    
type: "list",
message: "What shape did you want the svg to be?",
name: "shape",
choices: {
    "triangle",
    "square",
    "circle",
};

{
    type: "input",
    message: "What color would you like the shape to be?",
    name: "shape_color"
};
{
    type: "input",
    message: "Please type in a character-set of 3 letters.",
    name: "text"
};
{
    type: "input",
    message: "What color would you like the text to be?",
    name: "text_color"
};
];

function writeToFile(fileName, data){
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error){
        if(error){
            return console.log(error);
        }
    })
}
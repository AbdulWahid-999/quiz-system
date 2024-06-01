#! /usr/bin/env node

import inquirer from "inquirer";


console.log("welcome to my adventure quiz game:");
console.log("you are required to gain maximum 4 points to win the quiz:");

let points = 0;

let q1 = await inquirer.prompt(
    [
        {
            name: "one",
            type: "list",
            message: "Typescript is a superset of",
            choices: ["python","c++","javascript",]
        }
    ]
)
if (q1.one === "javascript") {
    console.log("your answer is correct");
    points++
}else{
    console.log("your answer is incorrect");
}
let q2 = await inquirer.prompt(
    [
        {
            name: "two",
            type: "list",
            message: "who is the founder of microsoft",
            choices: ["elon musk","mark zukerburg","bill gates",]
        }
    ]
)
if (q2.two === "bill gates") {
    console.log("your answer is correct");
    points++
}else{
    console.log("your answer is incorrect");
}let q3 = await inquirer.prompt(
    [
        {
            name: "three",
            type: "list",
            message: "who is the founder of pakistan",
            choices: ["quaid-e-azam","liaquat ali khan","allama iqbal",]
        }
    ]
)
if (q3.three === "quaid-e-azam") {
    console.log("your answer is correct");
    points++
}else{
    console.log("your answer is incorrect");
}let q4 = await inquirer.prompt(
    [
        {
            name: "four",
            type: "list",
            message: "who is the first prime minister of pakistan",
            choices: ["allama iqbal","quaid-e-azam","liaquat ali khan",]
        }
    ]
)
if (q4.four === "liaquat ali khan") {
    console.log("your answer is correct");
    points++
}else{
    console.log("your answer is incorrect");
}let q5 = await inquirer.prompt(
    [
        {
            name: "five",
            type: "list",
            message: "who is the owner of tesla",
            choices: ["bill gates","mark zukerburg","elone musk",]
        }
    ]
)
if (q5.five === "elone musk") {
    console.log("your answer is correct");
    points++
}else{
    console.log("your answer is incorrect");
}

if(points >= 4){
    console.log("congratulation! you passed the test");
    console.log("points: " + points);
}else{
    console.log("you faild! try again");
    console.log("points: " + points);
}
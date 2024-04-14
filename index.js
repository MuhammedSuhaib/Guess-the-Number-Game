#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([]);
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuesedNumber",
        type: "number",
        message: "\t Please Guess a number between 1 to 6 :\t \n ",
    },
]);
console.log(answer);
if (answer.userGuesedNumber === randomNumber) {
    console.log("congratulation! you guessed the right number.");
}
else {
    console.log("you guessed the wrong number");
}

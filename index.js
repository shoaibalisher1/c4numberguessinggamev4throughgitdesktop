#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show the output
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log (randomNumber);
console.log("Welcome to the number guessing game");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation you won. ");
}
else {
    console.log("You have lost the Game. ");
}

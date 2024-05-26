

import inquirer from "inquirer";

// 1) Computer Will generate a random number

// 2)  User input for guessing number 

// 3) Compare User with Computer generated number and show result

 const randomNumber = Math.floor(Math.random() * 10 + 1);

 

 const answers = await inquirer.prompt([
     {
        name: "userguessednumber",
         type: "number",
         message: " Please guess a number 1-10:",
     },
 ]);

if(answers.userguessednumber == randomNumber){
    console.log("Congtratulation ! you guessed right number.");
} else{
    console.log("Sorry! you guessed wrong number.");
}
 
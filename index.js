// REF - https://neog.camp/guide/lesson-one
// ex08: function to check the answer
console.log("Let's play a QUIZ to know how  much do you know me");

var readlineSync = require("readline-sync");

var questionOne = readlineSync.question("favourite color? ");
var questionTwo = readlineSync.question("favourite cricketer");
var questionThree = readlineSync.question("Interested in ");

var score = 0;

if(questionOne.toUpperCase() === "blue".toUpperCase()){
  ++score;
}
if(questionTwo.toUpperCase() === "sehwag".toUpperCase()){
  ++score;
}
if(questionThree.toUpperCase() === "reading".toUpperCase()){
  ++score;
}

console.log("your score is "+ score);
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
'Who was the first American woman in space? ',
'True or false: 5 kilometer == 5000 meters? ',
'(5 + 3)/2 * 10 = ? ',
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
'What is the minimum crew size for the ISS? '
];

let correctAnswers = [
"Sally Ride",
"true",
"40",
"Trajectory",
"3"

];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question)
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  for (let i = 0; i < questions.length; i++){

    if (candidateAnswers[i] == ""){
      console.log(`\nYou did not answer question ${i+1}.\n`);
    }
    else {
      console.log(`\nQuestion ${i+1}'s answer was ${correctAnswers[i]}: You answered ${candidateAnswers[i]}`);
      if (correctAnswers[i].toLowerCase() == candidateAnswers[i].toLowerCase()){
        console.log("This is correct!\n");
      }
      else{
        console.log("This is not correct.\n");
      }
    }

  }

  //check candidate answers againts correct answers

  let correctAs = 0
  
  for (let i = 0; i < candidateAnswers.length; i++){
    if (correctAnswers[i].toLowerCase() == candidateAnswers[i].toLowerCase()){
      correctAs++;
    }
  }

  
  let grade = (correctAs/correctAnswers.length) * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  console.log(`You have received ${grade}% on this quiz.`);

  if (grade < 80) {
    console.log(`You have failed this test. Please try again!`)
  }
  else {
    console.log(`Congrats on passing!`)
  }


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("\nHello " + candidateName + ", nice to meet you!\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
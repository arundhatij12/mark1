var readlineSync= require("readline-sync");

var score=0;

var userName= readlineSync.question("What's your name?");

console.log("Welcome "+ userName + "! Do you know Arundhati?");

function play(question,answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer==answer){
    console.log("correct!");
    score= score+1;
  }

  else{
    console.log("wrong!");
   // score=score-1;
  }

  console.log("Current Score: ",score);
  console.log("----------");
}

var questions= [
  {
    question: "Where do I live?",
    answer: "Patna"
  },
  {
    question: "Where do I study?",
    answer: "MS Ramaiah"
  },
  {
    question: "Who is favourite superhero?",
    answer: "Captain America"
  },
   {
    question: "My favourite person?",
    answer: "Sister"
  },
   {
    question: "Which school did I go to?",
    answer: "Notre Dame Academy"
  },
];

for( var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your Score: ", score)




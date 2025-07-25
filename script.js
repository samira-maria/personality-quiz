var questionsCount = 0;
var daveScore = 0;
var bobScore = 0;
var kevinScore = 0;
var stuartScore = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")
var q1a3 = document.getElementById("q1a3")
var q1a4 = document.getElementById("q1a4")

var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")
var q2a3 = document.getElementById("q2a3")
var q2a4 = document.getElementById("q2a4")

var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")
var q3a3 = document.getElementById("q3a3")
var q3a4 = document.getElementById("q3a4")

var q4a1 = document.getElementById("q4a1")
var q4a2 = document.getElementById("q4a2")
var q4a3 = document.getElementById("q4a3")
var q4a4 = document.getElementById("q4a4")

var restart = document.getElementById("restart")

q1a1.addEventListener('click', stuart);
q1a2.addEventListener('click', bob);
q1a3.addEventListener('click', dave);
q1a4.addEventListener('click', kevin);

q2a1.addEventListener('click', dave);
q2a2.addEventListener('click', bob);
q2a3.addEventListener('click', stuart);
q2a4.addEventListener('click', kevin);

q3a1.addEventListener('click', bob);
q3a2.addEventListener('click', kevin);
q3a3.addEventListener('click', dave);
q3a4.addEventListener('click', stuart);

q4a1.addEventListener('click', stuart);
q4a2.addEventListener('click', dave);
q4a3.addEventListener('click', bob);
q4a4.addEventListener('click', kevin);

restart.addEventListener('click', restartQuiz);

function dave() {
  daveScore ++;
  questionsCount++;
  console.log("Questions count: " + questionsCount + " | dave score: " + daveScore);
  if (questionsCount == 5){
    console.log("End of quiz!");
    updateResult();
  }
}

function bob() {
  bobScore ++;
  questionsCount++;
  console.log("Questions count: " + questionsCount + " | bob score: " + bobScore);
  if (questionsCount == 5){
    console.log("End of quiz!");
    updateResult();
  }
}

function kevin() {
  kevinScore ++;
  questionsCount++;
  console.log("Questions count: " + questionsCount + " | kevin score: " + kevinScore);
  if (questionsCount == 5){
    console.log("End of quiz!");
    updateResult();
  }
}

function stuart() {
  stuartScore ++;
  questionsCount++;
  console.log("Questions count: " + questionsCount + " | stuart score: " + stuartScore);
  if (questionsCount == 5){
    console.log("End of quiz!");
    updateResult();
  }
}

function updateResult() {
  if ((daveScore >= bobScore) & (daveScore >= stuartScore) & (daveScore >= kevinScore))
  {
    console.log("Outcome: You are... Dave");
    result.innerHTML = ("You are... DAVE! Dave is an extremely intelligent minion who is funny and caring. However, he can be a bit clumsy and loves playing video games.");
  }
  else if ((bobScore >= daveScore) & (bobScore >= kevinScore) & (bobScore >= stuartScore)) 
  {
    console.log("Outcome: You are... BOB!");
    result.innerHTML = ("You are...BOB! Bob is an immature minion who is the youngest. He is loved by many as he is the King Bob and he gives out love himself.");
  }
  else if((kevinScore >= daveScore) & (kevinScore >= bobScore) & (kevinScore >= stuartScore))
  {
    console.log("Outcome: You are... KEVIN!");
    result.innerHTML = ("You are...KEVIN! Kevin is the leader of the trio of Bob, Stuart, and him. He likes to make fun of/tease people and has leadership qualities.");
  }
  else if ((stuartScore >= daveScore) & (stuartScore >= bobScore) & (stuartScore >= kevinScore))
  {
    console.log("Outcome: You are... STUART!");
    result.innerHTML = ("You are... STUART! Stuart is funny, playful, and smart. He likes to be chill and confident along with having sincere qualities.")
  }
}

function restartQuiz() {
  daveScore= 0;
  bobScore= 0;
  kevinScore= 0;
  stuartScore= 0;
  result.innerHTML = ("You are...");
}
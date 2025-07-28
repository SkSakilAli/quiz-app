const QUES = document.getElementById("question");
const OPONE = document.getElementById("optionOne");
const OPTWO = document.getElementById("OptionTwo");
const NXT = document.getElementById("next");
const SCR = document.getElementById("score");
let score = 0;
let count =0;
var option =0;
const answers = {
     question: {
     0: "Who Created JavaScript?",
     1: "When was JavaScript Created?",
     2: "What will be the value of '1' == 1",
     3: "What will be the value of 1+1 ",
     4: "Which one from the below is a primitive data type",
     },
     optionOne: ["Brenden Eich", "1990", "true", "2", "string"],
     optionTwo: ["Tim-Berners Lee", "1995", "false", "11", "array"],
     correctAnswer: [1,2,2,1,2,,1],
     }
QUES.textContent = answers.question[count];
OPONE.textContent = answers.optionOne[count];
OPTWO.textContent = answers.optionTwo[count];
SCR.textContent = score;


//Checking Correct Answers
function check(option){
	if(option == answers.correctAnswer[count]){
            score++;
	    SCR.textContent = score;
	}
	count++

}


function next(){

QUES.textContent = answers.question[count];
OPONE.textContent = answers.optionOne[count];
OPTWO.textContent = answers.optionTwo[count];
}

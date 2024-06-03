const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RuleBox");
const exitButton = document.querySelector(".buttons .ExitButton");
const ContinueButton = document.querySelector(".buttons .ContinueButton")
const Questions=document.querySelector(".question")

MyBtn.onclick = () =>{
    RulesBox.classList.add("activeInfo");
}

exitButton.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
}

ContinueButton.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuiz");
}
const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RuleBox");
const exitButton = document.querySelector(".buttons .ExitButton");
const ContinueButton = document.querySelector(".buttons .ContinueButton")
const Questions=document.querySelector(".question")
const option_list = document.querySelector(".myOptions");
const timeCount=document.querySelector(".timeCount .seconds");

const timeLine = document.querySelector(".questionHeader .time_Lines");

MyBtn.onclick = () =>{
    RulesBox.classList.add("activeInfo");
}

exitButton.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
}

ContinueButton.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
    Questions.classList.add("activeQuiz");
    showQuestion(0);
    startTimer(15);
    startTimerLine(0);
}

const nextBtn=document.querySelector(".nextBtn");

let que_count = 0;
let counter;
let timeValue=15;
let counterLine;
let widthValue=0;

nextBtn.onclick=()=>{
    if(que_count < questions.length-1){
        que_count++;
        showQuestion(que_count);
        clearInterval(counter);
        startTimer(timeValue);

        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextBtn.style.display="none";
    }
    else{
        console.log("You Have Completd Your Task 🥰");
    }

}


function showQuestion(index){
    const que_text = document.querySelector('.text');
   
    let option_tag = '<div class="options"><span>'+ questions[index].option[0] +'</span></div>'
                    +'<div class="options"><span>'+ questions[index].option[1] +'</span></div>'
                    +'<div class="options"><span>'+ questions[index].option[2] +'</span></div>'
                    +'<div class="options"><span>'+ questions[index].option[3] +'</span></div>'
    let que_tag="<span>"+questions[index].numb+ '.' + questions[index].question + "</span>"
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const total_que = document.querySelector(".total_que");
    let total_queTag = '<p>' + questions[index].numb + ' out of 5 questions<p>'
    total_que.innerHTML=total_queTag;

    const option = option_list.querySelectorAll(".options");
    for(let i=0; i<option.length;i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }

}

let tickIcon = '<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="cross icon"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine); 
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let alloptions = option_list.children.length;

    if(userAns == correctAns){
        
    answer.classList.add("correct") 
    console.log("Ans is Correct");
    answer.insertAdjacentHTML("beforeend",tickIcon);
    }
    else{
        answer.classList.add("Incorrect")  
        console.log("Ans is Wrong");
        answer.insertAdjacentHTML("beforeend",crossIcon);
        

        for(let i=0; i<alloptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","options correct");
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
            }
            
        } 

    }

    for (let i=0; i<alloptions; i++){
        option_list.children[i].classList.add("disabled");
    }

    nextBtn.style.display="block";

}

function startTimer(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeCount.textContent = time;
        time--;

        if(time<9){
            let addZero = timeCount.textContent;
            timeCount.textContent = 0 + addZero;
        }

        if (time<0){
            clearInterval(counter)
            timeCount.textContent="00";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 50);
    function timer(){
        time += 1 ; 
        timeLine.style.width = time + "px"; 
        if(time > 319){
            clearInterval(counterLine); 
        }
    }
}
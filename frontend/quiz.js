let categoryCount = localStorage.getItem('category');
let correctAnswer = "";
let questionIndex = 0;
let questions = [];

let categories = {
    18 : "Computers",
    19 : "Mathematics",
    30 : "Gadgets",
    17 : "Nature",
    22 : "Geography",
    23 : "History",
    31 : "Anime",
    27 : "Animals",
    10 : "Books",
    24 : "Politics",
    25 : "Art",
    11 : "Film"
}
let categoryHead = document.querySelector('.category');
categoryHead.textContent=`${categories[categoryCount]} `;

async function loadQuestions()
{
    const url = `https://opentdb.com/api.php?amount=5&category=${categoryCount}&type=multiple`;
    const result = await fetch(url);
    const data = await result.json();
    questions = data.results;
    showQuestion();
}

let display_question = document.querySelector('.question-title');
let option1 = document.querySelector('.option-1');
let option2 = document.querySelector('.option-2');
let option3 = document.querySelector('.option-3');
let option4 = document.querySelector('.option-4');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
nextButton.addEventListener('click',()=>{
    next();
})
prevButton.addEventListener('click',()=>{
    prev();
})

let optionsArr = [option1,option2,option3,option4];
function showQuestion()
{
    display_question.textContent = `${questions[questionIndex].question}`;
    correctAnswer = `${questions[questionIndex].correct_answer}`;
    let incorrectAnswers = questions[questionIndex].incorrect_answers;
    let randomno = Math.floor(Math.random() * 4);
    optionsArr[randomno].innerHTML = correctAnswer + optionsArr[randomno].innerHTML;
    let it = 0;
    for(let i = 0 ; i < 4 ; i++)
    {
        if(i != randomno)
        {
            optionsArr[i].innerHTML = incorrectAnswers[it++] + optionsArr[i].innerHTML;
        }
    }
}
function next()
{
    if(questionIndex == questions.length-1)
    {
        return;
    }
    for(let i = 0 ; i < 4 ; i++)
    {
        optionsArr[i].innerHTML=
        `<div class="tick-mark">
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/40C057/checked--v1.png" alt="checked--v1"/>
        </div>`
    }
    questionIndex++;
    showQuestion();
}
function prev()
{
    if(questionIndex == 0)
    {
        return;
    }
    for(let i = 0 ; i < 4 ; i++)
    {
        optionsArr[i].innerHTML=
        `<div class="tick-mark">
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/40C057/checked--v1.png" alt="checked--v1"/>
        </div>`
    }
    questionIndex--;
    showQuestion();
}
loadQuestions();

let optionClick = document.querySelectorAll('.options > div');
let tickMark = document.querySelectorAll('.tick-mark');
for(let i = 0 ; i < optionClick.length ; i++)
{
    optionClick[i].addEventListener('click',()=>{
        console.log(tickMark[i]);
        tickMark[i].style.visibility = "visible";
    })
}

let exitBtn = document.querySelector('.exit');
exitBtn.addEventListener('click',()=>{
    window.location.href = '../index.html';
})
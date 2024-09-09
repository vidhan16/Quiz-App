let categoryCount = localStorage.getItem('category');
let correctAnswer = "";
let questionIndex = 0;
let questions = [];
let totalPoints = [0,0,0,0,0];
let selectedOptions = [-1,-1,-1,-1,-1];


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
    optionsArr[randomno].innerHTML = correctAnswer;
    let it = 0;
    for(let i = 0 ; i < 4 ; i++)
    {
        if(i != randomno)
        {
            optionsArr[i].innerHTML = incorrectAnswers[it++];
        }
    }
    if(selectedOptions[questionIndex] != -1)
    {
        optionsArr[selectedOptions[questionIndex]].style.backgroundColor = "#00a86d";
        optionsArr[selectedOptions[questionIndex]].style.color = "white";
    }
    for(let j = 0 ; j < 4 ; j++)
    {
        if(j != selectedOptions[questionIndex])
        {
            optionsArr[j].style.backgroundColor = "white";
            optionsArr[j].style.color = "black";
        }
    }
}
function next()
{
    if(questionIndex == questions.length-1)
    {
        let sum = 0;
        for(let i = 0 ; i < totalPoints.length ; i++)
        {
            sum+=totalPoints[i];
        }
        document.querySelector('.scoreboard').style.visibility = "visible";
        document.querySelector('.scoredPoints').textContent=`${sum}`;
        // document.querySelector('question').style.backdropFilter = 'blur(10px)';
        return;
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
    questionIndex--;
    showQuestion();
}
loadQuestions();

let exitBtn = document.querySelector('.exit');
exitBtn.addEventListener('click',()=>{
    console.log("Exit clicked");
    window.location.href = '../index.html';
})

let exitBtn1 = document.querySelectorAll('.exit')[1];
exitBtn1.addEventListener('click',()=>{
    console.log("Exit clicked");
    window.location.href = '../index.html';
})

for(let i = 0 ; i < optionsArr.length ; i++)
{
    optionsArr[i].addEventListener('click',()=>{
        optionsArr[i].style.backgroundColor = "#00a86d";
        optionsArr[i].style.color = "white";
        for(let j = 0 ; j < optionsArr.length ; j++)
        {
            if(j!=i)
            {
                optionsArr[j].style.backgroundColor = "white";
                optionsArr[j].style.color = "black";
            }
        }
        if(optionsArr[i].textContent == questions[questionIndex].correct_answer)
        {
            totalPoints[questionIndex] = 10;
        }
        else if(optionsArr[i].textContent != questions[questionIndex].correct_answer)
        {
            totalPoints[questionIndex] = 0;
        }
        selectedOptions[questionIndex] = i;
        console.log(totalPoints);
        console.log(selectedOptions);
    })
}
AOS.init();
var typed = new Typed(".auto-type", {
    strings : ["Skills","Knowledge","Level"],
    typeSpeed : 120,
    backSpeed : 120,
    loop : true
})

let loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click',()=>{
    window.location.href = './frontend/login.html';
})

var option_button = document.querySelector('.right > :nth-child(2)');
var more_options = document.querySelector('.more-options');
console.log(more_options);

let toggler = 0;
option_button.addEventListener('click',()=>{
    if(!toggler){
        more_options.style.display="flex";
        toggler = 1;
    }
    else{
        more_options.style.display="none";
        toggler = 0;
    }
})

let catArr = [18,19,30,17,22,23,31,27,10,24,25,11];
let topics = document.querySelectorAll('.topics');
let topic = document.querySelectorAll('.head3');

let display_question = document.querySelector('.question-title');
let currQuestion = 0;
for(let i = 0 ; i < topics.length ; i++)
{
    topics[i].addEventListener('click',()=>{
        localStorage.setItem('category',catArr[i]);
        window.location.href = './frontend/quiz.html';
        topics[i].style.transform = "scale(0.97)";
        setTimeout(() => {
            topics[i].style.transform = "scale(1)";
        }, 500);
    })
}
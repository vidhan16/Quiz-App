AOS.init();
var typed = new Typed(".auto-type", {
    strings : ["Skills","Knowledge","Level"],
    typeSpeed : 120,
    backSpeed : 120,
    loop : true
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

let more_options_links = document.querySelectorAll('.more-options a');
for(let i = 0 ; i < more_options_links.length ; i++)
{
    more_options_links[i].addEventListener('click',()=>{
        more_options.style.display="none";
        toggler = 0;
    })
}

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

let sliderBtn = document.querySelector('.slider-btn');
let slidingWindow = document.querySelector('.slider')

let sliderToggle = 0;
sliderBtn.addEventListener('click',()=>{
    if(!sliderToggle)
    {
        slidingWindow.style.transform = "translate(100%, 0)";
        sliderBtn.textContent="SIGNUP";
        sliderToggle = 1;
    }
    else{
        slidingWindow.style.transform = "translate(0, 0)";
        sliderBtn.textContent="LOGIN";
        sliderToggle = 0;
    }
})

let loginOpen = document.querySelectorAll('.login-button');
let loginWindow = document.querySelector('.auth_parent');
for(let i = 0 ; i < loginOpen.length ; i++)
{
    loginOpen[i].addEventListener('click',()=>{
        loginWindow.style.display = "block";
    })
}

let closeButton = document.querySelector('.cross-button');
closeButton.addEventListener('click',()=>{
    loginWindow.style.display = "none";
    document.querySelector('body').style.overflow="visible";
})

let alreadyBtn = document.querySelector('.already_login');
let loginSide = document.querySelector('.login_side');
let signupSide = document.querySelector('.signup_side');
alreadyBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    signupSide.style.display="none";
    loginSide.style.display="block";
})

let notLogged = document.querySelector('.not_logged span');
notLogged.addEventListener('click',(e)=>{
    e.preventDefault();
    signupSide.style.display="block";
    loginSide.style.display="none";
})

let loginAuth = document.querySelector('.login-btn');
let signupAuth = document.querySelector('.signup-btn');

function register_user(emailInput, userInput, passInput) {
    let oldUser = JSON.parse(localStorage.getItem('users')) || [];
    
    let user = {
        username: userInput,
        emailid: emailInput,
        password: passInput
    };

    oldUser.push(user);
    
    localStorage.setItem('users', JSON.stringify(oldUser));
}


signupAuth.addEventListener('click',(e)=>{
    e.preventDefault();
    let emailInput = document.querySelector('.emailid_signup').value;
    let userInput = document.querySelector('.username_signup').value;
    let passInput = document.querySelector('.password_signup').value;
    if(emailInput!=""  && userInput!="" && passInput != "" )
    {
        register_user(emailInput,userInput,passInput);
    }
})


function authenticate_user(userInput,passInput)
{
    let storedUsers = JSON.parse(localStorage.getItem('users'));
    for(let i = 0 ; i < storedUsers.length ; i++)
    {
        console.log(userInput);
        console.log(storedUsers[i].username);
        console.log(passInput);
        console.log(storedUsers[i].password);
        if(storedUsers[i].username == userInput && storedUsers[i].password == passInput)
        {
            loginWindow.style.display="none";
            document.querySelector('.auth-success').style.display="block";
            document.querySelector('.login-button').textContent=`Welcome, ${userInput}`;
            setTimeout(() => {
                document.querySelector('.auth-success').style.display="none";
            }, 3000);
            return;
        }
    }
    console.log("Incorrect");
}

loginAuth.addEventListener('click',()=>{
    let userInput = document.querySelector('.username_login').value;
    let passInput = document.querySelector('.password_login').value;
    if(userInput!=""  && passInput != "")
    {
        authenticate_user(userInput,passInput);
    }    
})

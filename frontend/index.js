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
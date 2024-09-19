window.addEventListener('DOMContentLoaded', () => {
    // Load the loader HTML
    fetch('glassloader.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            setTimeout(() => {
                document.querySelector('.loader-body').style.display = 'none';
                document.querySelector('.container').style.display = 'block';
                document.querySelector('.cross-x').style.display = 'block';
                triggerAnimaitons() ;
            }, 2000);
        });
  });
  
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  
  document.querySelector('.cross-x').addEventListener('click', () => { 
    window.location.href='../index.html';
   });
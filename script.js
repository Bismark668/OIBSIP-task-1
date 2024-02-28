const navBtn = document.querySelector('#POP-UP')
const homeBtn =document.querySelector('#home-btn')
const bookBtn =document.querySelector('#book-us')
const closeBtn =document.querySelector('#close')


// /Toggling the forms page with the Nvbar button/ 

navBtn.addEventListener('click',function(){
    let formsSection = document.querySelector('.sec-4')
    formsSection.classList.add('active')
})

// /Toggling the forms page with the home button/ 

homeBtn.addEventListener('click',function(){
    let formsSection = document.querySelector('.sec-4')
    formsSection.classList.add('active')
})

// /Using the book button to book and close the forms section/ 

bookBtn.addEventListener('click',function(){
    alert('THANKS FOR CHOSING US')
    let formsSection = document.querySelector('.sec-4')
    formsSection.classList.remove('active')
})

// /Using the colse button to close the forms section/ 

closeBtn.addEventListener('click',function(){
    let formsSection = document.querySelector('.sec-4')
    formsSection.classList.remove('active')
})

// Display curretn year at the footer

document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
   });
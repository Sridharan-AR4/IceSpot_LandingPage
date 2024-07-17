// window.onload = function() {window.scrollTo(0,0);}
let menubar=document.querySelector(".menubar");
let navbar=document.querySelector(".navlist");
menubar.addEventListener('click',()=>{
    navbar.classList.toggle("navlistt");
})
navbar.addEventListener('click',()=>{
    navbar.classList.toggle("navlistt");
 })

 let contactform=document.querySelector('.contactform');

 contactform.addEventListener('submit',(e)=>{
    e.preventDefault();
    window.location.href="contact.html";
 })
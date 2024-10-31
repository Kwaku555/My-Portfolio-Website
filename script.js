const hamburgers = document.querySelector('.hamburger');
const menulinks = document.querySelector('.menu1');
hamburgers.addEventListener('click',  () =>  { 
    menulinks.classList.toggle('active');
});
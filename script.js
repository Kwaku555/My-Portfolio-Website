const hamburgers = document.querySelector('.hamburger');
const menulinks = document.querySelector('.menu1');
hamburgers.addEventListener('click',  () =>  { 
    hamburgers.classList.toggle('active');
    menulinks.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '&#10005;'; // Change to "X"
    } else {
        hamburger.innerHTML = '&#9776;'; // Change back to hamburger
    }
});
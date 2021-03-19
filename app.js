'use strict';
const accordion = document.querySelectorAll('.accordion-title');
accordion.forEach(accord => {
    accord.addEventListener('click', () => {
        const panel = accord.nextElementSibling; 
        panel.classList.toggle('active');
        const arrow = accord.childNodes[1];
        console.log(arrow);
        panel.classList.contains('active') ? arrow.innerHTML = '<i class="fas fa-chevron-up"></i>' : arrow.innerHTML = '<i class="fas fa-chevron-down"></i>';
    })
})
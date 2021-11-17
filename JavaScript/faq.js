
/* Inserting the toggle button to a varibale */
/* running the foreach loop the create eventlistener */
/* addEventListener will add an 'active' class the will display the FAQ in the broswer with display block... if I remember right xD */

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    })
})
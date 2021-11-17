/* If you read the FAQ script it pretty similar */
/* getting the panel class that present each div of the image */
/* adding an eventlistener that first, remove class than add the 'active' class */
/* active class change the value of the flex in the css => see 'gallery.scss' */

const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', () =>{
        removeActiveClasses(); 
        panel.classList.add('active');
    })
})


function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}

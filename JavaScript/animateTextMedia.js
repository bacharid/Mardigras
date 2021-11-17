/* READ ME instruction is on animateText.js, sorry */

const textEl = document.getElementById('container-text-media');
const text = 'Mardi Gras - Media';

let idx = 1;
let speed = 50;
writeText();
function writeText(){
    textEl.innerText = text.slice(0,idx);

    idx++;

    if(idx > text.length){
        idx = 1;
        return;
    }

    setTimeout(writeText, speed);

}

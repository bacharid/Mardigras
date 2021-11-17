/* READ ME instruction is on animateText.js, sorry */

const textEl = document.getElementById('container-text-faq');
const text = 'Frequently Asked Questions';

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

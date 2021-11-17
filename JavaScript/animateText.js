/* READ ME!!!!*/
/* There's more scripts for animate text, the explantion written here only */

/* Creating a variable to get the h1/2/3 by Id */
/* Creating a Text variable to display the animate text */


const textEl = document.getElementById('container-text');
const text = 'Mardi Gras - the party starts here...';

/* Creating a index variable to know how much should I slice the text. */
/* Speed variable is for the speed of the animation with the setTimeout */

let idx = 1;
let speed = 100;

/* Creating the function */
/* using the slice method to slice the text, each time index jump by 1 */

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

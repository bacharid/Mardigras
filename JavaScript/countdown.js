//get Festival time in mil seconds and currect time
let countdown = () => {
    let countDate = new Date('March 1, 2022 00:00:00').getTime();
    let now = new Date().getTime();
    let gap = countDate - now;

    //How does it work?
    /* Creating a variables with miliseconds */
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    //Calculate the date
    /* Calc each type of time. day, hour, minute, second */
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);
    
    //Print to HTML

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
};

/* Using setInterval to make it interactive */
setInterval(countdown, 1000);
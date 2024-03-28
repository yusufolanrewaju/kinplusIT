let timer = document.getElementById("timer");
const targetDate = new Date ("Feb 18, 2024 00:00:00");

function countDownTimer (){

    const currentDate = new Date();

    const timeRemaining = targetDate - currentDate;

    if(timeRemaining <= 0){
        timer.innerHTML = 'Happy Birthday'
    } else {
    
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        let mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        days = checkTime(days);
        hours = checkTime(hours);
        mins = checkTime(mins);
        secs = checkTime(secs);

        timer.innerHTML = (`
            Time Remaining <br/> 
            ${days} Days : ${hours} Hours : ${mins} Minutes : ${secs} Seconds
            `);
        setTimeout(countDownTimer, 100)

    }

}

function checkTime(i){
    if (i < 10){ i = '0' + i}
    return i;
}

countDownTimer();
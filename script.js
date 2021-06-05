const display = document.getElementById('time');

function timeCount () {
    const now = moment();

    const currentTime = now.format("dddd, MMMM Do YYYY hh:mm:ss A");

display.textContent = currentTime;

}

setInterval(timeCount, 1000);
timeCount();
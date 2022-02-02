const time_hdr = document.getElementById("time_span");
let timer_status = false;
let hours = 0;
let seconds = 0;
let minutes = 0;

function start_timer() {
    if (timer_status === false) {
        timer_status = true;
        timer();
    }
}

function stop_timer() {
    timer_status = false;
}

function timer() {
    if (timer_status) {
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes === 60) {
            minutes = 0;
            hours += 1;
        }
        time_hdr.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')
            } `
        setTimeout(timer, 1000);
    }
}


function reset() {
    timer_status = false;
    hours = 0;
    seconds = 0;
    minutes = 0;
    time_hdr.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')
        } `
}
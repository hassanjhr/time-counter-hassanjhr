var timer;

function startTimer() {
    var hours = +document.getElementById("hours").value;
    var minutes = +document.getElementById("minutes").value;
    var seconds = +document.getElementById("seconds").value;

    timer = setInterval(function() {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("Time's up!");
            return;
        }

        if (seconds === 0) {
            if (minutes !== 0) {
                minutes--;
                seconds = 59;
            } else if (hours !== 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        document.getElementById("hours").value = formatTime(hours);
        document.getElementById("minutes").value = formatTime(minutes);
        document.getElementById("seconds").value = formatTime(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("hours").value = "0";
    document.getElementById("minutes").value = "0";
    document.getElementById("seconds").value = "0";
}


function formatTime(time) {
    if (time < 10) {
        return "0" + time;
    }
    return "" + time;
}


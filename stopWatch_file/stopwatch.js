const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let seconds = 0;
let timer = false; // Declare timer globally
let ring = new Audio('./Fido-Joy-Is-Coming-(TrendyBeatz.com).mp3');
let interval; // Declare a variable to store the interval

startbtn.addEventListener('click', function() {
    if (!timer) { // Prevent multiple intervals running
        timer = true;
        stopwatch(); // Start the stopwatch
    }
});

stopbtn.addEventListener('click', function() {
    timer = false;
    clearInterval(interval); // Stop the interval
    ring.pause(); // Pause the sound
});

resetbtn.addEventListener('click', function() {
    timer = false;
    clearInterval(interval); // Stop the interval
    ring.pause(); // Pause the sound
    hour = 0;
    minute = 0;
    seconds = 0;
    updateDisplay(); // Reset the display
});

function stopwatch() {
    interval = setInterval(function() {
        if (!timer) {
            clearInterval(interval); // Stop the interval if timer is false
            return;
        }

        // Increment the seconds
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minute++;
        }

        if (minute === 60) {
            minute = 0;
            hour++;
        }

        // Play sound when hour reaches 1
        if (hour === 1 && !ring.paused) {
            ring.play();
        }

        updateDisplay(); // Update the display every second
    }, 1000); // Run every 1 second
}

function updateDisplay() {
    // Add leading zeros to single-digit values
    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = seconds < 10 ? "0" + seconds : seconds;

    // Update the display
    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
}

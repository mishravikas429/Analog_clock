const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');


setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();

    secDiv.style.transform = "rotate(" + (sec * 360 / 60) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360 / 60) + "deg";
    hourDiv.style.transform = "rotate(" + (hour * 360 / 12) + "deg)";

}
updateClock();
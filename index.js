const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){

    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`; 

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6 ) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minutes / 60) * 30 ) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();
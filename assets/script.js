document.addEventListener("DOMContentLoaded", function() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    function setClock() {
        const currentDate = new Date();

        const seconds = currentDate.getSeconds();
        const minutes = currentDate.getMinutes();
        const hours = currentDate.getHours();

        const secondsDegree = ((seconds / 60) * 360) + 90; // adding 90 degrees to account for the default 12 o'clock position
        const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // adding 90 degrees
        const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // adding 90 degrees

        secondHand.style.transform = `translateX(-50%) rotate(${secondsDegree}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hoursDegree}deg)`;
    }

    setInterval(setClock, 1000);
    setClock(); // Initial call to set the clock hands correctly on page load
});

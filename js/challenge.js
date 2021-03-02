document.addEventListener("DOMContentLoaded", () => {
    startNewPageProcess();
});


function startNewPageProcess() {
    startCounter();
}

function startCounter() {
    let counterElement = document.getElementById("counter");
    let currentCounterValue = parseInt(counterElement.innerText);
    console.log({currentCounterValue})
    setInterval(function () {
        currentCounterValue = currentCounterValue + 1;
        counterElement.innerText = currentCounterValue;
    }, 1000);
}
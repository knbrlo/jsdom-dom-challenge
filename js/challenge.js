document.addEventListener("DOMContentLoaded", () => {
    startNewPageProcess();
});

let counterElement = document.getElementById("counter");
let currentCounterValue = parseInt(counterElement.innerText);

function startNewPageProcess() {
    startCounter();
    setupButtonMinus();
    setupButtonPlus();
    setupButtonHeart();
    setupButtonPause();
}

function startCounter() {
    setInterval(function () {
        currentCounterValue = currentCounterValue + 1;
        counterElement.innerText = currentCounterValue;
    }, 1000);
}

function setupButtonMinus() {
    let selectedElement = document.getElementById("minus");
    selectedElement.addEventListener("click", function() {
        runMinusButtonClicked();
    });
}

function runMinusButtonClicked() {
    currentCounterValue = currentCounterValue - 1;
    counterElement.innerText = currentCounterValue;
}

function setupButtonPlus() {
    let selectedElement = document.getElementById("plus");
    selectedElement.addEventListener("click", function() {
        runPlusButtonClicked();
    });
}

function runPlusButtonClicked() {
    currentCounterValue = currentCounterValue + 1;
    counterElement.innerText = currentCounterValue;
}

function setupButtonHeart() {
    let selectedElement = document.getElementById("heart");
    selectedElement.addEventListener("click", function() {
        console.log('clicked heart');
    });
}

function setupButtonPause() {
    let selectedElement = document.getElementById("pause");
    selectedElement.addEventListener("click", function() {
        console.log('clicked pause');
    });
}

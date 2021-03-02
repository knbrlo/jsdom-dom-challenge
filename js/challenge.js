document.addEventListener("DOMContentLoaded", () => {
    startNewPageProcess();
});

let pausedTimer = false;
let intervalTimer = setInterval(function() {incrementTimer(); }, 1000);

let counterElement = document.getElementById("counter");
let currentCounterValue = parseInt(counterElement.innerText);

let numberOfLikesObject = {};

function startNewPageProcess() {
    setupButtonMinus();
    setupButtonPlus();
    setupButtonHeart();
    setupButtonPause();
}

function incrementTimer() {
    currentCounterValue = currentCounterValue + 1;
    counterElement.innerText = currentCounterValue;
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
        runHeartButtonClicked();
    });
}

function runHeartButtonClicked() {

    if (currentCounterValue in numberOfLikesObject) {
        numberOfLikesObject[currentCounterValue] = numberOfLikesObject[currentCounterValue] + 1;
        udpateExistingLiItem(currentCounterValue);

    } else {
        numberOfLikesObject[currentCounterValue] = 1;
        addNewLiItem(currentCounterValue);
    }
}

function addNewLiItem(numberToAdd) {
    let newLiElement = document.createElement("li");
    let newLikeText = numberToAdd + " has been liked " + "1 time"
    newLiElement.appendChild(document.createTextNode(newLikeText));
    let unorderedListElement = document.querySelector(".likes");
    unorderedListElement.appendChild(newLiElement);
}

function udpateExistingLiItem(numberToUpdate) {
    let unorderedListElement = document.querySelector(".likes");
    let listItem = unorderedListElement.getElementsByTagName("li");

    for (let t=0; t < listItem.length; t++) {
        let valueToCheck = listItem[t].innerHTML;
        let splitString = valueToCheck.split(" ");
        let numberLiked = parseInt(splitString[0]);
        if (numberLiked == numberToUpdate) {
            let newLikeText = numberToUpdate + " has been liked " + `${numberOfLikesObject[numberToUpdate]} times`
            listItem[t].innerText = newLikeText;
        }
    } 
}

function setupButtonPause() {
    let selectedElement = document.getElementById("pause");
    selectedElement.addEventListener("click", function() {
        runPausePressed();
        console.log('clicked pause');
    });
}

function runPausePressed() {
    if (!pausedTimer) {
        clearInterval(intervalTimer);
        pausedTimer = true;
    } else {
        intervalTimer = setInterval(function() {incrementTimer(); }, 1000);
        pausedTimer = false;
    }

}

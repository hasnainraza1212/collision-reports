const boxes = document.querySelectorAll(".box");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const progressBar = document.getElementById('progessBar');

let numberOfBoxes = 10;
let currentBox = 1;
let perc = 10;

document.getElementById("prev").disabled = true;

function showBox(boxNumber) {
    boxes.forEach((box, index) => {
        if (index === boxNumber - 1) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

function updateProgressBar() {
    progressBar.style.width = `${perc}%`;
    progressBar.textContent = `${perc}%`;
}

function next() {
    if (perc < 100) {
        perc += 10;
        updateProgressBar();
        document.getElementById("prev").disabled = false;
        document.getElementById("next").disabled = false;
    }
    
    if (perc === 100) {
        document.getElementById("next").disabled = true;
    }

    currentBox = (currentBox % numberOfBoxes) + 1;
    showBox(currentBox);
}

function prev() {
    document.getElementById("next").disabled = false;

    currentBox = currentBox - 1;
    if (currentBox < 1) {
        currentBox = numberOfBoxes;
    }
    if(currentBox === 1){
        document.getElementById("prev").disabled = true;
    }

    if (perc <= 10) {
        document.getElementById("prev").disabled = true;
    } else {
        perc -= 10;
        updateProgressBar();
    }

    showBox(currentBox);
}

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

showBox(currentBox);
updateProgressBar();
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

const phoneInputField = document.querySelector("#homePhone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const cell = document.querySelector("#cell");
const cellInput = window.intlTelInput(cell, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const businessPhone = document.querySelector("#businessPhone");
const businessInput = window.intlTelInput(businessPhone, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
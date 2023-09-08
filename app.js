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


document.addEventListener("DOMContentLoaded", function () {
    let dropZones = document.querySelectorAll('.dragContainer');
    let uploadedFilesArray = []; // Create an array to store uploaded files

    dropZones.forEach((zone, index) => {
        let inputFile = zone.querySelector('input[type="file"]');
        let uploadedImagesContainer = zone.querySelector(`#uploadedImagesContainer${index + 1}`);
        
        // Highlight drop zone on drag over
        zone.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.style.backgroundColor = '#e0e0e0';
        });
        
        // Reset background on drag leave
        zone.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = '';
        });
        
        // Process the dropped file(s)
        zone.addEventListener('drop', function (e) {
            e.preventDefault();
            this.style.backgroundColor = '';

            let files = e.dataTransfer.files;
            let maxFiles = this.querySelector('.m-0.text-center:nth-child(3)').textContent.split(" ")[4]; // Extract max files from the text

            if (files.length > parseInt(maxFiles)) {
                alert("You can only upload up to " + maxFiles + " files.");
                return;
            }

            // Add the files to the array
            for (let i = 0; i < files.length; i++) {
                uploadedFilesArray.push(files[i]);

                // Display the uploaded image in the respective container
                let img = document.createElement('img');
                img.src = URL.createObjectURL(files[i]);
                img.className = 'uploadedImage';
                uploadedImagesContainer.appendChild(img);
            }

            inputFile.files = files;
        });
        
        // Click event to show file dialog
        zone.querySelector('label').addEventListener('click', function () {
            inputFile.click();
        });
    });
});



ClassicEditor
            .create( document.querySelector( '#editor' ) )
            .catch( error => {
                console.error( error );
            } );
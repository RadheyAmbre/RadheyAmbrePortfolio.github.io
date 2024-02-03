// Progress Bar
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


// Navbar Overlay
/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


// Stick Header-Bottom
var header = document.getElementById('sticky');
var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}


// Checkbox -- other -- input
const radioOptions = document.querySelectorAll('input[name="Training_Courses"]');
const radioMessageBox = document.getElementById('radioMessageBox');

radioOptions.forEach(option => {
    option.addEventListener('click', function () {
        if (this.id === 'otherCheckbox' && this.checked) {
            radioMessageBox.style.display = 'block';
        } else {
            radioMessageBox.style.display = 'none';
        }
    });
});


//Animation On Scroll //Single-Times //Animation Right
let right = document.querySelectorAll('.animationRight');

function rightAnime() {
    right.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 630;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Left
let left = document.querySelectorAll('.animationLeft');

function leftAnime() {
    left.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 630;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Up
let up = document.querySelectorAll('.animationUp');

function upAnime() {
    up.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Down
let down = document.querySelectorAll('.animationScale');

function scaleAnime() {
    down.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 630;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


// Every Scroll function
window.onscroll = function () {
    myFunction();
    progressBar();
    rightAnime();
    leftAnime();
    upAnime();
    scaleAnime();
};


// otherOption enable/disable
var dropOptions = document.getElementById('inputGroupSelect04');
var dropInput = document.getElementById('dropMessageBox');

dropOptions.addEventListener('change', () => {
    if (dropOptions.selectedIndex == '5') {
        dropInput.disabled = false;
    }
    else {
        dropInput.disabled = true;
    }
})


// Jquery
$(document).ready(function () {

    // Check the display of Checkbox
    if ($("#checkbox").css("display") === "block") {
        // console.log("checkbox is currently block");

        $('form').submit(function () {
            var radioOptions = $('input[name="Training_Courses"]');

            var selectedOption = false;
            radioOptions.each(function () {
                if ($(this).is(':checked')) {
                    selectedOption = true;
                    return false; // Exit the loop early
                }
            });

            if (!selectedOption) {
                alert('Please select a Training course.');
                return false; // Prevent form submission
            }

            var otherInput = $('#radioMessageBox');
            var otherOption = $('#otherCheckbox');

            if (otherOption.is(':checked') && otherInput.val().trim() === '') {
                alert('Please enter the name of the "Other" training course.');
                return false; // Prevent form submission
            }

            return true; // Allow form submission
        });
    }
    // else {
    //     console.log("checkbox is currently none");
    // }


    // Check the display of Dropdown
    if ($('#dropDown').css("display") === "block") {
        // console.log("dropdown is currently block");

        $('form').submit(function () {
            var dropOptions = $('#inputGroupSelect04');
            if (dropOptions.val() === null) {
                alert('Please select a Training course.');
                return false;
            }

            var otherInput = $('#dropMessageBox');

            if (dropOptions.val() === '5' && otherInput.val().trim() === '') {
                alert('Please enter the name of the "Other" training course.');
                return false; // Prevent form submission
            }

            return true;
        });
    }
    // else {
    //     console.log("dropdown is currently none");
    // }

});
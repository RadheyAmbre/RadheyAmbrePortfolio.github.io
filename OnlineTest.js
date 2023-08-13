// Timer
// Set the date we're counting down to
var countDownDate = new Date("August 7, 2024 24:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"

    document.getElementById("time").innerHTML = hours + "&emsp;&emsp;&emsp;" + minutes + "&emsp;&emsp;&emsp;" + seconds + "<br>" + "Hours" + "&emsp;" + "Minutes" + "&emsp;" + "Seconds";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "TIMES UP!";
    }
}, 1000);

// Questions and Options

var questions = [{
    id: 0,
    question: "Q1 : Who is know as the father of computer?",
    options: ["Dennis Ritchie", "Bill Gates", "Charles Babbage", "James Gosling"],
    answer: 3
},
{
    id: 1,
    question: "Q2 : What is the brain of a computer system called?",
    options: ["RAM", "CPU", "GPU", "None of the above"],
    answer: 2
},
{
    id: 2,
    question: "Q3 : What does CPU stand for?",
    options: ["Central Processing Unit", "Control Processing Unit", "Computer Processing Unit", "Computer Programming Unit"],
    answer: 1
},
{
    id: 3,
    question: "Q4 : Which of the following is included in computer system?",
    options: ["Hardware", "Peripheral Device", "Software", "All of the above"],
    answer: 4
},
{
    id: 4,
    question: "Q5 : What is know as temporary memory or volatile memory?",
    options: ["SSD", "HDD", "RAM", "ROM"],
    answer: 3
},
{
    id: 5,
    question: "Q6 : What does ALU stand for in the context of computers?",
    options: ["Array Logic Unit", "Arithmetic Logic Unit", "Application Logic Unit", "Automatic Logic Unit"],
    answer: 2
},
{
    id: 6,
    question: "Q7 : What does RAM stand for?",
    options: ["Random Access Memory", "Reallocate Automatic Memory", "Remote Access Memory", "None of the above"],
    answer: 1
},
{
    id: 7,
    question: "Q8 : Which of the following is the smallest unit of memory?",
    options: ["Byte", "Bit", "Nibble", "KB"],
    answer: 2
},
{
    id: 8,
    question: "Q9 : What is Half Byte called?",
    options: ["KiloByte", "Bit", "Nibble", "Word Szie"],
    answer: 3
},
{
    id: 9,
    question: "Q10 : Which of the following is not an input device?",
    options: ["Microphone", "Mouse", "Keyboard", "Speakers"],
    answer: 4
},
{
    id: 10,
    question: "Q11 : Which of the following computer languages is written in binary form?",
    options: ["Java", "C", "Pascal", "Machine Language"],
    answer: 4
},
{
    id: 11,
    question: "Q12 : Which of the following is responsible for performing mathematical calculations?",
    options: ["Control Unit", "Register Unit", "Memory Unit", "Arithmetic Logic Unit"],
    answer: 4
},
{
    id: 12,
    question: "Q13 : Which of the following is not an output device?",
    options: ["Speaker", "Monitor", "Plotter", "Scanner"],
    answer: 4
},
{
    id: 13,
    question: "Q14 : What does SSD stand for?",
    options: ["Solid State Device", "Solid State Drive", "Serial State Data", "Solid Storage Device"],
    answer: 2
},
{
    id: 14,
    question: "Q15 : How many generation are computer currently classified into?",
    options: ["6", "5", "4", "2"],
    answer: 2
},
{
    id: 15,
    question: "Q16 : Which of the following is not related to computer?",
    options: ["Accuracy", "Speed", "Consistency", "Thinking"],
    answer: 4
},
{
    id: 16,
    question: "Q17 : The term Pentiumn is related to which of the following computer parts:",
    options: ["Random Access Memory", "Microprocessor", "Hard Disk Drive", "None of the above"],
    answer: 2
},
{
    id: 17,
    question: "Q18 : Which of the following Indian Institutes is credited with the creation of the supercomputer named Pratham?",
    options: ["BARC", "ISRO", "WIPRO", "C-DAK"],
    answer: 4
},
{
    id: 18,
    question: "Q19 : Which of the following is know as the first mechanical calculating device?",
    options: ["Abacus", "Pascaline", "Leibniz Calculator", "UNIVAC"],
    answer: 1
},
{
    id: 19,
    question: "Q20 : A megabyte, also known as a MB, contains:",
    options: ["512 bytes", "1024 bytes", "1000 kilobytes", "1024 kilobytes"],
    answer: 4
}
];


var selectedOptions = Array(questions.length).fill(null);
var currentQuestion = 0; // Start with the first question

// Function to display the question and selected option
function displayQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestion].question;

    var optionsElement = document.getElementById("options");
    var optionsHTML = '';

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var optionId = 'option-' + currentQuestion + '-' + i; // Unique identifier for the checkbox

        optionsHTML += '<label class="option">';
        optionsHTML += '<input type="checkbox" name="check" id="' + optionId + '" onclick="onlyOne(this)"';

        // Check if the option is the selected option
        if (selectedOptions[currentQuestion] === questions[currentQuestion].options[i]) {
            optionsHTML += ' checked="checked"'; // Add the 'checked' attribute
        }

        optionsHTML += '>';
        optionsHTML += '<span class="checkmark"></span>';
        optionsHTML += '<span class="option-text">' + questions[currentQuestion].options[i] + '</span>';
        optionsHTML += '</label>';
        optionsHTML += '<br><br>';
    }

    optionsElement.innerHTML = optionsHTML;
}

// Call the function to initially display the first question
displayQuestion();


// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("no");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        else if (current.length < 19) {
            this.classList.add("active");
        }
        else {
            alert("STOP");
        }
    });
}


// Get all the buttons
var buttons = document.getElementsByClassName("no");

// Attach click event to each button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonIndex = Array.from(buttons).indexOf(this);
        updateQuestion(buttonIndex);
        this.classList.add("active");
    });
}
function updateQuestion(index) {
    animation();
    checkButtonColor();

    buttons[currentQuestion].classList.remove("active");
    currentQuestion = index;
    displayQuestion();
    buttons[currentQuestion].classList.add("active");
    buttons[currentQuestion].style.backgroundColor = "blue";

    // Reset the markForReviewButton to 'Mark for Review'
    markForReviewButton.classList.remove('marked');
    markForReviewButton.textContent = 'Mark for Review';
    // Update the markForReviewButton state
    updateMarkForReviewButton();
}


// Next button click event
var nextButton = document.getElementsByClassName("next")[0];
nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        animation();
        checkButtonColor();

        buttons[currentQuestion].classList.remove("active");
        currentQuestion++;
        updateQuestion(currentQuestion);

        // Reset the markForReviewButton to 'Mark for Review'
        markForReviewButton.classList.remove('marked');
        markForReviewButton.textContent = 'Mark for Review';
        // Update the markForReviewButton state
        updateMarkForReviewButton();

        // Animation
        var next = document.getElementById("next");
        next.style.animation = "next 1s";
        setTimeout(function () {
            next.style.animation = "";
        }, 1000);
    }
});


// Previous button click event
var prevButton = document.getElementsByClassName("prev")[0];
prevButton.addEventListener("click", function () {
    if (currentQuestion > 0) {
        animation();
        checkButtonColor();

        buttons[currentQuestion].classList.remove("active"); // Remove active class from the next button
        currentQuestion--;
        updateQuestion(currentQuestion);

        // Reset the markForReviewButton to 'Mark for Review'
        markForReviewButton.classList.remove('marked');
        markForReviewButton.textContent = 'Mark for Review';
        // Update the markForReviewButton state
        updateMarkForReviewButton();

        // Animation
        var prev = document.getElementById("previous");
        prev.style.animation = "prev 1s";
        setTimeout(function () {
            prev.style.animation = "";
        }, 1000);
    }
});


function checkButtonColor() {
    if (selectedOptions[currentQuestion] == null && !markForReviewButton.classList.contains("marked")) {
        buttons[currentQuestion].style.backgroundColor = "orange";
    }
    else if (selectedOptions[currentQuestion] == null && markForReviewButton.classList.contains("marked")) {
        buttons[currentQuestion].style.backgroundColor = "red";
    }
    else if (selectedOptions[currentQuestion] !== null) {
        buttons[currentQuestion].style.backgroundColor = "#7DFF62";
    }
}


// Mark for Review
// Get the button elements
const markForReviewButton = document.getElementById('markForReviewButton');
const activeButtons = document.getElementsByClassName("active");

// Add event listener for button click
markForReviewButton.addEventListener('click', function () {
    // Toggle the 'marked' class on button click
    markForReviewButton.classList.toggle('marked');

    // Update the text of the markForReviewButton and
    // Change the color of active buttons if markForReviewButton is marked
    // markForReviewButton.textContent = markForReviewButton.classList.contains('marked') ? 'Unmark Review' : 'Mark for Review';
    if (markForReviewButton.classList.contains("marked")) {
        markForReviewButton.textContent = "Unmark Review";
        for (let i = 0; i < activeButtons.length; i++) {
            activeButtons[i].classList.add("marked");
            activeButtons[i].style.backgroundColor = "red";
        }
    }
    else {
        markForReviewButton.textContent = "Mark for Review";
        for (let i = 0; i < activeButtons.length; i++) {
            activeButtons[i].style.backgroundColor = "";
            activeButtons[i].classList.remove("marked");
        }
    }
});

// Function to update the markForReviewButton state
function updateMarkForReviewButton() {
    var activeButton = document.getElementsByClassName("active");
    // Check if any active button has the red background color
    var redActiveButton = false;
    for (var i = 0; i < activeButton.length; i++) {
        if (activeButton[i].style.backgroundColor === 'red' || activeButton[i].classList.contains("marked")) {
            redActiveButton = true;
            break;
        }
    }

    // Update the markForReviewButton state based on the active button color
    if (redActiveButton) {
        markForReviewButton.classList.add('marked');
        markForReviewButton.textContent = 'Unmark Review';
    }
    else {
        markForReviewButton.textContent = 'Mark for Review';
        markForReviewButton.classList.remove('marked');
    }
}


// Checkbox <only to select one option>

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName("check");
    checkboxes.forEach(function (item, index) {
        if (item !== checkbox) {
            item.checked = false;
        }
        else if (item.checked) {
            // Store the selected option in the selectedOptions array
            selectedOptions[currentQuestion] = questions[currentQuestion].options[index];
        }
        else {
            // Uncheck the current checkbox and set the selected option to null
            item.checked = false;
            selectedOptions[currentQuestion] = null;
        }
    });

    // Check if the question is unanswered and update the button color
    checkUnansweredQuestion();
}

function getSelectedOption() {
    var checkboxes = document.getElementsByName("check");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return questions[currentQuestion].options[i];
        }
    }

    return null; // Return null if no option is selected

}


// Answered and UnAnswered Questions color change
function checkUnansweredQuestion() {
    var activeButton = buttons[currentQuestion];

    if (selectedOptions[currentQuestion] !== null) {
        activeButton.style.backgroundColor = "#7DFF62";
    }
    else if (selectedOptions[currentQuestion] == null) {
        activeButton.style.backgroundColor = "orange";
    }
    else {
        activeButton.style.backgroundColor = "";
    }
}


function animation() {
    var question = document.getElementById("question");
    var option = document.getElementById("options");

    question.style.animation = "questionMove 1s";
    option.style.animation = "optionMove 0.7s";

    setTimeout(function () {
        question.style.animation = "";
        option.style.animation = "";
    }, 1000);
}
animation();


var activeClass = document.getElementsByClassName("active");
var Btn = document.getElementsByClassName("no");
var modal = document.getElementById("alert");
var nextBtn = document.getElementById("next");
var previousBtn = document.getElementById("previous");

// Add an event listener to the Next button
nextBtn.addEventListener("click", function () {
    // Check if the "active" class is applied to the last button
    if (activeClass.length > 0 && activeClass[0] === Btn[Btn.length - 1]) {
        // Get the index of the active button
        var activeIndex = Array.prototype.indexOf.call(Btn, activeClass[0]);

        // Check if the active button is the 20th question button
        if (activeIndex === Btn.length - 1) {
            showModal("This is the last question!");
        }
    }
});
previousBtn.addEventListener("click", function () {
    // Check if the "active" class is applied to the first button
    if (activeClass.length > 0 && activeClass[0] === Btn[0]) {
        // Get the index of the active button
        var activeIndex = Array.prototype.indexOf.call(Btn, activeClass[0]);

        // Check if the active button is the first question button
        if (activeIndex === 0) {
            // If it is the first button, show the modal
            showModal("This is the first question!");
        }
    }
});

// Function to show the modal with the given message
function showModal(message) {
    var modalBody = modal.querySelector(".modal-body");
    modalBody.textContent = message;
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}



// modal.addEventListener("show.bs.modal", () => {
//     // for (var i = 0; i < Btn.length; i++) {
//     //     if (i[19].classList.contains("active")) {
//     //         nextBtn.focus();
//     //     }
//     // }
//     nextBtn.addEventListener("click", () => {
//         console.log("clicked");F
//     })
// })

// nextBtn.addEventListener("click", () => {
//     modal.addEventListener("shoe.bs.modal")
// })


// $(document).ready(function () {
//     var activeCount = 0; // Counter for the active button clicks

//     // Event handler for the "Next" button
//     $('#next').click(function () {
//         activeCount++; // Increment the active button counter

//         if (activeCount === 20) {
//             $('#alert').modal('show'); // Show the modal when the counter reaches 20
//         }
//     });
// });

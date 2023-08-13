// Offcanvas
$(document).ready(function () {
    var menuLink = $('#offcanvasResponsive');
    var menu = $('.offcanvas-body');
    var close = $('.btn-close');
    var navLink = $('.nav-link');
    var content = $('.content');

    menuLink.click(function () {
        menu.toggleClass('menu_active');

        var offcanvasBS = bootstrap.Offcanvas.getInstance(menuLink);
        offcanvasBS.hide();
    });

    close.click(function () {
        menu.toggleClass('menu_active');
    });

    navLink.on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var top = $(target).offset().top;
        $('html, body').animate({ scrollTop: top }, 500);
        menu.toggleClass('menu_active');
    });

    content.click(function () {
        menu.toggleClass('menu_active');
    });
});



// Circular ProgressBar
const progressBars = document.querySelectorAll('[role="progressbar"]');
window.addEventListener("scroll", () => {
    for (const progressBar of progressBars) {
        const progressBarTop = progressBar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (progressBarTop < windowHeight) {
            progressBar.classList.add("is-animating");
        }
        else {
            progressBar.classList.remove("is-animating");
        }

        const progressBarBottom = progressBar.getBoundingClientRect().bottom;

        if (progressBarBottom > 0 && progressBarBottom < windowHeight) {
            progressBar.classList.add("is-animating");
        }
        else {
            progressBar.classList.remove("is-animating");
        }

    }
})


// Scroll Animation
var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }

    })
})
var hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));


// Top Button
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// Show or hide the button based on scroll position
window.onscroll = function () {
    var btn = document.getElementById("myBtn");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
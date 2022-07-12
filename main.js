// reveal point from bottom and top of the window
var revealerpoint = 100;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    // console.log("scrolling");
    var revealers = document.querySelectorAll('.magic-box');
    for (var i = 0; i < revealers.length; i++) {
        var windowheight = window.innerHeight;
        var revealertop = revealers[i].getBoundingClientRect().top;
        var revealerbottom = revealers[i].getBoundingClientRect().bottom;
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('fade-in')
            revealers[i].classList.remove('fade-out');
        } else {
            revealers[i].classList.add('fade-in');
            revealers[i].classList.add('fade-out');

        };
        if (revealerbottom < 0 + revealerpoint) {
            revealers[i].classList.remove('fade-in');
            revealers[i].classList.add('fade-out');
        }
    } 
};

const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById("nav")
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    nav.classList.add("nav-open");
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    nav.classList.remove("nav-open");
  }
});
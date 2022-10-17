function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

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

function errorForm(){
    alert("Er is iets misgeggan neem contact via Whatsapp");
}
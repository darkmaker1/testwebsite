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
document.querySelectorAll('nav > ul > li').forEach((el) =>{
  el.addEventListener('click', ()=>{
      document.querySelector('li.active').classList.remove('active');
      el.classList.toggle('active');
  })
});
function shoowMenu() {
  let menu = document.getElementById("dropdown");
      menu.classList.toggle("hideMenu");
}
function shoowMenu2() {
  let menu = document.getElementById("dropdown2");
      menu.classList.toggle("hideMenu");
}
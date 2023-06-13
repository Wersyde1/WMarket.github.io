const Login = document.getElementsByClassName('btnLogin-popup');
// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })


let closeShopping = document.querySelector('.close-popup1');
let closeShopping2 = document.querySelector('.close-popup2');
let closeShopping3 = document.querySelector('.close-popup3');

closeShopping.addEventListener('click', () => {
  alert('Спасибо за покупку!');
});

closeShopping2.addEventListener('click', () => {
    alert('Спасибо за покупку!');
  });

  closeShopping3.addEventListener('click', () => {
    alert('Спасибо за покупку!');
  });

Login[0].addEventListener('click', function clickMouse() {
    window.location.href = "Login.html";
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup1').click(function(e) {
    e.preventDefault();
    $('.popup-bg1').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup1').click(function() {
    $('.popup-bg1').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup2').click(function(e) {
    e.preventDefault();
    $('.popup-bg2').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup2').click(function() {
    $('.popup-bg2').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$('.open-popup3').click(function(e) {
    e.preventDefault();
    $('.popup-bg3').fadeIn(600);
    $('html').addClass('no-scroll');
});

$('.close-popup3').click(function() {
    $('.popup-bg3').fadeOut(600);
    $('html').removeClass('no-scroll');
});






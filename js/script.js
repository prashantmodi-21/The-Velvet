burger = document.querySelector('#hamburger');
navbar = document.querySelector('.navbar');
btn = document.querySelector('.btn');
trs = document.querySelector('.height')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('visibilty');
    btn.classList.toggle('visibilty');
    trs.classList.toggle('height')
})
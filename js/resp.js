burger = document.querySelector('.burger');
navbar= document.querySelector('.navbar');
navlist= document.querySelector('.navlist');
right_nav=document.querySelector('.right_nav');

burger.addEventListener('click',()=>{

    right_nav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
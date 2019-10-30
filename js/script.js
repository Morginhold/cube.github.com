const menu = document.querySelector('.menu-btn');

menu.addEventListener('click', (e) =>{
    e.target.closest('.menu-btn').classList.toggle('menu-btn--active');
    e.target.closest('.menu').classList.toggle('menu--active');
});

$('.slider-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1400:{
            items:5
        }
    }
})

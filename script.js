const menu = document.getElementById('header_menu');
menu.addEventListener('click', (event) => {
    menu.querySelectorAll('.header__link').forEach(el => el.classList.remove('header__active'));
    event.target.classList.add('header__active')
});


const slider = document.getElementById('slider');
slider.querySelectorAll('.slider__arrow').forEach(arrow => {
    arrow.addEventListener('click', function () {
        let slider2 = document.querySelector('.slider2__content');
        let slider1 = document.querySelector('.slider__content');
        slider.querySelector('.slider__wrapper').classList.toggle('slider2_bg');
        if (slider2.style.display === "none") {
            slider1.style.display = "none";
            slider2.style.display = "flex";
        } else {
            slider1.style.display = "flex";
            slider2.style.display = "none";
        }
    });
});




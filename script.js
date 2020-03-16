const MENU = document.getElementById('header_menu');


MENU.addEventListener('click', (event) => {
    console.log(MENU.querySelectorAll('.header__link'));
    MENU.querySelectorAll('.header__link').forEach(el => el.classList.remove('header__active'));
    event.target.classList.add('header__active')
})
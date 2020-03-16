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
        slider.classList.toggle('slider2_bg');
        if (slider2.style.display === "none") {
            slider1.style.display = "none";
            slider2.style.display = "flex";
        } else {
            slider1.style.display = "flex";
            slider2.style.display = "none";
        }
    });
});

const verticalPhone = document.getElementById('phone1');
verticalPhone.addEventListener('click', (event) => {
    document.getElementById('blackScreen1').classList.toggle('slider__blackScreen-vertical')
});

const horizontalPhone = document.getElementById('phone2');
horizontalPhone.addEventListener('click', (event) => {
    document.getElementById('blackScreen2').classList.toggle('slider__blackScreen-horizontal')
});

const portfolioMenu = document.getElementById('portfolio-menu');
portfolioMenu.addEventListener('click', (event) => {
    if (event.target.className !== 'portfolio__filters') {
        portfolioMenu.querySelectorAll('.portfolio__button').forEach(el => el.classList.remove('portfolio__button-active'));
        event.target.classList.add('portfolio__button-active')
        reorderPictures();
    }
});


const portfolio = document.querySelector(".portfolio__works");

function reorderPictures() {
    const firstPicture = portfolio.children[0];
    const firstPictureCopy = firstPicture.cloneNode();
    firstPicture.remove();
    portfolio.append(firstPictureCopy);
}

portfolio.addEventListener('click', (event => {
    if (event.target.className !== 'portfolio__works') {
        portfolio.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('portfolio__image-active'));
        event.target.classList.add('portfolio__image-active')
    }
}));


const form = document.querySelector("form");
const submitFormButton = document.querySelector(".form__button");
const modalBackdrop = document.querySelector(".modal-backdrop");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const textareaInput = document.querySelector("#description");

const modalSubjectElement = document.querySelector("#modal-subject");
const modalDescriptionElement = document.querySelector("#modal-description");
const modalCloseButton = document.querySelector("#modal-close-button");


submitFormButton.addEventListener("click", event => {
    event.preventDefault();

    if (!nameInput.value) {
        nameInput.classList.add("invalid");
    }

    if (!emailInput.value) {
        emailInput.classList.add("invalid");
    }

    if (nameInput.value && emailInput.value) {
        modalBackdrop.classList.remove("visually-hidden");
        modalSubjectElement.innerText = subjectInput.value
            ? `Subject: ${subjectInput.value}`
            : "Without subject";
        modalDescriptionElement.innerText = textareaInput.value
            ? `Description: ${textareaInput.value}`
            : "Without description";
    }
});

modalCloseButton.addEventListener("click", () => {
    modalBackdrop.classList.add("visually-hidden");
    form.reset();
});

nameInput.addEventListener("focus", function() {
    this.classList.remove("invalid");
});

emailInput.addEventListener("focus", function() {
    this.classList.remove("invalid");
});

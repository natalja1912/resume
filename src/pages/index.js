import './index.css';

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo');
    if (window.pageYOffset > 10) {
        header.style.boxShadow = '0 5px 10px rgba(37, 37, 37, 0.1)';
    }

    if (window.pageYOffset <= 10) {
        header.style.boxShadow = 'none';
    }

    if (window.pageYOffset > 200) {
        logo.classList.add('header__logo_type_white');
    }

    if (window.pageYOffset <= 200) {
        logo.classList.remove('header__logo_type_white');
    }
})

const mixitup = require('mixitup');
const container = document.querySelector('.container');
mixitup(container, {
    animation: {
        duration: 400,
        effectsIn: 'fade translateY(-100%)',
        effectsOut: 'fade translateY(-100%)'
    }
});


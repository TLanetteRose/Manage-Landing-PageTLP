
/* Carousel */
const testCarousel = new Glide('.testimonial', {
    type: 'carousel',
    startAt: 0,
    gap: 40,
    perView: 2,
    breakpoints: {
        1024: {
            perView: 3
        },
        768: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
})
testCarousel.mount();

const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.querySelector('.error');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();

    if (emailValue === '' || !isEmail(emailValue)) {
        error.style.visibility = 'visible';
        email.classList.remove('error-input');
    } else {
        error.style.visibility = "hidden";
        email.classList.remove('error-input');
    }
}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+ [a-zA-Z]{2,}))$/.test(email));
}


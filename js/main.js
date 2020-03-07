
/* Carousel */
const testCarousel = new Glide('.testimonial', {
    type: 'carousel',
    startAt: 0,
    gap: 20,
    perView: 4,
    breakpoints: {
        1024: {
            perView: 3
        },
        800: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
})
testCarousel.mount();
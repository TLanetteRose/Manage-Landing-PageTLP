
/* Carousel */
new Glide ('.testimonialCarousel', {
   type: 'carousel',
   startAt: 0,
   perView: 4,
   focusAt: 'center',
   gap: 50,
   
   breakpoints: {
       770: {
           perView: 1
       }
   }
})

/*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */

/* Carousel */

$('#carouselIndicators').on('slide.bs.carousel', function (e) {
    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 4;
    let totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            //append slides to the end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');  
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
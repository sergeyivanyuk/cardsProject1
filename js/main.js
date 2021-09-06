$(document).ready(function(){

    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    $('.gallery-slider').slick({
        swipeToSlide: true,
        touchMove: true,
        swipe:true,
        touchThreshold: 100,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

	
});
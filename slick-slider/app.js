$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

    });
});

$(document).ready(function(){
    $('.ingredient-slider').slick({
        slidesToShow: 2,
        infinite: false,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

    });
});

$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 3,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

    });
});

$(document).ready(function(){
    $('.paper-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrow-paper'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrow-paper'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,

    });
});
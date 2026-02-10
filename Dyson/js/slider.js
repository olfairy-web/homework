export const productSlider = () => {
    new Swiper(".product__slider", 
    {
     slidesPerView:1 ,

    centeredSlides: true,
        mousewheel: {
        forceToAxis: true,
    },
    navigation: {
        prevEl: ".product__slider-button--prev",
            nextEl: ".product__slider-button--next",
    },
});
};


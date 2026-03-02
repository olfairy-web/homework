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

        on: {
            slideChange: function () {
                updateSlideCounter(this);
            },
            init: function () {
                updateSlideCounter(this);
            }
        }
    });

    function updateSlideCounter(swiper) {
        const counterElement = document.querySelector(".special__products-slider-text");
        if (counterElement) {
            const current = swiper.realIndex + 1;
            const total = swiper.slides.length;
            counterElement.textContent = `${current} из ${total}`;
        }
    }
};

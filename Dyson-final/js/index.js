import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { productSlider } from "./slider.js";
import { initReviews } from "./reviews.js";
import { specialOffers } from "./special-offers.js";
import { specialProducts } from "./special-products-add-to-cart.js";
import { sortSelect } from "./sort-select.js";
import { news } from "./news.js";



const mainElement = document.querySelector('.main');
if (mainElement) {
    try {
        const headerFixed = new HeaderFixed({
            HEADER: "header",
            HEADER_FIXED: "header--fixed",
        });

        new BurgerMenu(
            {
                BURGER: "burger",
                BURGER_OPEN: "burger--open",

                BURGER_BUTTON_ACTIVE: "header__button--open",
                HEADER_MENU: "header__menu",
                HEADER_MENU_OPEN: "header__menu--open",
                LABEL: {
                    OPEN: "Открыть меню",
                    CLOSE: "Закрыть меню",
                },
                PAGE_BODY: "page__body",
                PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
                MENU_LINK: "menu__link",
                BREAKPOINT: 992,
                MAIN: "main",
            },
            headerFixed
        );

        productSlider();
        initReviews();
        specialOffers();
        specialProducts();
        sortSelect();
        news();

    } catch (error) {
        console.error(error);
    }
} else {
    console.warn("error");
}




export function specialOffers() {
    const items = document.querySelectorAll(".item");
    const showMoreButton = document.getElementById("showMore");
    

    // кол-во элементов, отображаемых изн
    const initialVisibleCount = 4;

    // скрываем все элементы кроме первых
    for (let i = initialVisibleCount; i < items.length; i++) {
        items[i].style.display = "none";
    }

    let visibleCount = initialVisibleCount;

    showMoreButton.addEventListener("click", function () {
        // показываем следующие 4 эл
        for (let i = visibleCount; i < Math.min(visibleCount + 12, items.length); i++) {
            items[i].style.display = "inline-flex";
        }

        visibleCount += 12;

        // кошда все элементы показаны, скрываем кнопку
        if (visibleCount >= items.length) {
            showMoreButton.style.display = "none";
        }

        // сбновление счетчика
        countElement.textContent = items.length;
    });
};





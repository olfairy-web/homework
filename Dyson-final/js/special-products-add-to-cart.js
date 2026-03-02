export function specialProducts() {
document.addEventListener('click', function(e) {
    // увеличение
    if (e.target.closest('.increase-btn')) {
        const input = e.target.closest('.qty-btn-one').querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value < 10) {
            input.value = value + 1;
        }
    }

//    уменьшение
    if (e.target.closest('.decrease-btn')) {
        const input = e.target.closest('.qty-btn-one').querySelector('.qty-input');
        let value = parseInt(input.value);
        if (value > 1) {
            input.value = value - 1;
        }
    }
});

//  в корзину
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const card = e.target.closest('.special__products-card');
        const input = card.querySelector('.qty-input');
        const qty = input.value;
        alert(`Товар добавлен в корзину: ${qty} шт.`);
    }
});
};




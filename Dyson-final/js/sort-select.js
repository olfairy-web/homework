
export function sortSelect() {
    const sortSelect = document.getElementById('customSortSelect');
    const selectedOption = sortSelect.querySelector('.sort-select-wrapper');
    const optionsList = sortSelect.querySelector('.sort-list');
    const options = optionsList.querySelectorAll('.sort-item');
    const arrowIcon = selectedOption.querySelector('.sort-select-arrow-ikon');

    // переключение списка
    selectedOption.addEventListener('click', () => {
        optionsList.classList.toggle('show');
    });

    // выбор опции и сортировка
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Ообновление текста в селекте без галочки
            const textContent = option.cloneNode(true).childNodes[0].nodeValue.trim();
            selectedOption.firstChild.textContent = textContent;

            optionsList.classList.remove('show');

            // снимаем выделение со всех
            options.forEach(opt => opt.classList.remove('selected'));
            // выделяем текущий
            option.classList.add('selected');

            const sortBy = option.dataset.value;
            sortProducts(sortBy);
        });
    });

    // закрытие списка при клике вне его
    document.addEventListener('click', (e) => {
        if (!sortSelect.contains(e.target)) {
            optionsList.classList.remove('show');
        }
    });

    //  сортировка карточек
    function sortProducts(sortBy) {
        const productsGrid = document.getElementById('productsGrid');
        const cards = Array.from(productsGrid.querySelectorAll('.special__products-card'));

        cards.sort((a, b) => {
            switch (sortBy) {
                case 'popular':
                    return parseInt(b.dataset.popularity) - parseInt(a.dataset.popularity);
                case 'cheap':
                    return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
                case 'expensive':
                    return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
                case 'new':
                    return new Date(b.dataset.date) - new Date(a.dataset.date);
                case 'rating':
                    return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
                default:
                    return 0;
            }
        });

        cards.forEach(card => productsGrid.appendChild(card));
    }
};



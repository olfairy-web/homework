
export function initReviews() {
    const toggleButtons = document.querySelectorAll('.toggle-images-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() { 
            const reviewWrapper = this.closest('.reviews__description-wrapper');
            if (reviewWrapper) {
                const imagesContainer = reviewWrapper.querySelector('.more-images-container');

                if (imagesContainer) {
                    
                    if (imagesContainer.style.display === 'flex') {
                        imagesContainer.style.display = 'none';
                        this.textContent = 'Смотреть все фото';
                    } else {
                        imagesContainer.style.display = 'flex'; 
                        this.textContent = 'Скрыть фото';
                    }
                }
            }
        });
    });

    const loadMoreBtn = document.getElementById('loadMoreReviewsBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const hiddenReviews = document.querySelectorAll('.reviews__wrapper.visually-hidden-reviews');
            for (let i = 0; i < 2 && i < hiddenReviews.length; i++) {
                hiddenReviews[i].classList.remove('visually-hidden-reviews');
            }
            if (hiddenReviews.length <= 2) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
};


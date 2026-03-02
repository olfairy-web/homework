export function news() {
    const loadMoreBtn = document.getElementById('loadMoreNewsBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const hiddenNews = document.querySelectorAll('.news__wrapper.visually-hidden-news');
            for (let i = 0; i < 3 && i < hiddenNews.length; i++) {
                hiddenNews[i].classList.remove('visually-hidden-news');
            }
            if (hiddenNews.length <= 3) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
};


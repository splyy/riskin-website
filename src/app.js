const items = document.querySelectorAll('.social-list > li');

Array.from(items, (item) => {
    item.addEventListener('click', () => {
        window.location.assign(item.dataset.href)
    });
});
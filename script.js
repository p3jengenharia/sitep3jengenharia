let currentIndex = 0;

function moveCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; // Largura do item + margem

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1; // Volta ao último item
    } else if (currentIndex >= items.length) {
        currentIndex = 0; // Volta ao primeiro item
    }

    container.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

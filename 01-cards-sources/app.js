const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClases();
        slide.classList.add('active');
    });
};

function clearActiveClases() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
};


const gaps = 3;

const carousel_5 = document.getElementById("carousel_5"),
    content_5 = document.getElementById("content_5"),
    next_5 = document.getElementById("next_5"),
    prev_5 = document.getElementById("prev_5");

next_5.addEventListener("click", e => {
    carousel_5.scrollBy(width + gaps, 0);
    if (carousel_5.scrollWidth !== 0) {
        prev_5.style.display = "flex";
    }
    if (content_5.scrollWidth - width - gaps <= carousel_5.scrollLeft + width) {
        next_5.style.display = "none";
    }
});
prev_5.addEventListener("click", e => {
    carousel_5.scrollBy(-(width + gaps), 0);
    if (carousel.scrollLeft - width - gaps <= 0) {
        prev_5.style.display = "none";
    }
    if (!content.scrollWidth - width - gaps <= carousel_5.scrollLeft + width) {
        next_5.style.display = "flex";
    }
});

let width_5 = carousel_5.offsetWidth;
window.addEventListener("resize", e => (width = carousel_5.offsetWidth));

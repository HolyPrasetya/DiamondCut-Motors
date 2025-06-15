document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 1;

    function showSlide(slideIndex) {
        document.getElementById(`slide-${slideIndex}`).checked = true;
    }

    window.prevSlide = function() {
        currentSlide = (currentSlide - 1 < 1) ? 4 : currentSlide - 1;
        showSlide(currentSlide);
    };

    window.nextSlide = function() {
        currentSlide = (currentSlide + 1 > 4) ? 1 : currentSlide + 1;
        showSlide(currentSlide);
    };

    showSlide(currentSlide);
});






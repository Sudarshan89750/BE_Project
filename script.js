document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    setInterval(showNextImage, 5000); // Change image every 5 seconds

    // Initial display
    images[currentIndex].classList.add('visible');
});

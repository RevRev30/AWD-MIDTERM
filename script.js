document.addEventListener('DOMContentLoaded', function () {
    const watches = document.querySelectorAll('.watch');

    watches.forEach(watch => {
        const mainImage = watch.querySelector('.main-image');
        const alternateImage = watch.querySelector('.alternate-image');

        // Set initial state
        alternateImage.style.display = 'none';

        watch.addEventListener('mouseenter', function () {
            mainImage.style.display = 'none';
            alternateImage.style.display = 'block';
        });

        watch.addEventListener('mouseleave', function () {
            mainImage.style.display = 'block';
            alternateImage.style.display = 'none';
        });
    });
});

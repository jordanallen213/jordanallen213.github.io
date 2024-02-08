document.addEventListener('DOMContentLoaded', function () {
    const photoslideContainer = document.getElementById('photoslide');
    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    carousel.id = 'carousel';

    // Set the height of the carousel container
    const fixedHeight = 500; // Set your fixed height here
    const fixedWidth = 200 + 666.66;
    photoslideContainer.style.height = fixedHeight + 'px';
    photoslideContainer.style.width = fixedWidth + 'px';

    // Get all image elements inside the photoslideContainer
    const imageElements = Array.from(photoslideContainer.getElementsByTagName('img'));

    // Get image paths from existing image elements
    const imagePaths = imageElements.map(imgElement => imgElement.src);

    // Set max-height for vertical images
    imageElements.forEach(imgElement => {
        imgElement.style.maxHeight = fixedHeight + 'px';
    });

    // Add navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>'; // Font Awesome left arrow icon
    prevButton.addEventListener('click', function () {
        changeSlide(-1);
    });

    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>'; // Font Awesome right arrow icon
    nextButton.addEventListener('click', function () {
        changeSlide(1);
    });

    // Add full-screen button
    const fullscreenButton = document.createElement('button');
    fullscreenButton.className = 'fullscreen';
    fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>'; // Font Awesome expand icon
    fullscreenButton.addEventListener('click', function () {
        toggleFullscreen();
    });

    // Append elements to the photoslideContainer
    photoslideContainer.innerHTML = ''; // Clear the existing content
    photoslideContainer.appendChild(carousel);
    photoslideContainer.appendChild(prevButton);
    photoslideContainer.appendChild(nextButton);
    //photoslideContainer.appendChild(fullscreenButton);

    // Initialize currentIndex
    let currentIndex = 0;

    // Function to add an image to the carousel
    function addImageToCarousel(imgElement) {
        const imgClone = imgElement.cloneNode(true);
        carousel.innerHTML = ''; // Clear existing content
        carousel.appendChild(imgClone);
    }

    // Function to change slides
    function changeSlide(direction) {
        const totalSlides = imageElements.length;

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        addImageToCarousel(imageElements[currentIndex]);
    }

    // Initially, add the first image to the carousel
    addImageToCarousel(imageElements[currentIndex]);
});
document.addEventListener('DOMContentLoaded', function () {
    const photoslideContainer = document.getElementById('photoslide');
    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    carousel.id = 'carousel';

    // Set the height of the carousel container
    const fixedHeight = 500; // Set your fixed height here
    const fixedWidth = 666.66;
    photoslideContainer.style.height = fixedHeight + 'px';
    photoslideContainer.style.width = fixedWidth + 'px';

    // Get all image elements inside the photoslideContainer
    const imageElements = Array.from(photoslideContainer.getElementsByTagName('img'));

    // Set max-height and width for vertical images
    imageElements.forEach(imgElement => {
       // if (imgElement.clientHeight > imgElement.clientWidth) {
            imgElement.style.maxHeight = fixedHeight + 'px';
            //imgElement.style.width = 'auto';
      //  }
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
    photoslideContainer.appendChild(fullscreenButton);

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


// Function to toggle fullscreen mode
function toggleFullscreen() {
    const element = photoslideContainer;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    // Manually trigger the resize event after a short delay
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
    }, 100); // Adjust the delay as needed
}

// Function to handle changes in fullscreen mode
function handleFullscreenChange() {
    setTimeout(updateImageSize, 100); // Adjust the delay as needed
}

// Event listener for window resize
window.addEventListener('resize', handleWindowResize);

// Event listener for fullscreen change
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

// Function to handle window resize
function handleWindowResize() {
    updateImageSize();
}

// Function to handle window resize
function updateImageSize() {
    if (document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement) {
        adjustImagesForFullscreen();
    } else {
        resetImagesAfterFullscreen();
    }
}



// Function to adjust images when in fullscreen mode
function adjustImagesForFullscreen() {
    imageElements.forEach(imgElement => {
        imgElement.style.maxHeight = '100%';
        imgElement.style.width = 'auto';
    });
}

// Function to reset images after exiting fullscreen mode
function resetImagesAfterFullscreen() {
    imageElements.forEach(imgElement => {
        if (imgElement.clientHeight > imgElement.clientWidth) {
            imgElement.style.maxHeight = fixedHeight + 'px';
            //imgElement.style.width = 'auto';
        }
    });
}

    // Initially, add the first image to the carousel
    addImageToCarousel(imageElements[currentIndex]);
});

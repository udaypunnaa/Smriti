// JavaScript Code
const images = [
    "https://via.placeholder.com/600/92c952",
    "https://via.placeholder.com/600/771796",
    "https://via.placeholder.com/600/24f355",
    "https://via.placeholder.com/600/d32776",
];

let currentIndex = 0;

const mainPhoto = document.querySelector(".photo-main");
const leftPreview = document.querySelector(".photo-preview.left");
const rightPreview = document.querySelector(".photo-preview.right");

// Initialize the photo viewer
function updateGallery() {
    if (images.length === 0) {
        mainPhoto.style.backgroundImage = "";
        leftPreview.style.backgroundImage = "";
        rightPreview.style.backgroundImage = "";
        alert("No images left!");
        return;
    }

    mainPhoto.style.backgroundImage = `url(${images[currentIndex]})`;
    leftPreview.style.backgroundImage =
        currentIndex > 0 ? `url(${images[currentIndex - 1]})` : "";
    rightPreview.style.backgroundImage =
        currentIndex < images.length - 1 ? `url(${images[currentIndex + 1]})` : "";
}

// Handle swipe gestures
let startY, startX, endY, endX;

document.getElementById("gallery-container").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.getElementById("gallery-container").addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    const diffX = endX - startX;
    const diffY = endY - startY;

    // Swipe left or right
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0 && currentIndex < images.length - 1) {
            // Swipe left
            currentIndex++;
        } else if (diffX > 0 && currentIndex > 0) {
            // Swipe right
            currentIndex--;
        }
    }

    // Swipe up or down
    else {
        if (diffY < 0) {
            // Swipe up to delete
            images.splice(currentIndex, 1);
            if (currentIndex >= images.length) {
                currentIndex = images.length - 1;
            }
            alert("Image deleted!");
        } else if (diffY > 0) {
            // Swipe down to save
            alert("Image saved!");
        }
    }

    updateGallery();
});

// Initial setup
updateGallery();

// script.js
/*const galleryImages = document.querySelectorAll('.gallery-img');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImg = document.querySelector('.fullscreen-img');
const closeBtn = document.querySelector('.close-btn');

galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        fullscreenImg.src = img.src;
        fullscreenView.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    fullscreenView.style.display = 'none';
});*/

const galleryImages = document.querySelectorAll('.gallery-img');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImg = document.querySelector('.fullscreen-img');
const closeBtn = document.querySelector('.close-btn');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const brightnessSlider = document.getElementById('brightness-slider');
const contrastSlider = document.getElementById('contrast-slider');
const editControls = document.querySelector('.edit-controls');
const editBtn = document.getElementById('edit-btn');
const shareBtn = document.getElementById('share-btn');
const shareControls = document.querySelector('.share-controls');
const copyLinkBtn = document.getElementById('copy-link-btn');

let currentIndex = 0;

// Open fullscreen view on image click
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        fullscreenImg.src = img.src;
        fullscreenView.style.display = 'flex';
        resetSliders();
        hideEditControls();
        hideShareControls();
    });
});

// Close fullscreen view
closeBtn.addEventListener('click', () => {
    fullscreenView.style.display = 'none';
    resetSliders();
    hideEditControls();
    hideShareControls();
});

// Show or hide edit sliders
editBtn.addEventListener('click', () => {
    editControls.style.display =
        editControls.style.display === 'flex' ? 'none' : 'flex';
    hideShareControls(); // Hide share controls if visible
});

// Show or hide share options
shareBtn.addEventListener('click', () => {
    shareControls.style.display =
        shareControls.style.display === 'flex' ? 'none' : 'flex';
    hideEditControls(); // Hide edit controls if visible
});

// Copy image link to clipboard
copyLinkBtn.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = galleryImages[currentIndex].src;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Image link copied to clipboard!');
});

// Update the fullscreen image
function updateFullscreenImage() {
    fullscreenImg.src = galleryImages[currentIndex].src;
    resetSliders();
    hideEditControls();
    hideShareControls();
}

// Navigate to the previous image
leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateFullscreenImage();
    }
});

// Navigate to the next image
rightArrow.addEventListener('click', () => {
    if (currentIndex < galleryImages.length - 1) {
        currentIndex++;
        updateFullscreenImage();
    }
});

// Adjust brightness and contrast
function updateImageStyles() {
    const brightness = brightnessSlider.value;
    const contrast = contrastSlider.value;
    fullscreenImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
}

// Reset sliders to default
function resetSliders() {
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    updateImageStyles();
}

// Hide edit controls
function hideEditControls() {
    editControls.style.display = 'none';
}

// Hide share controls
function hideShareControls() {
    shareControls.style.display = 'none';
}

// Event listeners for sliders
brightnessSlider.addEventListener('input', updateImageStyles);
contrastSlider.addEventListener('input', updateImageStyles);


// Songs for each mood
const moodSongs = {
    happy: {
        title: "Happy Song",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    sad: {
        title: "Sad Song",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    calm: {
        title: "Calm Song",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
};

// Memorize a photo
function memorizePhoto(button) {
    const photoContainer = button.closest(".photo-container");
    const photo = photoContainer.querySelector(".photo");
    const mood = photo.getAttribute("data-mood");
    const song = moodSongs[mood];

    if (song) {
        const songTitle = document.getElementById("songTitle");
        const audioPlayer = document.getElementById("audioPlayer");
        const songPlayer = document.getElementById("songPlayer");

        songTitle.textContent = `Playing: ${song.title}`;
        audioPlayer.src = song.src;
        audioPlayer.play();

        songPlayer.classList.remove("hidden");
    } else {
        alert("No song available for this mood!");
    }
}

// Placeholder for other actions
function editPhoto() {
    alert("Edit functionality goes here!");
}

function sharePhoto() {
    alert("Share functionality goes here!");
}

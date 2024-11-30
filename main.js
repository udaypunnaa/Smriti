// script.js
const galleryImages = document.querySelectorAll('.gallery-img');
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
});

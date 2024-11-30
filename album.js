// script.js

// Sample photos for each album
const albumPhotos = {
    Camera: [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
    Screenshots: [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
    "WhatsApp Images": [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
};

// Open the selected album
function openAlbum(albumName) {
    const albumDetail = document.getElementById("albumDetail");
    const photoGrid = document.getElementById("photoGrid");
    const albumTitle = document.getElementById("albumTitle");

    albumTitle.textContent = albumName;
    photoGrid.innerHTML = "";

    albumPhotos[albumName].forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo;
        img.alt = `${albumName} Photo`;
        img.className = "photo";
        photoGrid.appendChild(img);
    });

    albumDetail.classList.add("active");
}

// Close the album view
function closeAlbum() {
    const albumDetail = document.getElementById("albumDetail");
    albumDetail.classList.remove("active");
}

// Navigation functionality (placeholder)
function navigateTo(page) {
    alert(`Navigating to ${page}`);
}

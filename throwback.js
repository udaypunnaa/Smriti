// throwback.js

// Sample data: Photos organized by month and year
const throwbackData = {
    "March 2024": [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
    "February 2024": [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
    "January 2024": [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
    ],
};

// Populate the Throwback Pics content
function populateThrowbackPics() {
    const throwbackContent = document.getElementById("throwbackContent");

    for (const [monthYear, photos] of Object.entries(throwbackData)) {
        const section = document.createElement("div");
        section.className = "throwback-section";

        const title = document.createElement("h2");
        title.textContent = monthYear;
        section.appendChild(title);

        const photoGrid = document.createElement("div");
        photoGrid.className = "photo-grid";

        photos.forEach((photo) => {
            const img = document.createElement("img");
            img.src = photo;
            img.alt = `${monthYear} Photo`;
            img.className = "photo";
            img.onclick = () => openPhotoFullscreen(photo);
            photoGrid.appendChild(img);
        });

        section.appendChild(photoGrid);
        throwbackContent.appendChild(section);
    }
}

// Open photo in fullscreen
function openPhotoFullscreen(photoUrl) {
    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.style.position = "fixed";
    fullscreenContainer.style.top = "0";
    fullscreenContainer.style.left = "0";
    fullscreenContainer.style.width = "100%";
    fullscreenContainer.style.height = "100%";
    fullscreenContainer.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    fullscreenContainer.style.display = "flex";
    fullscreenContainer.style.justifyContent = "center";
    fullscreenContainer.style.alignItems = "center";
    fullscreenContainer.style.zIndex = "1000";

    const img = document.createElement("img");
    img.src = photoUrl;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "80%";
    img.style.borderRadius = "10px";

    const closeButton = document.createElement("button");
    closeButton.textContent = "×";
    closeButton.style.position = "absolute";
    closeButton.style.top = "1rem";
    closeButton.style.right = "1rem";
    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.color = "#fff";
    closeButton.style.fontSize = "2rem";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = () => {
        document.body.removeChild(fullscreenContainer);
    };

    fullscreenContainer.appendChild(img);
    fullscreenContainer.appendChild(closeButton);
    document.body.appendChild(fullscreenContainer);
}

// Navigation (Placeholder)
function navigateTo(page) {
    alert(`Navigating to ${page}`);
}

// Initialize the throwback pics on page load
document.addEventListener("DOMContentLoaded", populateThrowbackPics);

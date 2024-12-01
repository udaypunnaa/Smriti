// memorize.js

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
        title: "Birthday",
        src: "birthday.mp3",
    },
};

// Start Memorize
function startMemorize() {
    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo) => {
        photo.addEventListener("click", () => analyzePhoto(photo));
    });

    alert("Click on a photo to analyze and play a matching song!");
}

// Analyze photo and play the corresponding song
function analyzePhoto(photo) {
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

// Navigation (Placeholder)
function navigateTo(page) {
    alert(`Navigating to ${page}`);
}

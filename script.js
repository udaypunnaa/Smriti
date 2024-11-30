// You can add any loading animations or behaviors here if necessary
// Example: Fade-in effect when the page loads

window.addEventListener('load', () => {
    const loadingText = document.querySelector('.loading-text');
    loadingText.style.opacity = '0';
    setTimeout(() => {
        loadingText.style.transition = 'opacity 1s ease-in-out';
        loadingText.style.opacity = '1';
    }, 500);
});
// Wait for the page to load
window.addEventListener('load', () => {
    // Add fade-in or animation logic here if needed

    // After 2-3 seconds, redirect to frame1.html
    setTimeout(() => {
        window.location.href = 'frame1.html'; // Replace with your desired page
    }, 3000); // 3000 milliseconds = 3 seconds
});

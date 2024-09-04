document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const catImage = document.getElementById('cat');
    const bgMusic = document.getElementById('bg-music');
    const container = document.querySelector('.container');

    // Move "No" button when hovered
    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calculate random positions within the container
        const maxX = containerRect.width - buttonWidth;
        const maxY = containerRect.height - buttonHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Set new position for the "No" button
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Play music and animate image when "Yes" is clicked
    yesButton.addEventListener('click', () => {
        catImage.src = "yay-cat.gif"; 
        catImage.classList.add('dance');
        document.body.style.backgroundColor = '#ff99cc';
        bgMusic.play(); // Play the background music
    });

    // Optional: Add a transition effect to the image
    catImage.style.transition = 'all 0.1s ease-in-out';
});

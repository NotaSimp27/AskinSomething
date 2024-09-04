document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const catImage = document.getElementById('cat');
    const bgMusic = document.getElementById('bg-music');
    const container = document.querySelector('.container');


    noButton.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;


        const maxX = containerRect.width - buttonWidth;
        const maxY = containerRect.height - buttonHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;


        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        catImage.src = "yay-cat.gif"; 
        catImage.classList.add('dance');
        document.body.style.backgroundColor = '#ff99cc';
        bgMusic.play();
    });


    catImage.style.transition = 'all 0.1s ease-in-out';
});

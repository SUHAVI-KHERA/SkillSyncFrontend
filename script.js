// JavaScript to handle navigation buttons
function scrollLeft() {
    document.querySelector('.profile-container').scrollBy({ left: -250, behavior: 'smooth' });
}

function scrollRight() {
    document.querySelector('.profile-container').scrollBy({ left: 250, behavior: 'smooth' });
}





// some extra work
// Initialize ScrollReveal
ScrollReveal().reveal('.text-slide', {
    delay: 500, // Delay before the animation starts (in ms)
    duration: 1000, // Duration of the animation (in ms)
    distance: '200px', // Distance the element will move
    origin: 'bottom', // Origin of the animation ('bottom' to move upwards)
    opacity: 0, // Start with opacity at 0
    easing: 'ease-in-out', // Easing function for a smooth effect
    reset: true // If true, animations reset when scrolling back up
});

ScrollReveal().reveal('.image-slide', {
    delay: 300,
    duration: 1500,
    distance: '100px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});
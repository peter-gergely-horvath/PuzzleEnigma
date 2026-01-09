// Game navigation handler
document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameName = card.getAttribute('data-game');
            // Navigate to the game's subdirectory
            window.location.href = `${gameName}/index.html`;
        });

        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Add stagger animation to cards
    gameCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + index * 0.05}s`;
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealBtn');
    const locationReveal = document.getElementById('locationReveal');

    revealBtn.addEventListener('click', () => {
        locationReveal.classList.remove('hidden');
        setTimeout(() => {
            locationReveal.classList.add('show');
        }, 10);
        
        revealBtn.textContent = 'See you there!';
        revealBtn.style.backgroundColor = '#ffd700';
    });
});

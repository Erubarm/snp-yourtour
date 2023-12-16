const header = document.querySelector('header');
const heightShowHeader = 450; // Момент, с которого начинается фиксация
const headerLogo = header.querySelector('img');


console.log(headerLogo)
window.addEventListener('scroll', () => {
    let scrollHight = window.scrollY;

    if (scrollHight >= heightShowHeader) {
        header.classList.add('header-fix');
        headerLogo.src = './assets/icons/YourTour-black.svg';
    } else {
        header.classList.remove('header-fix');
        headerLogo.src = './assets/icons/your-tour.svg';
    }
})
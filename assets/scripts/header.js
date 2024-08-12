const header = document.querySelector("header");
const heightShowHeader = 450; // Момент, с которого начинается фиксация
const headerLogo = header.querySelector("img");

const listButtonSortSection = document.querySelectorAll('.section-link');
let lastFocused = listButtonSortSection[0];
console.log(lastFocused);


for ( let i = 0; i < listButtonSortSection.length; i++ ) {
    
    listButtonSortSection[i].addEventListener('click', () => {
        console.log(lastFocused);
        // console.log(listButtonSortSection[i]);
        lastFocused.classList.remove('section-link__focus');
        this.classList.add('section-link__focus');
    })

    lastFocused = this;
}

window.addEventListener("scroll", () => {
  let scrollHight = window.scrollY;

  if (scrollHight >= heightShowHeader) {
    header.classList.add("header-fix");
    headerLogo.src = "./assets/icons/YourTour-black.svg";
  } else {
    header.classList.remove("header-fix");
    headerLogo.src = "./assets/icons/your-tour.svg";
  }
});

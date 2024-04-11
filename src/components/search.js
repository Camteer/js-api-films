const headerBar = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__bar-button');


menuButton.addEventListener('click', () => {
    headerBar.classList.toggle('opened-menu');
    menuButton.classList.toggle('is-open');
})

function closeBurger() {
  headerBar.classList.remove('opened-menu');
  menuButton.classList.remove('is-open');
}

export { closeBurger}
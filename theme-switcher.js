const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

themeSwitcher.addEventListener('click', ()=>{
  body.classList.toggle('theme--dark')
})
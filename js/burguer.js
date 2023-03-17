const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu');
  menuBtn.classList.toggle('open');
});

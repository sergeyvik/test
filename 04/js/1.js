const button = document.querySelector('.request');
const block = document.querySelector('.popup');
const close = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

button.addEventListener('click', function() {
	block.style.display = 'flex';
});

close.addEventListener('click', function() {
	block.style.display = 'none';
});

openMenu.addEventListener('click', function() {
	menu.style.left = '0';
});

closeMenu.addEventListener('click', function() {
	menu.style.left = '-50vw';
});

console.log(button);
console.log(block);

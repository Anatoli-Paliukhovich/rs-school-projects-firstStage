'use strict'

console.log('1. Validation of pages: +18\n2.The layout matches the design: +40\n3.CSS Requirements: +10\n4.Interactivity: +32\nTotal: 100 points');


//Burger menu

const burgerIcon = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.header__menu');
if (burgerIcon) {
	burgerIcon.addEventListener('click', function (e) {
		burgerIcon.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})
}

const menuLinks = document.querySelectorAll('.menu__item');
menuLinks.forEach(link => {
	link.addEventListener('click', onLinkClick)
})
function onLinkClick(e) {
	if (burgerIcon.classList.contains('_active')) {
		burgerIcon.classList.remove('_active');
		headerMenu.classList.remove('_active');
		document.body.classList.remove('_lock');
	}
}
'use strict'

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
//Slider Favourites
const sliderWrapper = document.querySelector('.favourite__slider-wrapper')
const prevBtn = document.querySelector('.favourite__arrow-left');
const nextBtn = document.querySelector('.favourite__arrow-right');
const slides = document.querySelectorAll('.favourite__slide');
const btns = document.querySelectorAll('.favourite__slider-btn');

let i = 0;
let paused = false;
let setTime;
function currentSlide(n) {
	for (let slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}
function currentBtn(n) {
	for (let btn of btns) {
		btn.classList.remove('active');
	}
	btns[n].classList.add('active');

}
function prevSlide() {
	if (i == 0) {
		i = slides.length - 1;
		currentSlide(i);
		currentBtn(i);
	} else {
		i--;
		currentSlide(i);
		currentBtn(i);
	}
}
function nextSlide() {
	if (i == slides.length - 1) {
		i = 0;
		currentSlide(i);
		currentBtn(i);
	} else {
		i++;
		currentSlide(i);
		currentBtn(i);
	}
}
btns.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		i = index;
		currentSlide(i);
		currentBtn(i);
	})
});
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let touchStartX = 0;
let touchEndX = 0;

sliderWrapper.addEventListener("touchstart", function (e) {
	touchStartX = e.touches[0].clientX;
});

sliderWrapper.addEventListener("touchend", function (e) {
	touchEndX = e.changedTouches[0].clientX;
	swipeSlider();
});

function swipeSlider() {
	const deltaX = touchEndX - touchStartX;
	if (deltaX > 50) {
		clearInterval(setTime);
		prevSlide();
		runSlider();
	} else if (deltaX < -50) {
		clearInterval(setTime);
		nextSlide();
		runSlider();
	}
}

sliderWrapper.addEventListener("mouseenter", function () {
	paused = true;
});

sliderWrapper.addEventListener("mouseleave", function () {
	paused = false;
});
function runSlider() {
	setTime = setInterval(function () {
		if (!paused) {
			nextSlide();
		}
	}, 7000);
}
runSlider();

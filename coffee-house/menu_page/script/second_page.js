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
//Menu Cards
const menuBtns = document.querySelectorAll('.menu-btn');
const cards = document.querySelectorAll('.card__row');

let i = 0;

function currentCard(n) {
	for (let card of cards) {
		card.classList.remove('active');
	}
	cards[n].classList.add('active');
}
function currentBtn(n) {
	for (let btn of menuBtns) {
		btn.classList.remove('active');
	}
	menuBtns[n].classList.add('active');
}

menuBtns.forEach(function (btn, index) {
	btn.addEventListener('click', function () {
		i = index;
		currentCard(i);
		currentBtn(i);
	})
});

//Формирование карточек продуктов
import json from '../json/products.json' assert {type: 'json'};
//Формирование карточек coffee
const coffeeCards = json.filter(item => {
	return item.category === 'coffee';
});
function addCoffeeProd() {
	const coffeeCard = document.querySelector('.card__coffee');
	coffeeCards.forEach(card => {
		const prodId = card.id;
		const prodUrl = card.url;
		const prodTitle = card.name;
		const prodDecription = card.description;
		const prodPrice = card.price;

		let template = `
			<div class="card__column" id="${prodId}">
				<div class="card__item">
					<div class="card__image">
						<img src="${prodUrl}" alt="${prodTitle}">
					</div>
						<div class="card__content">
							<div class="card__title">${prodTitle}</div>
							<div class="card__text">${prodDecription}
							</div>
							<div class="card__price">$${prodPrice}</div>
						</div>
				</div>
			</div>
		`
		coffeeCard.insertAdjacentHTML('beforeend', template);
	})
}
addCoffeeProd();

//Формирование карточек tea
const teaCards = json.filter(item => {
	return item.category === 'tea';
});
function addTeaProd() {
	const teaCard = document.querySelector('.card__tea');
	teaCards.forEach(card => {
		const prodId = card.id;
		const prodUrl = card.url;
		const prodTitle = card.name;
		const prodDecription = card.description;
		const prodPrice = card.price;

		let template = `
			<div class="card__column" id="${prodId}">
				<div class="card__item">
					<div class="card__image">
						<img src="${prodUrl}" alt="${prodTitle}">
					</div>
						<div class="card__content">
							<div class="card__title">${prodTitle}</div>
							<div class="card__text">${prodDecription}
							</div>
							<div class="card__price">$${prodPrice}</div>
						</div>
				</div>
			</div>
		`
		teaCard.insertAdjacentHTML('beforeend', template);
	})
}
addTeaProd();
//Формирование карточек tea
const dessertCards = json.filter(item => {
	return item.category === 'dessert';
});
function addDessertProd() {
	const dessertCard = document.querySelector('.card__dessert');
	dessertCards.forEach(card => {
		const prodId = card.id;
		const prodUrl = card.url;
		const prodTitle = card.name;
		const prodDecription = card.description;
		const prodPrice = card.price;

		let template = `
			<div class="card__column" id="${prodId}">
				<div class="card__item">
					<div class="card__image">
						<img src="${prodUrl}" alt="${prodTitle}">
					</div>
						<div class="card__content">
							<div class="card__title">${prodTitle}</div>
							<div class="card__text">${prodDecription}
							</div>
							<div class="card__price">$${prodPrice}</div>
						</div>
				</div>
			</div>
		`
		dessertCard.insertAdjacentHTML('beforeend', template);
	})
}
addDessertProd();

//Формирование popup в меню
const cardLinks = document.querySelectorAll('.card__item');

cardLinks.forEach(function (card, index) {
	card.dataset.index = index;
	card.addEventListener('click', function (e) {
		const card = json.find(card => card.id === index + 1);
		const cardName = card.name;
		const prodUrl = card.url;
		const prodDecription = card.description;
		const prodSizeS = card.sizes.s.size;
		const prodSizeM = card.sizes.m.size;
		const prodSizeL = card.sizes.l.size;
		const prodAdd1 = card.additives[0].name;
		const prodAdd2 = card.additives[1].name;
		const prodAdd3 = card.additives[2].name;
		let prodPrice = card.price;
		const prodSizeSCost = card.sizes.s['add-price'];
		const prodSizeMCost = card.sizes.m['add-price'];
		const prodSizeLCost = card.sizes.l['add-price'];

		popup.innerHTML = `
		<div class="popup__coffee-body popup__body">
		<div class="popup__coffee-content popup__content">
			<div class="popup__coffee-content-image popup__content-image">
				<img src="${prodUrl}" alt="${cardName}">
			</div>
			<div class="popup__coffee-content-body popup__content-body">
				<div class="content__body-title">${cardName}</div>
				<div class="content__body-description">${prodDecription}</div>
				<div class="content__body-size">
					<div class="size__title">Size</div>
					<div class="size__buttons">
						<div class="size__button-s size__btn active">
							<div class="s__icon size__btn-icon">S</div>
							<div class="s__amount size__btn-amount">${prodSizeS}</div>
						</div>
						<div class="size__button-m size__btn">
							<div class="m__icon size__btn-icon">M</div>
							<div class="m__amount size__btn-amount">${prodSizeM}</div>
						</div>
						<div class="size__button-l size__btn">
							<div class="l__icon size__btn-icon">L</div>
							<div class="l__amount size__btn-amount">${prodSizeL}</div>
						</div>
					</div>
				</div>
				<div class="content__body-additives">
					<div class="additive__title">Additives</div>
					<div class="additive__buttons">
						<div class="additive__button-1 additive__btn">
							<div class="sug__icon additive__btn-icon">1</div>
							<div class="sug__addit additive__btn-addit">
								${prodAdd1}</div>
						</div>
						<div class="additive__button-2 additive__btn">
							<div class="cinn__icon additive__btn-icon">2</div>
							<div class="cinn__addit additive__btn-addit">
							${prodAdd2}</div>
						</div>
						<div class="additive__button-3 additive__btn">
							<div class="syr__icon additive__btn-icon">3</div>
							<div class="syr__addit additive__btn-addit">
							${prodAdd3}</div>
						</div>
					</div>
				</div>
				<div class="content__body-total">
					<div class="body__total-text">Total:</div>
					<div class="body__total-prise">$${prodPrice}</div>
				</div>
				<div class="content__body-line"></div>
				<div class="content__body-info">
					<div class="body__info-icon">
						<img src="img/main/popup/info-empty.svg" alt="info">
					</div>
					<div class="body__info-text">The cost is not final. Download our mobile app to
						see the final price and place your order. Earn loyalty points and enjoy your
						favorite coffee with up to 20% discount.</div>
				</div>
				<div class="content__body-btn" id="content__body-btn">Close</div>
			</div>
		</div>
	</div>
		`
		popupCloseByClick();
		chooseSize();
		chooseAdditives();

		const totalPrice = document.querySelector('.body__total-prise');
		const sBtn = document.querySelector('.size__button-s');
		const mBtn = document.querySelector('.size__button-m');
		const lBtn = document.querySelector('.size__button-l');
		let sSize;
		let mSize;
		let lSize;
		const popupBtnsAdd = document.querySelectorAll('.additive__btn');
		sBtn.addEventListener('click', function () {
			totalPrice.innerHTML = `$` + ((+prodPrice + +prodSizeSCost).toFixed(2));
			sSize = totalPrice.innerHTML;
			console.log(sSize);
			popupBtnsAdd.forEach(btn => {
				if(btn.classList.contains('active')) {
					btn.classList.remove('active');
				}
			})
		})
		mBtn.addEventListener('click', function () {
			totalPrice.innerHTML = `$` + ((+prodPrice + +prodSizeMCost).toFixed(2));
			mSize = totalPrice.innerHTML;
			console.log(mSize);
			popupBtnsAdd.forEach(btn => {
				if(btn.classList.contains('active')) {
					btn.classList.remove('active');
				}
			})

		})
		lBtn.addEventListener('click', function () {
			totalPrice.innerHTML = `$` + ((+prodPrice + +prodSizeLCost).toFixed(2));
			lSize = totalPrice.innerHTML;
			console.log(lSize);
			popupBtnsAdd.forEach(btn => {
				if(btn.classList.contains('active')) {
					btn.classList.remove('active');
				}
			})

		})
		const addBtn1 = document.querySelector('.additive__button-1');
		const addBtn2 = document.querySelector('.additive__button-2');
		const addBtn3 = document.querySelector('.additive__button-3');

		function chooseAdditives() {
			const popupBtnsAdd = document.querySelectorAll('.additive__btn');
			if (popupBtnsAdd) {
				popupBtnsAdd.forEach(btn => {
					btn.addEventListener('click', function (e) {
						btn.classList.toggle('active');
						if (btn.classList.contains('active')) {
							const addit = +totalPrice.innerHTML.slice(1);
							totalPrice.innerHTML = `$` + (addit + 0.50).toFixed(2);
						}
						else if (!btn.classList.contains('active')) {
							const addit = +totalPrice.innerHTML.slice(1);
							totalPrice.innerHTML = `$` + (addit - 0.50).toFixed(2);
						}

					})
				})
			}
		}



	})
})

//Popup window
const body = document.querySelector('body');
const popup = document.querySelector('.popup');
cardLinks.forEach(function (link, index) {
	link.dataset.index = index;
	link.addEventListener('click', function (e) {
		popupOpen(index + 1);
	})
})
function popupCloseByClick() {
	const popupCloseBtns = document.querySelectorAll('.content__body-btn');
	if (popupCloseBtns.length > 0) {
		for (let i = 0; i < popupCloseBtns.length; i++) {
			const popupCloseBtn = popupCloseBtns[i];
			popupCloseBtn.addEventListener('click', function (e) {
				popupClose(popupCloseBtn.closest('.popup'));
			});
		}
	}
}
function popupClose(popupCloseBtn) {
	document.body.classList.remove('_lock');
	popupCloseBtn.classList.remove('active');
	bodyUnLock();
}

function popupOpen(e) {
	popup.classList.add('active');
	bodyLock();
	popup.addEventListener('click', function (e) {
		if (!e.target.closest('.popup__body')) {
			popupClose(e.target.closest('.popup'));
		}
	})
}
function bodyLock() {
	body.classList.add('_lock');
}

function bodyUnLock() {
	body.classList.remove('_lock');
}


//Menu Cards Choose Size
function chooseSize() {
	const popupBtnsSize = document.querySelectorAll('.size__btn');
	let i = 0;
	function currentButton(n) {
		for (let btn of popupBtnsSize) {
			btn.classList.remove('active');
		}
		popupBtnsSize[n].classList.add('active');
	}

	popupBtnsSize.forEach(function (btn, index) {
		btn.addEventListener('click', function () {
			i = index;
			currentButton(i);
		})
	});
}
//Menu Cards Choose Additives

function chooseAdditives() {
	const popupBtnsAdd = document.querySelectorAll('.additive__btn');
	if (popupBtnsAdd) {
		popupBtnsAdd.forEach(btn => {
			btn.addEventListener('click', function (e) {
				btn.classList.toggle('active');
			})
		})
	}
}

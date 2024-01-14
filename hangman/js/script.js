"use strict";

const taskList = [
  {
    hint: "I'm black and white and loved all over the world.",
    word: "panda",
  },
  {
    hint: "I have a long neck and spots on my body.",
    word: "giraffe",
  },
  {
    hint: "I can swim, quack, and have feathers.",
    word: "duck",
  },
  {
    hint: "I'm the king of the jungle.",
    word: "lion",
  },
  {
    hint: "I have eight legs and build webs.",
    word: "spider",
  },
  {
    hint: "I live in the ocean and have a big fin on my back.",
    word: "shark",
  },
  {
    hint: "I have a bushy tail and climb trees.",
    word: "squirrel",
  },
  {
    hint: "I have a long trunk and large ears.",
    word: "elephant",
  },
  {
    hint: "I can fly and hum around flowers.",
    word: "bee",
  },
  {
    hint: "I have a shell on my back and move very slowly.",
    word: "turtle",
  },
];

const bodyElement = document.body;
const wrapper = document.createElement("div");
const container = document.createElement("div");
const hangmanBody = document.createElement("div");
const hangmanGallow = document.createElement("div");
const hangmanImage = document.createElement("img");
const hangmanTitle = document.createElement("h1");
const hangmanContent = document.createElement("div");
const hint = document.createElement("h2");
const charList = document.createElement("ul");
const wrongCount = document.createElement("h3");
const keyboard = document.createElement("div");
const popup = document.createElement("div");
const popupBody = document.createElement("div");
const popupContent = document.createElement("div");
const popupImg = document.createElement("img");
const popupTitle = document.createElement("h3");
const popupText = document.createElement("div");
const popupBtn = document.createElement("button");

bodyElement.prepend(wrapper);
wrapper.append(container);
container.append(hangmanBody);
hangmanBody.append(hangmanGallow);
hangmanGallow.append(hangmanImage);
hangmanGallow.append(hangmanTitle);
hangmanBody.append(hangmanContent);
hangmanContent.prepend(charList);
hangmanContent.append(hint);
hint.after(wrongCount);
hangmanContent.append(keyboard);
wrapper.after(popup);
popup.append(popupBody);
popupBody.append(popupContent);
popupContent.append(popupImg);
popupContent.append(popupTitle);
popupContent.append(popupText);
popupContent.append(popupBtn);

hangmanImage.src = `img/gallow0.svg`;
hangmanImage.alt = `gallow`;
hangmanTitle.innerHTML = `Hangman Game`;
wrongCount.innerHTML = `Incorrect guesses: <span>0 / 6</span>`;
popupImg.src = "img/popup.gif";
popupImg.alt = `gallow`;
popupTitle.innerHTML = `Game over`;
popupText.innerHTML = `Correct answer is: CAT`;
popupBtn.innerHTML = `Play again`;
wrapper.classList.add("wrapper");
container.classList.add("hangman__container");
hangmanBody.classList.add("hangman__body");
hangmanGallow.classList.add("hangman__gallow");
hangmanImage.classList.add("hangman__image");
hangmanTitle.classList.add("hangman__title");
hangmanContent.classList.add("hangman__content");
charList.classList.add("char__list");
keyboard.classList.add("hangman__keyboard");
hint.classList.add("hangman__subtitle");
wrongCount.classList.add("hangman__incorrect-count");
popup.classList.add("popup");
popupBody.classList.add("popup__body");
popupContent.classList.add("popup__content");
popupImg.classList.add("popup__image");
popupTitle.classList.add("popup__title");
popupText.classList.add("popup__text");
popupBtn.classList.add("popup__btn");

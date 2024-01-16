"use strict";

const taskList = [
  {
    hint: "I'm a nocturnal bird known for my hooting sound.",
    word: "owl",
  },
  {
    hint: "I'm a venomous snake known for my hood.",
    word: "cobra",
  },
  {
    hint: "I'm a bird that can imitate human speech.",
    word: "parrot",
  },
  {
    hint: "I have wings and can soar high in the sky.",
    word: "eagle",
  },
  {
    hint: "I'm known for my humps and live in the desert.",
    word: "camel",
  },
  {
    hint: "I'm a reptile that can change color and blend in with my surroundings.",
    word: "chameleon",
  },
  {
    hint: "I have black and white stripes and am often associated with zebras.",
    word: "penguin",
  },
  {
    hint: "I'm a small, furry mammal that can fly and see in the dark.",
    word: "bat",
  },
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

let count = 0;
let charArr = [];
let randomWord;
let randomHint;
let correctAnswer;
//Restart
popupBtn.addEventListener("click", displayRandomObj);
function restartGame() {
  count = 0;
  charArr = [];
  hangmanImage.src = "img/gallow0.svg";
  const incorrectCount = document.querySelector(
    ".hangman__incorrect-count span"
  );
  incorrectCount.innerHTML = "0 / 6";
  charList.innerHTML = "";
  popup.classList.remove("open");
  const disabledBtns = document.querySelectorAll("[disabled]");
  disabledBtns.forEach((btn) => btn.removeAttribute("disabled"));
  charList.innerHTML = Array.from(
    { length: randomWord.length },
    () => `<li class="char"></li>`
  ).join("");
}
//Display random hint and word

function displayRandomObj() {
  const randomObj = Math.floor(Math.random() * taskList.length);
  randomWord = taskList[randomObj].word;
  randomHint = taskList[randomObj].hint;
  hint.innerHTML = `Hint: ${randomHint}`;
  correctAnswer = randomWord;
  restartGame();
}
displayRandomObj();

//Create dinamic keyboard
for (let i = 97; i <= 122; i++) {
  const keyboardBtns = document.createElement("button");
  keyboardBtns.innerHTML = String.fromCharCode(i).toUpperCase();
  keyboard.append(keyboardBtns);
  keyboardBtns.addEventListener("click", function (e) {
    return startGame(e.target.innerHTML, e.target);
  });
}

function startGame(clickedChar, btn) {
  if (correctAnswer.includes(clickedChar.toLowerCase())) {
    correctAnswer.split("").map((char, i) => {
      if (char.toLowerCase() === clickedChar.toLowerCase()) {
        charArr.push(char);
        charList.querySelectorAll(".char__list li")[i].innerHTML = char;
        charList.querySelectorAll(".char__list li")[i].classList.add("correct");
      }
    });
  } else {
    count++;
    const incorrectCount = document.querySelector(
      ".hangman__incorrect-count span"
    );
    incorrectCount.innerHTML = `${count} / 6`;
    hangmanImage.src = `img/gallow${count}.svg`;
  }
  btn.setAttribute("disabled", "");
  if (count === 6) {
    return showPopup(false);
  }
  if (charArr.length === randomWord.length) {
    return showPopup(true);
  }
}
//Show popup and finish the game
function showPopup(win) {
  popup.classList.add("open");
  if (win) {
    popupTitle.innerHTML = `You won!`;
    popupTitle.classList.add("popup__title_green");
  } else if (!win) {
    popupTitle.innerHTML = `Sorry! You lost!`;
    popupTitle.classList.remove("popup__title_green");
  }
  popupText.innerHTML = `Correct answer is: ${randomWord.toUpperCase()}`;
}

"use strict";

const taskList = [
  {
    hint: "A person who shoots with a bow and arrows",
    word: "archer",
  },
  {
    hint: "A strong, hard magnetic silvery-grey metal",
    word: "iron",
  },
  {
    hint: "It is the oldest known ceramic material",
    word: "clay",
  },
  {
    hint: "A mounted soldier serving under a feudal superior in the Middle Ages",
    word: "knight",
  },
  {
    hint: "A race, conflict, or other competition between rivals, as for a prize",
    word: "contest",
  },
  {
    hint: "A U-shaped metal thing",
    word: "horseshoe",
  },
  {
    hint: "Heating pieces of wrought iron or steel until the metal becomes soft enough",
    word: "blacksmithing",
  },
  {
    hint: "A circlet usually of precious metal worn especially on the finger",
    word: "ring",
  },
  {
    hint: "A cylindrical container with a handle and a lip, used for holding and pouring liquids",
    word: "jug",
  },
  {
    hint: "A piece of a homogeneous solid substance having a natural geometrically regular form with symmetrically arranged plane faces",
    word: "crystal",
  },
  {
    hint: "Impossible to believe",
    word: "incredible",
  },
  {
    hint: "A long-handled brush of bristles or twigs, used for sweeping",
    word: "broom",
  },
  {
    hint: "A thing which can be added to something else in order to make it more useful, versatile, or attractive",
    word: "accessory",
  },
  {
    hint: "A person who watches at a show, game, or other event",
    word: "spectator",
  },
  {
    hint: "A hostile encounter between opposing military forces",
    word: "battle",
  },
  {
    hint: "A public display, as of the work of artists or artisans, the products of farms or factories, the skills of performers, or objects of general interest",
    word: "exhibition",
  },
  {
    hint: "A person or company that makes a high-quality or distinctive product in small quantities, usually by hand or using traditional methods",
    word: "artisan",
  },
  {
    hint: "any of various forms of protective head covering worn by soldiers",
    word: "helmet",
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

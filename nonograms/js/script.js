"use strict";

const bodyElement = document.body;
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
bodyElement.prepend(wrapper);

const nonogramContainer = document.createElement("div");
nonogramContainer.classList.add("nonogram__container");
wrapper.append(nonogramContainer);

const nonogram = document.createElement("div");
nonogram.classList.add("nonogram");
nonogramContainer.append(nonogram);

//Кнопки в нижней части игры
const nonogramBottom = document.createElement("div");
nonogramBottom.classList.add("nonogram__bottom");
nonogramContainer.append(nonogramBottom);
const nonogramBtnRestart = document.createElement("button");
nonogramBtnRestart.classList.add("clear__btn");
nonogramBtnRestart.innerHTML = `Reset game`;
nonogramBottom.append(nonogramBtnRestart);

//Dark mode
const modeBody = document.createElement("div");
modeBody.classList.add("mode__body");
nonogramBottom.append(modeBody);
const modeInput = document.createElement("input");
modeInput.classList.add("mode__input");
modeInput.setAttribute("id", "mode__input");
modeInput.setAttribute("type", "checkbox");
modeBody.append(modeInput);
const modeLabel = document.createElement("label");
modeLabel.classList.add("mode__label");
modeLabel.setAttribute("for", "mode__input");
modeBody.append(modeLabel);
const modeDark = document.createElement("span");
modeDark.classList.add("mode__dark");
modeLabel.append(modeDark);
const modeLight = document.createElement("span");
modeLight.classList.add("mode__light");
modeLabel.append(modeLight);
const modeCircle = document.createElement("span");
modeCircle.classList.add("mode__circle");
modeLabel.append(modeCircle);

//Попап
const popup = document.createElement("div");
const popupBody = document.createElement("div");
const popupContent = document.createElement("div");
const popupImg = document.createElement("img");
const popupTitle = document.createElement("h3");
const popupText = document.createElement("div");
const popupBtn = document.createElement("button");
wrapper.after(popup);
popup.append(popupBody);
popupBody.append(popupContent);
popupContent.append(popupTitle);
popupContent.append(popupText);
popupContent.append(popupBtn);
popupText.innerHTML = `Your time is: 00.00`;
popupBtn.innerHTML = `Play again`;
popup.classList.add("popup");
popupBody.classList.add("popup__body");
popupContent.classList.add("popup__content");
popupImg.classList.add("popup__image");
popupTitle.classList.add("popup__title");
popupText.classList.add("popup__text");
popupBtn.classList.add("popup__btn");

//Звук
const checkSound = new Audio();
checkSound.src = `../audio/check.mp3`;
const crossSound = new Audio();
crossSound.src = `../audio/cross.mp3`;
const clearSound = new Audio();
clearSound.src = `../audio/clear.mp3`;
const winGame = new Audio();
winGame.src = `../audio/win.mp3`;
const resetGame = new Audio();
resetGame.src = `../audio/reset.mp3`;
const changeModePlay = new Audio();
changeModePlay.src = `../audio/mode.mp3`;

//Секундомер
const clock = document.createElement("div");
clock.classList.add("clock");
clock.innerHTML = `00m:00s`;
nonogramContainer.prepend(clock);

//Верхняя часть игры
const nonogramTop = document.createElement("div");
nonogramTop.classList.add("nonogram__top");
nonogram.append(nonogramTop);
const topSquare = document.createElement("div");
topSquare.classList.add("top__square");
nonogramTop.append(topSquare);
const topNumbers = document.createElement("div");
topNumbers.classList.add("top__numbers");
nonogramTop.append(topNumbers);

//Левая часть игры
const nonogramLeft = document.createElement("div");
nonogramLeft.classList.add("nonogram__left");
nonogram.append(nonogramLeft);
const leftNumbers = document.createElement("div");
leftNumbers.classList.add("left__numbers");
nonogramLeft.append(leftNumbers);

//Числа
let topNumData = [[5], [1], [1], [1], [5]];
let leftNumData = [
  [1, 1],
  [2, 2],
  [1, 1, 1],
  [1, 1],
  [1, 1],
];

//Генерация чисел для игры
function generateNonogram(topNumData, leftNumData) {
  leftNumData.forEach((array) => {
    const leftNumRow = document.createElement("div");
    leftNumRow.classList.add("left__numbers-row");
    array.forEach((number) => {
      const leftNumCol = document.createElement("div");
      leftNumCol.classList.add("left__numbers-column");
      leftNumCol.innerHTML = number;
      leftNumRow.append(leftNumCol);
    });
    leftNumbers.append(leftNumRow);
  });

  topNumData.forEach((array) => {
    const topNumRow = document.createElement("div");
    topNumRow.classList.add("top__numbers-row");
    array.forEach((number) => {
      const topNumCol = document.createElement("div");
      topNumCol.classList.add("top__numbers-column");
      topNumCol.innerHTML = number;
      topNumRow.append(topNumCol);
    });
    topNumbers.append(topNumRow);
  });
}
generateNonogram(topNumData, leftNumData);

//Кнопки для разных макетов
const btns5x5 = document.createElement("div");
btns5x5.classList.add("nonogram__btns5x5");
nonogramContainer.prepend(btns5x5);

const mBtn = document.createElement("div");
mBtn.classList.add("m__btn", "button");
mBtn.innerHTML = `M`;
btns5x5.append(mBtn);
const dogBtn = document.createElement("div");
dogBtn.classList.add("dog__btn", "button");
dogBtn.innerHTML = `Dog`;
btns5x5.append(dogBtn);
const clockBtn = document.createElement("div");
clockBtn.classList.add("clock__btn", "button");
clockBtn.innerHTML = `Clock`;
btns5x5.append(clockBtn);
const planeBtn = document.createElement("div");
planeBtn.classList.add("plane__btn", "button");
planeBtn.innerHTML = `Plane`;
btns5x5.append(planeBtn);
const chessBtn = document.createElement("div");
chessBtn.classList.add("chess__btn", "button");
chessBtn.innerHTML = `Chess`;
btns5x5.append(chessBtn);

//Игровое поле
const nonogramSquares = document.createElement("div");
nonogramSquares.classList.add("nonogram__squares");
nonogramLeft.append(nonogramSquares);

const squares = 25;
for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("squares__sqr");
  nonogramSquares.append(square);
}

//Добавление класса для правильных квадратиков
const allSquares = document.querySelectorAll(".squares__sqr");

allSquares[0].classList.add("active");
allSquares[4].classList.add("active");
allSquares[5].classList.add("active");
allSquares[6].classList.add("active");
allSquares[8].classList.add("active");
allSquares[9].classList.add("active");
allSquares[10].classList.add("active");
allSquares[12].classList.add("active");
allSquares[14].classList.add("active");
allSquares[15].classList.add("active");
allSquares[19].classList.add("active");
allSquares[20].classList.add("active");
allSquares[24].classList.add("active");

//События по клику на квадратики
allSquares.forEach((square) => {
  square.addEventListener("click", function () {
    if (square.classList.contains("checked")) {
      square.classList.remove("checked");
      square.classList.add("crossed");
      checkSound.pause();
      crossSound.play();
    } else if (square.classList.contains("crossed")) {
      square.classList.remove("crossed");
      clearSound.play();
    } else {
      square.classList.add("checked");
      checkSound.play();
      startTime();
    }
    correctSquares();
  });
});
//Проверка нажатия правильных квадратиков
let correctSquaresNum = 13;
function correctSquares() {
  const checkedActiveSquares = document.querySelectorAll(
    ".squares__sqr.active.checked"
  );
  const checkedSquares = document.querySelectorAll(".squares__sqr.checked");
  if (
    checkedActiveSquares.length === correctSquaresNum &&
    checkedSquares.length === correctSquaresNum
  ) {
    console.log("You win");
    showPopup();
  }
}

//Рестарт игры
const btnClear = document.querySelector(".clear__btn");

btnClear.addEventListener("click", clearPuzzle);
function clearPuzzle() {
  if (confirm("Do you want to restart the game?")) {
    for (let i = 0; i < allSquares.length; i++) {
      allSquares[i].classList.remove("checked", "crossed");
    }
  }
  resetGame.play();
  resetTime();
}

//Появление попапа
function showPopup() {
  popup.classList.add("open");
  popupTitle.innerHTML = `You won!`;
  popupTitle.classList.add("popup__title_green");
  winGame.play();
  pauseTime();
  displayTime();
  showResults();
  popupText.innerHTML = `Your time is: ${currentTime}`;
}
//Скрытие попапа и рестарт игры
popupBtn.addEventListener("click", closePopup);
//Удаление классов 'checked' и "crossed"
function removeCheckedCrossed() {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].classList.remove("checked", "crossed");
  }
}
function closePopup() {
  popup.classList.remove("open");
  resetTime();
  removeCheckedCrossed();
}
//Секундомер
let milliseconds = 0;
let time;

function startTime() {
  clearInterval(time);
  time = setInterval(() => {
    milliseconds += 5;
    let dateTime = new Date(milliseconds);
    clock.innerHTML =
      ("0" + dateTime.getMinutes()).slice(-2) +
      "m" +
      ":" +
      ("0" + dateTime.getSeconds()).slice(-2) +
      "s";
  }, 5);
}

function pauseTime() {
  clearInterval(time);
}
function resetTime() {
  clearInterval(time);
  milliseconds = 0;
  clock.innerHTML = `00m:00s`;
}

let currentTime;
function displayTime() {
  currentTime = document.querySelector(".clock").innerHTML;
}

//Результаты игры
function saveTimeResults(currentTime) {
  let timeResults = JSON.parse(localStorage.getItem("timeResults")) || [];
  timeResults.push(currentTime);
  timeResults.sort((a, b) => {
    let aTime = +a.split("m:")[0] * 60 + +a.split("m:")[1].slice(0, -1);
    let bTime = +b.split("m:")[0] * 60 + +b.split("m:")[1].slice(0, -1);
    return aTime - bTime;
  });
  if (timeResults.length > 5) {
    timeResults.pop(0);
  }
  localStorage.setItem("timeResults", JSON.stringify(timeResults));
}
function showTimeResults() {
  let timeResults = JSON.parse(localStorage.getItem("timeResults")) || [];
  let resultsList = document.querySelector(".top__square");
  resultsList.innerHTML = "";
  timeResults.forEach((time) => {
    let p = document.createElement("p");
    p.classList.add("score");
    p.innerHTML = `${time}`;
    resultsList.append(p);
  });
}
function showResults() {
  saveTimeResults(currentTime);
  showTimeResults();
}

//Change mode
modeInput.addEventListener("click", changeMode);
function changeMode() {
  bodyElement.classList.toggle("dark");
  changeModePlay.play();
}

//Генерация цифр и сетки по клику
//Удаление цифр
function removeAllNum(leftNumbers, topNumbers) {
  leftNumbers = document.querySelectorAll(".left__numbers-row");
  leftNumbers.forEach((row) => {
    row.remove();
  });
  topNumbers = document.querySelectorAll(".top__numbers-row");
  topNumbers.forEach((row) => {
    row.remove();
  });
}
//Удаление 'active' для правильных квадратов
function removeActive() {
  const activeNum = document.querySelectorAll(".squares__sqr.active");
  activeNum.forEach((item) => {
    item.classList.remove("active");
  });
}
//Смена цвета кнопок при клике
const allBtns5x5 = document.querySelectorAll(".button");
allBtns5x5.forEach((btn) => {
  btn.addEventListener("click", function () {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let borderCol = "#" + Math.floor(Math.random() * 16777215).toString(16);
    btn.style.border = `2px solid ${borderCol}`;
    btn.style.backgroundColor = color;
  });
});
mBtn.addEventListener("click", generateMNum);
function generateMNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[0].classList.add("active");
  allSquares[4].classList.add("active");
  allSquares[5].classList.add("active");
  allSquares[6].classList.add("active");
  allSquares[8].classList.add("active");
  allSquares[9].classList.add("active");
  allSquares[10].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[14].classList.add("active");
  allSquares[15].classList.add("active");
  allSquares[19].classList.add("active");
  allSquares[20].classList.add("active");
  allSquares[24].classList.add("active");
  let topNumData = [[5], [1], [1], [1], [5]];
  let leftNumData = [
    [1, 1],
    [2, 2],
    [1, 1, 1],
    [1, 1],
    [1, 1],
  ];
  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 13;
  resetTime();
  removeCheckedCrossed();
}

dogBtn.addEventListener("click", generateDogNum);

function generateDogNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[3].classList.add("active");
  allSquares[5].classList.add("active");
  allSquares[7].classList.add("active");
  allSquares[8].classList.add("active");
  allSquares[9].classList.add("active");
  allSquares[11].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[13].classList.add("active");
  allSquares[16].classList.add("active");
  allSquares[18].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[23].classList.add("active");
  topNumData = [[1], [3], [2], [5], [1]];
  leftNumData = [[1], [1, 3], [3], [1, 1], [1, 1]];
  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 12;
  resetTime();
  removeCheckedCrossed();
}

clockBtn.addEventListener("click", generateClockNum);
function generateClockNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[0].classList.add("active");
  allSquares[1].classList.add("active");
  allSquares[2].classList.add("active");
  allSquares[3].classList.add("active");
  allSquares[4].classList.add("active");
  allSquares[6].classList.add("active");
  allSquares[7].classList.add("active");
  allSquares[8].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[16].classList.add("active");
  allSquares[18].classList.add("active");
  allSquares[20].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[22].classList.add("active");
  allSquares[23].classList.add("active");
  allSquares[24].classList.add("active");
  let topNumData = [
    [1, 1],
    [2, 2],
    [3, 1],
    [2, 2],
    [1, 1],
  ];
  let leftNumData = [[5], [3], [1], [1, 1], [5]];
  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 16;
  resetTime();
  removeCheckedCrossed();
}

planeBtn.addEventListener("click", generatePlaneNum);
function generatePlaneNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[2].classList.add("active");
  allSquares[6].classList.add("active");
  allSquares[7].classList.add("active");
  allSquares[8].classList.add("active");
  allSquares[10].classList.add("active");
  allSquares[11].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[13].classList.add("active");
  allSquares[14].classList.add("active");
  allSquares[17].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[22].classList.add("active");
  allSquares[23].classList.add("active");
  let topNumData = [[1], [2, 1], [5], [2, 1], [1]];
  let leftNumData = [[1], [3], [5], [1], [3]];
  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 13;
  resetTime();
  removeCheckedCrossed();
}
chessBtn.addEventListener("click", generateChessNum);
function generateChessNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[0].classList.add("active");
  allSquares[2].classList.add("active");
  allSquares[4].classList.add("active");
  allSquares[6].classList.add("active");
  allSquares[8].classList.add("active");
  allSquares[10].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[14].classList.add("active");
  allSquares[16].classList.add("active");
  allSquares[18].classList.add("active");
  allSquares[20].classList.add("active");
  allSquares[22].classList.add("active");
  allSquares[24].classList.add("active");
  let topNumData = [
    [1, 1, 1],
    [1, 1],
    [1, 1, 1],
    [1, 1],
    [1, 1, 1],
  ];
  let leftNumData = [
    [1, 1, 1],
    [1, 1],
    [1, 1, 1],
    [1, 1],
    [1, 1, 1],
  ];
  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 13;
  resetTime();
  removeCheckedCrossed();
}

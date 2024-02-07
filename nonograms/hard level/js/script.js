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
checkSound.src = `audio/check.mp3`;
const crossSound = new Audio();
crossSound.src = `audio/cross.mp3`;
const clearSound = new Audio();
clearSound.src = `audio/clear.mp3`;
const winGame = new Audio();
winGame.src = `audio/win.mp3`;
const resetGame = new Audio();
resetGame.src = `audio/reset.mp3`;
const changeModePlay = new Audio();
changeModePlay.src = `audio/mode.mp3`;

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

let topNumData = [
  [7],
  [1, 1, 4],
  [1, 7],
  [3, 2],
  [1, 1],
  [1, 1],
  [2, 1],
  [1, 1, 1],
  [2, 3],
  [2, 3],
  [2, 3],
  [2, 3],
  [2, 3],
  [2, 3],
  [7],
];
let leftNumData = [
  [1, 1],
  [1, 1],
  [10],
  [1, 2, 2],
  [3, 1],
  [1, 1, 1],
  [3, 1],
  [4, 2],
  [10],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
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
mBtn.innerHTML = `Spades`;
btns5x5.append(mBtn);
const dogBtn = document.createElement("div");
dogBtn.classList.add("dog__btn", "button");
dogBtn.innerHTML = `Savanna`;
btns5x5.append(dogBtn);
const clockBtn = document.createElement("div");
clockBtn.classList.add("clock__btn", "button");
clockBtn.innerHTML = `Duck`;
btns5x5.append(clockBtn);
const planeBtn = document.createElement("div");
planeBtn.classList.add("plane__btn", "button");
planeBtn.innerHTML = `Mouse`;
btns5x5.append(planeBtn);
const chessBtn = document.createElement("div");
chessBtn.classList.add("chess__btn", "button");
chessBtn.innerHTML = `Skittles`;
btns5x5.append(chessBtn);

//Игровое поле
const nonogramSquares = document.createElement("div");
nonogramSquares.classList.add("nonogram__squares");
nonogramLeft.append(nonogramSquares);

let squares = 225;
function generateSquares(squares) {
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("squares__sqr");
    nonogramSquares.append(square);
    const allSquares = document.querySelectorAll(".squares__sqr");
    for (let i = 0; i < allSquares.length; i++) {
      if ((i + 1) % 5 === 0) {
        allSquares[i].style.borderRight = `1.5px solid green`;
      }
      if ((i > 59 && i <= 74) || (i > 134 && i <= 149)) {
        allSquares[i].style.borderBottom = `1.5px solid green`;
      }
    }
  }
}
generateSquares(squares);
//Добавление класса для правильных квадратиков
const allSquares = document.querySelectorAll(".squares__sqr");

allSquares[2].classList.add("active");
allSquares[7].classList.add("active");
allSquares[13].classList.add("active");
allSquares[16].classList.add("active");
allSquares[20].classList.add("active");
allSquares[21].classList.add("active");
allSquares[22].classList.add("active");
allSquares[23].classList.add("active");
allSquares[24].classList.add("active");
allSquares[25].classList.add("active");
allSquares[26].classList.add("active");
allSquares[27].classList.add("active");
allSquares[28].classList.add("active");
allSquares[29].classList.add("active");
allSquares[30].classList.add("active");
allSquares[32].classList.add("active");
allSquares[33].classList.add("active");
allSquares[38].classList.add("active");
allSquares[39].classList.add("active");
allSquares[40].classList.add("active");
allSquares[41].classList.add("active");
allSquares[42].classList.add("active");
allSquares[49].classList.add("active");
allSquares[50].classList.add("active");
allSquares[52].classList.add("active");
allSquares[59].classList.add("active");
allSquares[60].classList.add("active");
allSquares[61].classList.add("active");
allSquares[62].classList.add("active");
allSquares[69].classList.add("active");
allSquares[70].classList.add("active");
allSquares[71].classList.add("active");
allSquares[72].classList.add("active");
allSquares[73].classList.add("active");
allSquares[78].classList.add("active");
allSquares[79].classList.add("active");
allSquares[80].classList.add("active");
allSquares[81].classList.add("active");
allSquares[82].classList.add("active");
allSquares[83].classList.add("active");
allSquares[84].classList.add("active");
allSquares[85].classList.add("active");
allSquares[86].classList.add("active");
allSquares[87].classList.add("active");
allSquares[88].classList.add("active");
allSquares[89].classList.add("active");
allSquares[91].classList.add("active");
allSquares[98].classList.add("active");

allSquares.forEach((square) => {
  square.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (square.classList.contains("checked")) {
      square.classList.remove("checked");
      square.classList.add("crossed");
      checkSound.pause();
      crossSound.play();
    } else if (square.classList.contains("crossed")) {
      square.classList.remove("crossed");
      clearSound.play();
    } else {
      square.classList.add("crossed");
      checkSound.play();
      startTime();
    }
    correctSquares();
  });
});
//События по клику на квадратики
function showCheckedCrossed() {
  allSquares.forEach((square) => {
    square.addEventListener("click", function () {
      if (square.classList.contains("checked")) {
        square.classList.remove("checked");
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
}
showCheckedCrossed();
//Проверка нажатия правильных квадратиков
let correctSquaresNum = 48;
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
  popupTitle.innerHTML = `Great! You have solved the nonogram!`;
  popupTitle.style.fontSize = `18px`;
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

  allSquares[7].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[22].classList.add("active");
  allSquares[23].classList.add("active");
  allSquares[35].classList.add("active");
  allSquares[36].classList.add("active");
  allSquares[37].classList.add("active");
  allSquares[38].classList.add("active");
  allSquares[39].classList.add("active");
  allSquares[49].classList.add("active");
  allSquares[50].classList.add("active");
  allSquares[51].classList.add("active");
  allSquares[52].classList.add("active");
  allSquares[53].classList.add("active");
  allSquares[54].classList.add("active");
  allSquares[55].classList.add("active");
  allSquares[63].classList.add("active");
  allSquares[64].classList.add("active");
  allSquares[65].classList.add("active");
  allSquares[66].classList.add("active");
  allSquares[67].classList.add("active");
  allSquares[68].classList.add("active");
  allSquares[69].classList.add("active");
  allSquares[70].classList.add("active");
  allSquares[71].classList.add("active");
  allSquares[77].classList.add("active");
  allSquares[78].classList.add("active");
  allSquares[79].classList.add("active");
  allSquares[80].classList.add("active");
  allSquares[81].classList.add("active");
  allSquares[82].classList.add("active");
  allSquares[83].classList.add("active");
  allSquares[84].classList.add("active");
  allSquares[85].classList.add("active");
  allSquares[86].classList.add("active");
  allSquares[87].classList.add("active");
  allSquares[91].classList.add("active");
  allSquares[92].classList.add("active");
  allSquares[93].classList.add("active");
  allSquares[94].classList.add("active");
  allSquares[95].classList.add("active");
  allSquares[96].classList.add("active");
  allSquares[97].classList.add("active");
  allSquares[98].classList.add("active");
  allSquares[99].classList.add("active");
  allSquares[100].classList.add("active");
  allSquares[101].classList.add("active");
  allSquares[102].classList.add("active");
  allSquares[103].classList.add("active");
  allSquares[106].classList.add("active");
  allSquares[107].classList.add("active");
  allSquares[108].classList.add("active");
  allSquares[109].classList.add("active");
  allSquares[110].classList.add("active");
  allSquares[111].classList.add("active");
  allSquares[112].classList.add("active");
  allSquares[113].classList.add("active");
  allSquares[114].classList.add("active");
  allSquares[115].classList.add("active");
  allSquares[116].classList.add("active");
  allSquares[117].classList.add("active");
  allSquares[118].classList.add("active");
  allSquares[120].classList.add("active");
  allSquares[121].classList.add("active");
  allSquares[122].classList.add("active");
  allSquares[123].classList.add("active");
  allSquares[124].classList.add("active");
  allSquares[125].classList.add("active");
  allSquares[126].classList.add("active");
  allSquares[127].classList.add("active");
  allSquares[128].classList.add("active");
  allSquares[129].classList.add("active");
  allSquares[130].classList.add("active");
  allSquares[131].classList.add("active");
  allSquares[132].classList.add("active");
  allSquares[133].classList.add("active");
  allSquares[134].classList.add("active");
  allSquares[135].classList.add("active");
  allSquares[136].classList.add("active");
  allSquares[137].classList.add("active");
  allSquares[138].classList.add("active");
  allSquares[139].classList.add("active");
  allSquares[140].classList.add("active");
  allSquares[141].classList.add("active");
  allSquares[142].classList.add("active");
  allSquares[143].classList.add("active");
  allSquares[144].classList.add("active");
  allSquares[145].classList.add("active");
  allSquares[146].classList.add("active");
  allSquares[147].classList.add("active");
  allSquares[148].classList.add("active");
  allSquares[149].classList.add("active");
  allSquares[150].classList.add("active");
  allSquares[151].classList.add("active");
  allSquares[152].classList.add("active");
  allSquares[153].classList.add("active");
  allSquares[154].classList.add("active");
  allSquares[155].classList.add("active");
  allSquares[156].classList.add("active");
  allSquares[157].classList.add("active");
  allSquares[158].classList.add("active");
  allSquares[159].classList.add("active");
  allSquares[160].classList.add("active");
  allSquares[161].classList.add("active");
  allSquares[162].classList.add("active");
  allSquares[163].classList.add("active");
  allSquares[164].classList.add("active");
  allSquares[165].classList.add("active");
  allSquares[166].classList.add("active");
  allSquares[167].classList.add("active");
  allSquares[168].classList.add("active");
  allSquares[169].classList.add("active");
  allSquares[170].classList.add("active");
  allSquares[172].classList.add("active");
  allSquares[174].classList.add("active");
  allSquares[175].classList.add("active");
  allSquares[176].classList.add("active");
  allSquares[177].classList.add("active");
  allSquares[178].classList.add("active");
  allSquares[179].classList.add("active");
  allSquares[181].classList.add("active");
  allSquares[182].classList.add("active");
  allSquares[183].classList.add("active");
  allSquares[184].classList.add("active");
  allSquares[187].classList.add("active");
  allSquares[190].classList.add("active");
  allSquares[191].classList.add("active");
  allSquares[192].classList.add("active");
  allSquares[193].classList.add("active");
  allSquares[201].classList.add("active");
  allSquares[202].classList.add("active");
  allSquares[203].classList.add("active");
  allSquares[215].classList.add("active");
  allSquares[216].classList.add("active");
  allSquares[217].classList.add("active");
  allSquares[218].classList.add("active");
  allSquares[219].classList.add("active");
  let topNumData = [
    [4],
    [7],
    [8],
    [9],
    [10],
    [10, 1],
    [10, 2],
    [15],
    [10, 2],
    [10, 1],
    [10],
    [9],
    [8],
    [7],
    [4],
  ];
  let leftNumData = [
    [1],
    [3],
    [5],
    [7],
    [9],
    [11],
    [13],
    [13],
    [15],
    [15],
    [15],
    [6, 1, 6],
    [4, 1, 4],
    [3],
    [5],
  ];

  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 137;
  resetTime();
  removeCheckedCrossed();
}

dogBtn.addEventListener("click", generateDogNum);

function generateDogNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[4].classList.add("active");
  allSquares[6].classList.add("active");
  allSquares[11].classList.add("active");
  allSquares[13].classList.add("active");
  allSquares[17].classList.add("active");
  allSquares[19].classList.add("active");
  allSquares[20].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[24].classList.add("active");
  allSquares[26].classList.add("active");
  allSquares[27].classList.add("active");
  allSquares[28].classList.add("active");
  allSquares[33].classList.add("active");
  allSquares[34].classList.add("active");
  allSquares[35].classList.add("active");
  allSquares[36].classList.add("active");
  allSquares[37].classList.add("active");
  allSquares[40].classList.add("active");
  allSquares[41].classList.add("active");
  allSquares[42].classList.add("active");
  allSquares[43].classList.add("active");
  allSquares[44].classList.add("active");
  allSquares[49].classList.add("active");
  allSquares[51].classList.add("active");
  allSquares[52].classList.add("active");
  allSquares[56].classList.add("active");
  allSquares[58].classList.add("active");
  allSquares[59].classList.add("active");
  allSquares[64].classList.add("active");
  allSquares[71].classList.add("active");
  allSquares[78].classList.add("active");
  allSquares[79].classList.add("active");
  allSquares[85].classList.add("active");
  allSquares[86].classList.add("active");
  allSquares[93].classList.add("active");
  allSquares[94].classList.add("active");
  allSquares[100].classList.add("active");
  allSquares[101].classList.add("active");
  allSquares[107].classList.add("active");
  allSquares[108].classList.add("active");
  allSquares[114].classList.add("active");
  allSquares[115].classList.add("active");
  allSquares[122].classList.add("active");
  allSquares[123].classList.add("active");
  allSquares[129].classList.add("active");
  allSquares[130].classList.add("active");
  allSquares[134].classList.add("active");
  allSquares[135].classList.add("active");
  allSquares[136].classList.add("active");
  allSquares[137].classList.add("active");
  allSquares[141].classList.add("active");
  allSquares[142].classList.add("active");
  allSquares[143].classList.add("active");
  allSquares[144].classList.add("active");
  allSquares[147].classList.add("active");
  allSquares[148].classList.add("active");
  allSquares[149].classList.add("active");
  allSquares[150].classList.add("active");
  allSquares[151].classList.add("active");
  allSquares[152].classList.add("active");
  allSquares[154].classList.add("active");
  allSquares[155].classList.add("active");
  allSquares[156].classList.add("active");
  allSquares[157].classList.add("active");
  allSquares[158].classList.add("active");
  allSquares[159].classList.add("active");
  allSquares[161].classList.add("active");
  allSquares[162].classList.add("active");
  allSquares[163].classList.add("active");
  allSquares[164].classList.add("active");
  allSquares[165].classList.add("active");
  allSquares[166].classList.add("active");
  allSquares[169].classList.add("active");
  allSquares[170].classList.add("active");
  allSquares[171].classList.add("active");
  allSquares[172].classList.add("active");
  allSquares[173].classList.add("active");
  allSquares[176].classList.add("active");
  allSquares[177].classList.add("active");
  allSquares[178].classList.add("active");
  allSquares[179].classList.add("active");
  allSquares[181].classList.add("active");
  allSquares[182].classList.add("active");
  allSquares[184].classList.add("active");
  allSquares[185].classList.add("active");
  allSquares[186].classList.add("active");
  allSquares[187].classList.add("active");
  allSquares[188].classList.add("active");
  allSquares[189].classList.add("active");
  allSquares[192].classList.add("active");
  allSquares[193].classList.add("active");
  allSquares[194].classList.add("active");
  allSquares[197].classList.add("active");
  allSquares[199].classList.add("active");
  allSquares[200].classList.add("active");
  allSquares[202].classList.add("active");
  allSquares[204].classList.add("active");
  allSquares[209].classList.add("active");
  allSquares[212].classList.add("active");
  allSquares[214].classList.add("active");
  allSquares[217].classList.add("active");
  allSquares[219].classList.add("active");
  allSquares[222].classList.add("active");
  allSquares[223].classList.add("active");
  allSquares[224].classList.add("active");

  let topNumData = [
    [3],
    [4],
    [1, 4, 3],
    [1, 4],
    [7, 5],
    [2, 4],
    [4, 4],
    [2, 6],
    [4],
    [1, 4, 3],
    [1, 4],
    [7, 2],
    [2, 4, 1],
    [4, 3, 1],
    [2, 7],
  ];
  let leftNumData = [
    [1, 1, 1, 1],
    [1, 3, 1, 3],
    [5, 5],
    [1, 2, 1, 2],
    [1, 1],
    [2, 2],
    [2, 2],
    [2, 2],
    [2, 2, 1],
    [3, 4, 3],
    [3, 6, 4],
    [2, 5, 4],
    [2, 6, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 1, 1, 1, 3],
  ];

  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 104;
  resetTime();
  removeCheckedCrossed();
}

clockBtn.addEventListener("click", generateClockNum);
function generateClockNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[9].classList.add("active");
  allSquares[10].classList.add("active");
  allSquares[11].classList.add("active");
  allSquares[23].classList.add("active");
  allSquares[24].classList.add("active");
  allSquares[25].classList.add("active");
  allSquares[26].classList.add("active");
  allSquares[27].classList.add("active");
  allSquares[37].classList.add("active");
  allSquares[38].classList.add("active");
  allSquares[39].classList.add("active");
  allSquares[40].classList.add("active");
  allSquares[42].classList.add("active");
  allSquares[43].classList.add("active");
  allSquares[44].classList.add("active");
  allSquares[52].classList.add("active");
  allSquares[53].classList.add("active");
  allSquares[54].classList.add("active");
  allSquares[55].classList.add("active");
  allSquares[56].classList.add("active");
  allSquares[57].classList.add("active");
  allSquares[58].classList.add("active");
  allSquares[68].classList.add("active");
  allSquares[69].classList.add("active");
  allSquares[70].classList.add("active");
  allSquares[71].classList.add("active");
  allSquares[72].classList.add("active");
  allSquares[84].classList.add("active");
  allSquares[85].classList.add("active");
  allSquares[86].classList.add("active");
  allSquares[98].classList.add("active");
  allSquares[99].classList.add("active");
  allSquares[100].classList.add("active");
  allSquares[101].classList.add("active");
  allSquares[102].classList.add("active");
  allSquares[105].classList.add("active");
  allSquares[111].classList.add("active");
  allSquares[112].classList.add("active");
  allSquares[113].classList.add("active");
  allSquares[114].classList.add("active");
  allSquares[115].classList.add("active");
  allSquares[116].classList.add("active");
  allSquares[117].classList.add("active");
  allSquares[118].classList.add("active");
  allSquares[120].classList.add("active");
  allSquares[121].classList.add("active");
  allSquares[122].classList.add("active");
  allSquares[125].classList.add("active");
  allSquares[126].classList.add("active");
  allSquares[127].classList.add("active");
  allSquares[131].classList.add("active");
  allSquares[132].classList.add("active");
  allSquares[133].classList.add("active");
  allSquares[135].classList.add("active");
  allSquares[136].classList.add("active");
  allSquares[137].classList.add("active");
  allSquares[138].classList.add("active");
  allSquares[139].classList.add("active");
  allSquares[140].classList.add("active");
  allSquares[141].classList.add("active");
  allSquares[143].classList.add("active");
  allSquares[144].classList.add("active");
  allSquares[145].classList.add("active");
  allSquares[147].classList.add("active");
  allSquares[148].classList.add("active");
  allSquares[151].classList.add("active");
  allSquares[152].classList.add("active");
  allSquares[153].classList.add("active");
  allSquares[154].classList.add("active");
  allSquares[155].classList.add("active");
  allSquares[157].classList.add("active");
  allSquares[158].classList.add("active");
  allSquares[159].classList.add("active");
  allSquares[160].classList.add("active");
  allSquares[162].classList.add("active");
  allSquares[163].classList.add("active");
  allSquares[166].classList.add("active");
  allSquares[167].classList.add("active");
  allSquares[168].classList.add("active");
  allSquares[169].classList.add("active");
  allSquares[170].classList.add("active");
  allSquares[171].classList.add("active");
  allSquares[172].classList.add("active");
  allSquares[173].classList.add("active");
  allSquares[176].classList.add("active");
  allSquares[177].classList.add("active");
  allSquares[182].classList.add("active");
  allSquares[183].classList.add("active");
  allSquares[184].classList.add("active");
  allSquares[185].classList.add("active");
  allSquares[186].classList.add("active");
  allSquares[187].classList.add("active");
  allSquares[188].classList.add("active");
  allSquares[189].classList.add("active");
  allSquares[190].classList.add("active");
  allSquares[191].classList.add("active");
  allSquares[199].classList.add("active");
  allSquares[200].classList.add("active");
  allSquares[202].classList.add("active");
  allSquares[203].classList.add("active");
  allSquares[204].classList.add("active");
  allSquares[216].classList.add("active");
  allSquares[217].classList.add("active");
  allSquares[218].classList.add("active");
  allSquares[219].classList.add("active");
  allSquares[220].classList.add("active");
  allSquares[221].classList.add("active");
  let topNumData = [
    [3],
    [4],
    [5],
    [4],
    [5],
    [6],
    [3, 2, 1],
    [2, 2, 5],
    [4, 2, 6],
    [8, 2, 3],
    [8, 2, 1, 1],
    [2, 6, 2, 1],
    [4, 6],
    [2, 4],
    [1],
  ];
  let leftNumData = [
    [3],
    [5],
    [4, 3],
    [7],
    [5],
    [3],
    [5],
    [1, 8],
    [3, 3, 3],
    [7, 3, 2],
    [5, 4, 2],
    [8, 2],
    [10],
    [2, 3],
    [6],
  ];

  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 107;
  resetTime();
  removeCheckedCrossed();
}

planeBtn.addEventListener("click", generatePlaneNum);
function generatePlaneNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[12].classList.add("active");
  allSquares[13].classList.add("active");
  allSquares[14].classList.add("active");
  allSquares[20].classList.add("active");
  allSquares[21].classList.add("active");
  allSquares[22].classList.add("active");
  allSquares[23].classList.add("active");
  allSquares[26].classList.add("active");
  allSquares[27].classList.add("active");
  allSquares[29].classList.add("active");
  allSquares[33].classList.add("active");
  allSquares[34].classList.add("active");
  allSquares[35].classList.add("active");
  allSquares[38].classList.add("active");
  allSquares[41].classList.add("active");
  allSquares[43].classList.add("active");
  allSquares[45].classList.add("active");
  allSquares[46].classList.add("active");
  allSquares[47].classList.add("active");
  allSquares[49].classList.add("active");
  allSquares[52].classList.add("active");
  allSquares[53].classList.add("active");
  allSquares[56].classList.add("active");
  allSquares[60].classList.add("active");
  allSquares[61].classList.add("active");
  allSquares[67].classList.add("active");
  allSquares[71].classList.add("active");
  allSquares[72].classList.add("active");
  allSquares[76].classList.add("active");
  allSquares[77].classList.add("active");
  allSquares[78].classList.add("active");
  allSquares[79].classList.add("active");
  allSquares[82].classList.add("active");
  allSquares[83].classList.add("active");
  allSquares[87].classList.add("active");
  allSquares[88].classList.add("active");
  allSquares[94].classList.add("active");
  allSquares[95].classList.add("active");
  allSquares[98].classList.add("active");
  allSquares[99].classList.add("active");
  allSquares[103].classList.add("active");
  allSquares[104].classList.add("active");
  allSquares[110].classList.add("active");
  allSquares[114].classList.add("active");
  allSquares[115].classList.add("active");
  allSquares[116].classList.add("active");
  allSquares[119].classList.add("active");
  allSquares[125].classList.add("active");
  allSquares[126].classList.add("active");
  allSquares[131].classList.add("active");
  allSquares[132].classList.add("active");
  allSquares[134].classList.add("active");
  allSquares[138].classList.add("active");
  allSquares[139].classList.add("active");
  allSquares[140].classList.add("active");
  allSquares[141].classList.add("active");
  allSquares[147].classList.add("active");
  allSquares[148].classList.add("active");
  allSquares[149].classList.add("active");
  allSquares[153].classList.add("active");
  allSquares[155].classList.add("active");
  allSquares[158].classList.add("active");
  allSquares[159].classList.add("active");
  allSquares[163].classList.add("active");
  allSquares[164].classList.add("active");
  allSquares[170].classList.add("active");
  allSquares[173].classList.add("active");
  allSquares[178].classList.add("active");
  allSquares[186].classList.add("active");
  allSquares[188].classList.add("active");
  allSquares[193].classList.add("active");
  allSquares[200].classList.add("active");
  allSquares[201].classList.add("active");
  allSquares[202].classList.add("active");
  allSquares[203].classList.add("active");
  allSquares[204].classList.add("active");
  allSquares[207].classList.add("active");
  allSquares[208].classList.add("active");
  allSquares[213].classList.add("active");
  allSquares[214].classList.add("active");
  allSquares[215].classList.add("active");
  allSquares[217].classList.add("active");
  allSquares[218].classList.add("active");
  allSquares[220].classList.add("active");
  allSquares[221].classList.add("active");
  allSquares[222].classList.add("active");

  let topNumData = [
    [2],
    [3],
    [1, 1],
    [1, 1, 2, 1],
    [2, 2, 1, 1],
    [2, 6, 2],
    [1, 2, 2],
    [1, 3, 2],
    [3, 2, 5],
    [2, 1, 1],
    [1, 1],
    [4, 2, 1],
    [2, 2, 2, 2],
    [1, 1, 2, 5],
    [2, 5],
  ];
  let leftNumData = [
    [3],
    [4, 2, 1],
    [3, 1, 1, 1],
    [3, 1, 2, 1],
    [2, 1, 2],
    [4, 2, 2],
    [2, 2, 2],
    [1, 3, 1],
    [2, 2, 1],
    [4, 3],
    [1, 1, 2, 2],
    [1, 1, 1],
    [1, 1, 1],
    [5, 2],
    [3, 2, 3],
  ];

  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 86;
  resetTime();
  removeCheckedCrossed();
}
chessBtn.addEventListener("click", generateChessNum);
function generateChessNum() {
  removeAllNum(leftNumbers, topNumbers);
  removeActive();
  allSquares[11].classList.add("active");
  allSquares[12].classList.add("active");
  allSquares[25].classList.add("active");
  allSquares[26].classList.add("active");
  allSquares[28].classList.add("active");
  allSquares[40].classList.add("active");
  allSquares[41].classList.add("active");
  allSquares[42].classList.add("active");
  allSquares[43].classList.add("active");
  allSquares[56].classList.add("active");
  allSquares[57].classList.add("active");
  allSquares[71].classList.add("active");
  allSquares[72].classList.add("active");
  allSquares[85].classList.add("active");
  allSquares[86].classList.add("active");
  allSquares[87].classList.add("active");
  allSquares[88].classList.add("active");
  allSquares[100].classList.add("active");
  allSquares[101].classList.add("active");
  allSquares[103].classList.add("active");
  allSquares[114].classList.add("active");
  allSquares[115].classList.add("active");
  allSquares[116].classList.add("active");
  allSquares[117].classList.add("active");
  allSquares[119].classList.add("active");
  allSquares[129].classList.add("active");
  allSquares[130].classList.add("active");
  allSquares[131].classList.add("active");
  allSquares[132].classList.add("active");
  allSquares[133].classList.add("active");
  allSquares[136].classList.add("active");
  allSquares[137].classList.add("active");
  allSquares[138].classList.add("active");
  allSquares[143].classList.add("active");
  allSquares[144].classList.add("active");
  allSquares[145].classList.add("active");
  allSquares[146].classList.add("active");
  allSquares[147].classList.add("active");
  allSquares[148].classList.add("active");
  allSquares[149].classList.add("active");
  allSquares[150].classList.add("active");
  allSquares[151].classList.add("active");
  allSquares[152].classList.add("active");
  allSquares[154].classList.add("active");
  allSquares[158].classList.add("active");
  allSquares[159].classList.add("active");
  allSquares[160].classList.add("active");
  allSquares[161].classList.add("active");
  allSquares[162].classList.add("active");
  allSquares[163].classList.add("active");
  allSquares[164].classList.add("active");
  allSquares[165].classList.add("active");
  allSquares[166].classList.add("active");
  allSquares[167].classList.add("active");
  allSquares[169].classList.add("active");
  allSquares[174].classList.add("active");
  allSquares[175].classList.add("active");
  allSquares[176].classList.add("active");
  allSquares[177].classList.add("active");
  allSquares[178].classList.add("active");
  allSquares[179].classList.add("active");
  allSquares[180].classList.add("active");
  allSquares[181].classList.add("active");
  allSquares[182].classList.add("active");
  allSquares[183].classList.add("active");
  allSquares[184].classList.add("active");
  allSquares[189].classList.add("active");
  allSquares[190].classList.add("active");
  allSquares[191].classList.add("active");
  allSquares[192].classList.add("active");
  allSquares[193].classList.add("active");
  allSquares[194].classList.add("active");
  allSquares[196].classList.add("active");
  allSquares[197].classList.add("active");
  allSquares[198].classList.add("active");
  allSquares[205].classList.add("active");
  allSquares[206].classList.add("active");
  allSquares[207].classList.add("active");
  allSquares[208].classList.add("active");
  allSquares[210].classList.add("active");
  allSquares[211].classList.add("active");
  allSquares[212].classList.add("active");
  allSquares[213].classList.add("active");
  allSquares[214].classList.add("active");
  allSquares[215].classList.add("active");
  allSquares[216].classList.add("active");
  allSquares[217].classList.add("active");
  allSquares[218].classList.add("active");
  allSquares[219].classList.add("active");
  allSquares[220].classList.add("active");
  allSquares[221].classList.add("active");
  allSquares[222].classList.add("active");
  allSquares[223].classList.add("active");
  allSquares[224].classList.add("active");
  let topNumData = [
    [3, 1],
    [6],
    [6],
    [1, 3],
    [3, 1],
    [1],
    [1],
    [1],
    [2, 1],
    [6, 1],
    [2, 10],
    [15],
    [1, 4, 8],
    [2, 2, 7],
    [1, 4, 1],
  ];
  let leftNumData = [
    [2],
    [2, 1],
    [4],
    [2],
    [2],
    [4],
    [2, 1],
    [4, 1],
    [5],
    [3, 7],
    [3, 1, 7],
    [3, 1, 6],
    [5, 6],
    [3, 4],
    [15],
  ];

  generateNonogram(topNumData, leftNumData);
  correctSquaresNum = 94;
  resetTime();
  removeCheckedCrossed();
}
//Уровни
const levels = document.createElement("div");
levels.classList.add("nonogram__levels");
nonogramContainer.append(levels);
levels.innerHTML = `
<a href="../index.html" class="level__easy level">Easy</a>
<a href="../middle level/index.html" class="level__middle level">Middle</a>
<button disabled class="level__btn"><a href="#" class="level__hard level">Hard</a></button>
`;

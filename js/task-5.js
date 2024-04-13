'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

function randomColor() {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = getRandomHexColor();
}
changeColorBtn.addEventListener('click', randomColor);
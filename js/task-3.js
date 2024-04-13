'use strict';
const nameInput = document.querySelector('.name-input');
const nameOutput = document.querySelector('.name-output');

const getInputValue = event => {
  const inputValue = event.currentTarget.value.trim();

  const outputText = inputValue.length > 0 ? inputValue : 'Anonymous';
  nameOutput.textContent = outputText;
 
};

nameInput.addEventListener('input', getInputValue);
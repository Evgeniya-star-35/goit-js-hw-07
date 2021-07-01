'use strict';

const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize() {
  const size = inputEl.value;

  spanEl.style.fontSize = size + 'px';
}

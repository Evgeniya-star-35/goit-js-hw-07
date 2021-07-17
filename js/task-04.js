const valueEl = document.querySelector('#value');
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

buttonDec.addEventListener('click', decrement);
buttonInc.addEventListener('click', increment);
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const [buttonDec, value, buttonInc] =
//   document.querySelector('#counter').children;

// const increment = () => (value.textContent = +value.textContent + 1);

// const decriment = () => (value.textContent -= 1);

// buttonInc.addEventListener('click', increment);
// buttonDec.addEventListener('click', decriment);

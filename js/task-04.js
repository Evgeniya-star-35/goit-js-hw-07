// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const valueEl = document.querySelector('#value');

// const buttonDec = document.querySelector('[data-action="decrement"]');
// const buttonInc = document.querySelector('[data-action="increment"]');

// buttonInc.addEventListener('click', function () {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });
// buttonDec.addEventListener('click', function () {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

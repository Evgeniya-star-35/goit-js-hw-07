// const createBtn = document.querySelector('[data-action="render"]');
// // console.log(createBtn);
// const clearBtn = document.querySelector('[data-action="destroy"]');
// // console.log(clearBtn);
// const divBoxes = document.getElementById('boxes');

// const getValue = () => {
//   const amount = +document.querySelector('#controls input').value;
//   createBoxes(amount);
// };

// // console.log(divEl);
// // console.log(divBoxes);

// const createBoxes = amount => {
//   let size = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     let newSize = size + i * 10;
//     const divEl = document.createElement('div');
//     divEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
//     fragment.appendChild(divEl);
//   }
//   divBoxes.appendChild(fragment);
// };

// const destroyBoxes = () => {
//   divBoxes.innerHTML = '';
// };

// function randomColor() {
//   return Math.floor(Math.random() * 256);
// }
// createBtn.addEventListener('click', getValue);
// clearBtn.addEventListener('click', destroyBoxes);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const refs = {
//   inputAmount: document.querySelector('#controls input'),
//   addButton: document.querySelector('[data-action="render"]'),
//   clearButton: document.querySelector('[data-action="destroy"]'),
//   boxes: document.querySelector('#boxes'),
// };
// console.log(refs.inputAmount);
// console.log(refs.addButton);
// console.log(refs.clearButton);
// console.log(refs.boxes);

// const randomColor = () => {
//   const r = Math.round(Math.random() * 256);
//   const g = Math.round(Math.random() * 256);
//   const b = Math.round(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// };
// const color = randomColor();
// console.log(color);
// function createBoxes(amount) {
//   // const newDiv = [];
//   let size = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     // const size = 30 + i * 10;
//     let newSize = size + i * 10;
//     const divEl = document.createElement('div');
//     // divEl.style.backgroundColor = color;
//     // divEl.style.width = `${size}px`;
//     // divEl.style.height = `${size}px`;

//     divEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: ${color}, ${color}, ${color}`;
//     // newDiv.push(divEl);
//     fragment.appendChild(divEl);
//   }
//   refs.boxes.append(fragment);
//   // refs.boxes.append(...newDiv);
// }

// function destroyBoxes() {
//   refs.inputAmount.value = '';
//   refs.boxes.innerHTML = '';
// }

// refs.addButton.addEventListener('click', () =>
//   createBoxes(refs.inputAmount.value),
// );
// refs.clearButton.addEventListener('click', destroyBoxes);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx variant Dima xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const btnRender = document.querySelector("[data-action='render']");
const btnDestroy = document.querySelector("[data-action='destroy']");
const divBox = document.querySelector('#boxes');
const input = document.querySelector('input');

const min = +input.getAttribute('min');
const max = +input.getAttribute('max');
const step = +input.getAttribute('step');

btnRender.addEventListener('click', render);
btnDestroy.addEventListener('click', destroy);
let size = 30;

function render() {
  let arrDiv = [];
  if (+input.value > min && +input.value <= max) {
    for (let i = 0; i < +input.value; i += step) {
      const divEl = document.createElement('div');
      divEl.style.background = createRandom();
      divEl.style.width = size + 'px';
      divEl.style.height = size + 'px';
      size += 10;

      arrDiv.push(divEl);
    }
    divBox.append(...arrDiv);
  } else {
    alert(`Try once more`);
  }
}

function destroy() {
  input.value = '';
  size = 30;
  divBox.innerHTML = '';
}

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
}

const createBtn = document.querySelector('[data-action="render"]');
// console.log(createBtn);
const clearBtn = document.querySelector('[data-action="destroy"]');
// console.log(clearBtn);
const divBoxes = document.getElementById('boxes');

const getValue = () => {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
};

// console.log(divEl);
// console.log(divBoxes);

const createBoxes = amount => {
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let newSize = size + i * 10;
    const divEl = document.createElement('div');
    divEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    fragment.appendChild(divEl);
  }
  divBoxes.appendChild(fragment);
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};

function randomColor() {
  return Math.floor(Math.random() * 256);
}
createBtn.addEventListener('click', getValue);
clearBtn.addEventListener('click', destroyBoxes);

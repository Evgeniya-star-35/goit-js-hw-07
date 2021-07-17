// const refs = {
//   nameInput: document.querySelector('#name-input'),
//   nameOutput: document.querySelector('#name-output'),
// };

// refs.nameInput.oninput = function (event) {
//   if (refs.nameInput.value === '') {
//     refs.nameOutput.textContent = 'незнакомец';
//   } else {
//     refs.nameOutput.textContent = event.currentTarget.value;
//   }
// };

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
console.dir(nameInput);
nameInput.addEventListener('input', onInput);

function onInput({ target: { value } }) {
  // if (value.trim() === '') {
  //   nameOutput.textContent = 'незнакомец';
  // } else {
  //   nameOutput.textContent = value;
  // }
  nameOutput.textContent = value.trim() === '' ? 'незнакомец' : value;
}

// const nameEl = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// console.log(nameEl);
// console.log(nameOutput);
// nameEl.addEventListener('input', onFormInput);

const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
refs.nameInput.addEventListener('input', onInputChange);
function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
}
if (refs.nameInput.textContent === '') {
  refs.nameInput.textContent = 'незнакомец';
}
// : refs.nameInput;

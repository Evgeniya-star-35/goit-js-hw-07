const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.oninput = function (event) {
  if (refs.nameInput.value === '') {
    refs.nameOutput.innerHTML = 'незнакомец';
  } else {
    refs.nameOutput.innerHTML = refs.nameInput.value;
  }
};

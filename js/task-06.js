// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);
inputEl.addEventListener('blur', onInputChange);

function onInputChange() {
  if (inputEl.value.length === +inputEl.dataset.length) {
    classToggle('valid', 'invalid');
  } else {
    classToggle('invalid', 'valid');
  }
}
function classToggle(add, remove) {
  inputEl.classList.add(add);
  inputEl.classList.remove(remove);
}

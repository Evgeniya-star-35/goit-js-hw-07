'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const listElem = document.querySelector('#ingredients');

const showGallery = ingredients.reduce((acc, el) => acc + `<li>${el}</li>`, '');

listElem.insertAdjacentHTML('beforeend', showGallery);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const listEl = document.querySelector('#ingredients');
// const vegList = ingredients.map(el => {
//   const itemVegs = document.createElement('li');
//   itemVegs.append(el);

//   return itemVegs;
// });

// listEl.append(...vegList);

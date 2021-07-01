// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
const itemGallery = document.querySelectorAll('li.item');

console.log(`В списке ${itemGallery.length} категории.`);

const navElem = document.querySelector('#categories');

const totalItem = navElem.children.length;

const itemsEl = document.querySelectorAll('.item');
for (const item of itemsEl) {
  console.log(`Категория:`, item.firstElementChild.textContent);
  console.log(`Количество элементов :`, item.lastElementChild.children.length);
}

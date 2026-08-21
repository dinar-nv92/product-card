import { cosmeticList } from "./products.js";

// 3. Создание шаблона для продуктовых карточек
const productTemplate = document.getElementById('card-template');
const productList = document.getElementById('product-list');

function renderCards(list) {
  productList.innerHTML = '';
list.forEach(cosmetic => {
  const cosmeticClone = productTemplate.content.cloneNode(true);
  cosmeticClone.querySelector('.card__image').src = cosmetic.img;
  cosmeticClone.querySelector('.card__image').alt = cosmetic.alt;
  cosmeticClone.querySelector('.card__category').textContent = cosmetic.category;
  cosmeticClone.querySelector('.card__name').textContent = cosmetic.name;
  cosmeticClone.querySelector('.card__description').textContent = cosmetic.description;
  
  const compoundList = cosmeticClone.querySelector('.compound__list');
  cosmetic.compound.forEach(item => {
    const tagLi = document.createElement('li');
    tagLi.className = 'compound__list';
    tagLi.textContent = item;
    compoundList.appendChild(tagLi);
  });

  cosmeticClone.querySelector('.card__price--quantity').textContent = `${cosmetic.price.toLocaleString('ru-RU')} ₽`;

  productList.appendChild(cosmeticClone);
})};

// 4. Массив с названием и описанием
const nameAnDescription = cosmeticList.reduce((acc, product) => {
  const key = {};
  key[product.name] = product.description;
  acc.push(key);
  return acc;
}, []);
console.log(nameAnDescription);

// 5*. Реализация двух функций с использованием prompt
function getNumberOfCards() {
const numberOfCards = prompt('Сколько карточек отобразить? От 1 до 5', '0');
if (numberOfCards === null) {
  console.log("Ввод отменен")
  return null
} else {
    const number = Number(numberOfCards);
  if (Number.isNaN(number) || number > 5 || number < 1) {
    console.log('Некоректный ввод');
  return null
  } else {
    console.log('Вы ввели число:', number);
    return number
  }
}};

const number = getNumberOfCards()
const renderWithPrompt = cosmeticList.filter((num) => number >= num.id)
renderCards(renderWithPrompt)







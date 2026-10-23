import './Modal.js';
import './Form.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';


//Переменные
const cosmeticCard = document.querySelector('.products__item');
const allCards = document.querySelectorAll('.products__item');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-card');
const anotherСolor = '#ddbaba';
const goToGoogle = document.querySelector('#transition-to-Google');
const googleURL = 'https://google.com';

//Изменение цвета первой карточки
changeColorFirstCardButton.addEventListener('click', () => {
  cosmeticCard.style.backgroundColor = anotherСolor;
})

//Изменение цвета всех карточек
changeColorAllCardsButton.addEventListener('click', () => {
  allCards.forEach((card) => card.style.backgroundColor = anotherСolor);
})

//Кнопка перехода в Гугл
goToGoogle.addEventListener('click', openGoogle)
  function openGoogle() {
    const answer = confirm('Вы действительно хотите перейти на сайт Google.com?');
    if (answer === true) {
      window.open(googleURL)
    } else {
      return;
    }
  }
  
//Вывод консоль лог и alert
const outLogAndAlert = document.querySelector('#out-log-and-alert');
outLogAndAlert.addEventListener('click', () => outputLog('ДЗ№6'))
function outputLog(message) {
  alert(message)
  console.log(message)
}

//Вывод заголовка в консоль
const outTittleOnConsole = document.querySelector('.tittle');
const contentTittle = outTittleOnConsole.innerHTML;
outTittleOnConsole.addEventListener('mouseover', () => {
  console.log(contentTittle)
})

//Изменить цвет кнопки
const changeColorButton = document.querySelector('#change-color-button');
let isViolet = false;
changeColorButton.addEventListener('click', () => {
  if (isViolet) {
    changeColorButton.style.backgroundColor = '#ec7777';
  } else {
    changeColorButton.style.backgroundColor = '#7c2266';
  }
  isViolet = !isViolet;
})

//ДЗ№12. Создание классов
class WashingMachine {
  constructor(brand, model, carrying) {
    this.brand = brand;
    this.model = model;
    this.carrying = carrying;
  }
  startWashing() {
    console.log(`${this.brand} ${this.model} запустил стирку`)
  }
}

const samsung = new WashingMachine("samsung", "diamond", "5 кг");
samsung.startWashing();


class VerticalWashing extends WashingMachine {
  constructor(brand, model, carrying, width, height, length) {
    super(brand, model, carrying)
    this.height = height;
    this.width = width;
    this.length = length;
  }
  dimensions() {
    console.log(`Габариты стиральной машины ${this.brand} ${this.model} ${this.width}X${this.height}X${this.length}`)
  }
}

const indesit = new VerticalWashing("indesit", "innex", "8 кг", 40, 90, 60);
indesit.startWashing();
indesit.dimensions()
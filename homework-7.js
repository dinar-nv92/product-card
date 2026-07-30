//3 задание. Температура в городе
function weather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
weather(`Уфе`, `30`);

//4 задание. Сравнение заданной скорости со скоростью света
const LIGHT_SPEED = 299792458
function speedComparison(speed) {
  if(speed>LIGHT_SPEED) {
    console.log(`Сверхсветовая скорость (${speed})`)
  } else if(speed<LIGHT_SPEED) {
    console.log(`Субсветовая скорость (${speed})`)
  } else {
    console.log(`Скорость света (${speed})`)
  }
};
speedComparison(300000000)
speedComparison(200000000)
speedComparison(299792458)

//5 задание. Покупка товара
const product = "Диван";
let price = 536;
function buyingSofa(budget) {
  if(budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else {
    let budgetDifference = (price - budget)
    console.log(`Вам не хватает ${budgetDifference}$, пополните баланс`)
  }
};
buyingSofa(380)
buyingSofa(536)

//6 задание. Создание своей функции
function microclimateControl(temperatureHome) {
  if(temperatureHome>=25) {
    console.log("Включить кондиционер")
  } else if(temperatureHome<19) {
    console.log("Включить обогреватель")
  } else {
    console.log("Комфортная температура")
  }
}
microclimateControl(21)
microclimateControl(26)
microclimateControl(18)

//7 задание. Создание переменных
const PI = 3.14;
var password = "qwerty";
let discount = 20

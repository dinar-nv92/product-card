class Drink {
  #temperature;
  
  constructor(name, size, price, temperature) {
    if(new.target === Drink) {
      throw new Error ("Класс Drink является абстрактным, используйте наследников")
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  getInfo() {
    return `Название напитка:${this.name}, размер:${this.size}, цена:${this.price} руб.`
  }
  #prepare() {
    console.log(`Готовим напиток:${this.name} (${this.size})`)
    const idealTemp = this.setIdealTemp();
    this.#temperature = idealTemp;
    console.log(`Ваш напиток:${this.name} (${this.size}) готов. Температура:${this.#temperature}°С`)
  }
  setIdealTemp() {
    return 0
  }  
  getTemperature() {
    return this.#temperature
  }
  serve() {
    this.#prepare()
    console.log(`Напиток ${this.name} (${this.size}) подан`)
  }
}

class Coffee extends Drink {
  constructor(size, price, roastLevel, country) {
    super("Кофе", size, price, 0)
    this.roastLevel = roastLevel;
    this.country = country;
  }
  setIdealTemp() {
    return 50
  }
  getInfo() {
    const baseInfo = super.getInfo()
    return `${baseInfo}, степень помола:${this.roastLevel}, страна:${this.country}`
  }
}

class Tea extends Drink {
  constructor (size, price, teaType, sugar) {
    super ("Чай", size, price, 0)
    this.teaType = teaType;
    this.sugar = sugar
  }
  setIdealTemp() {
    return 70
  }
  getInfo() {
    const baseInfo = super.getInfo()
    return `${baseInfo}, тип листа:${this.teaType}, наличие сахара:${this.sugar}`
  }
}

class Lemonade extends Drink {
  constructor (size, price, presenceOfGas, taste){
    super ("Лимонад", size, price, 0)
    this.presenceOfGas = presenceOfGas;
    this.taste = taste
  }
  setIdealTemp() {
    return 5
  }
  getInfo() {
    const baseInfo = super.getInfo()
    return `${baseInfo}, наличие газа:${this.presenceOfGas}, вкус:${this.taste}`
  }
}

class Milkshake extends Drink {
  constructor (size, price, syrup, berries) {
    super ("Молочный коктейль", size, price, 0)
    this.syrup = syrup;
    this.berries = berries
  }
   setIdealTemp() {
    return 7
  }
  getInfo() {
    const baseInfo = super.getInfo()
    return `${baseInfo}, сироп:${this.syrup}, ягоды:${this.berries}`
  }
}

const latte = new Coffee ("большой", 250, "сильный", "Эфиопия");
const greenTea = new Tea ("средний", 75, "черный лист", "с сахаром");
const tarkhun = new Lemonade ("маленький", 30, "газированный", "тархун");
const classicMilkshake = new Milkshake ("большой", 300, "без сиропа", "клубника")

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location
  }
  getInfo() {
    return `Название кафе:${this.name}, расположение:${this.location}`
  }
  orderDrink(drinkName) {
    drinkName.serve()
    console.log(drinkName.getInfo())
  }
}

const coffeeStan = new Cafe ("Кофестан", "ул.Мира д.12")
console.log(coffeeStan.getInfo())
coffeeStan.orderDrink(latte)
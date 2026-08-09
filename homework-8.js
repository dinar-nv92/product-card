
//3.Создание объекта на основе личных данных
const developer = {
  name: "Динар",
  surname: "Ахметов",
  age: 34,
  country: "Россия",
  city: "Уфа",
  married: true,
  telegramName: "@dinar_nv92",
  profession: "Инженер",
  email: "dinarnv1992@gmail.com"
}

//4.Данные об автомобиле и добавление владельца из 3 пункта
const auto = {
  brand: "Тойота",
  model: "Королла",
  yearOfManufacture: 2006,
  color: "Серебристый",
  transmission: "МКПП"
}

const master = "owner"
auto[master] = developer
console.log(auto)

//5.Проверка наличия максимальной скорости
function addMaxSpeed(obj) {
  if ("maxSpeed" in auto) {return
  } else {
    Object.assign(auto, {maxSpeed: 220})
  }
}
addMaxSpeed(auto)
console.log(auto)

//6.Функция с аргументами объект и свойство
function propertyOutput(obj, key) {
  return obj[key]
}
console.log(propertyOutput(developer, "name"))

//7.Создание массива
const rivers = ["Волга", "Обь", "Енисей", "Лена", "Днепр"]

//8.Массив из объектов
const movies = [
  {name:"Интерстеллар", director:"Кристофер Нолан", yearOfRelease:2014, duration:"2 ч 49 мин", genre:"фантастика"},
  {name:"Зеленая миля", director:"Фрэнк Дарабонт", yearOfRelease:1999, duration:"3 ч 9 мин", genre:"драма"},
  {name:"Остров проклятых", director:"Мартин Скорсезе", yearOfRelease:2009, duration:"2 ч 18 мин", genre:"триллер"},
  {name:"Бойцовский клуб", director:"Дэвид Финчер", yearOfRelease:1999, duration:"2 ч 19 мин", genre:"триллер"}
];
movies.push(
  {name:"Форрест Гамп", director:"Роберт Земекис", yearOfRelease:1994, duration:"2 ч 22 мин", genre:"драма"}
);

// 9.Создание еще одного массива и объединение
const moviesTaxi = [
  {name:"Такси", director:"Жерар Пирес", yearOfRelease:1998, duration:"1 ч 29 мин", genre:"боевик"},
  {name:"Такси2", director:"Жерар Кравчик", yearOfRelease:2000, duration:"1 ч 28 мин", genre:"боевик"},
  {name:"Такси3", director:"Жерар Кравчик", yearOfRelease:2003, duration:"1 ч 24 мин", genre:"боевик"},
  {name:"Такси4", director:"Жерар Кравчик", yearOfRelease:2007, duration:"1 ч 31 мин", genre:"боевик"}
];
const allMovies = [...movies, ...moviesTaxi];
console.log(allMovies)

// 10.Метод массива map
function rarityMoves(allMovies) {
  return allMovies.map(allMovies => {
    let isRare
    if (allMovies.yearOfRelease<2000){
      return {...allMovies, isRare:true}
    } else {
      return {...allMovies, isRare:false}
    }
  })
}
const rarityCinema = rarityMoves(allMovies);
console.log(rarityCinema)




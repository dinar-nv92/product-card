//УРОВЕНЬ1

import { commentSocialMedia } from "./comments.js";

// 2. Создание массива от 1 до 10 и фильтрация с 5
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumber = numberArray.filter(num => num > 4);
console.log(filteredNumber)

// 3. Массив строк с проверкой наличия сущности
const furnitures = ["стол", "стул", "диван", "кресло", "шкаф"];
console.log(furnitures.includes("кровать"))

// 4. Функция переворачивающая массив
function reverseArray(array) {
  return [...array].reverse();  
};

const reverseNumber = reverseArray(numberArray);
const reverseFurnitures = reverseArray(furnitures);

console.log(reverseNumber);
console.log(reverseFurnitures);

//УРОВЕНЬ2
// 7. Массив комментариев пользователей с .com
const mailCom = commentSocialMedia.filter(comment => comment.email.includes(".com"));
console.log(mailCom);

// 8. Изменение postId пользователей
const changeId = commentSocialMedia.map(comment => {
  if (comment.id <= 5) {
    return {...comment, postId: 2};
  } else {
    return {...comment, postId: 1}}
});
console.log(changeId);

// 9. Собрать массив только с айди и именем
const idAndName = commentSocialMedia.map (comment =>
({id: comment.id, name: comment.name}));
console.log(idAndName);

// 10. Добавляем в массив свойство isInvalid
const addIsInvalid = commentSocialMedia.map (comment =>
  { if (comment.body.length > 180)
    return {...comment, isInvalid: true}
   else {
    return {...comment, isInvalid: false}
  }}
)
console.log(addIsInvalid);

//УРОВЕНЬ3
// 11. Метод массива reduce + то же самое с map
const mailArray = commentSocialMedia.reduce((acc, commentMail) => {
  acc.push(commentMail.email);
  return acc;
}, []);
console.log(mailArray);

const mailArrayMap = commentSocialMedia.map(comment => comment.email);
console.log(mailArrayMap);

// 12. Методы toString() и join() 
const mailToString = mailArray.toString();
console.log(mailToString);

const mailJoin = mailArray.join("; ");
console.log(mailJoin)
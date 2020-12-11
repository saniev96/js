"use strict";
// Задание 1
let sum =2756;
let discountFive = 0.05;
let discountTen = 0.1;
let answer;

if (sum < 1000) {
  answer = "скидка не предусмотрена";
} else if (sum >= 1000 && sum < 2000) {
  sum = sum - (sum * discountFive);
  answer = "ваша скидка 5%";
} else if (sum >= 2000 && sum < 3000) {
  sum = sum - (sum * discountTen);
  answer = "ваша скидка 10%";
} else if (sum >= 3000) {
  sum = sum - (sum * discountTen);
  answer = "ваша скидка 10% + подарок";
} else {
  answer = "что-то пошло не так";
}
console.log(`Сумма вашей покупки составит: ${sum},`, answer);

// Задание 2
let lang = "javascript";
let salary = 90009;
let result;

if (lang === "javascript") {
  if (salary > 100000) {
    result = "Приглашаем Вас на собеседование";
  }
  if (salary < 100000) {
    result = "Мы перезвоним Вам в ближайшее время";
  }
} else {
  result = "Вы нам не подходите";
}
console.log(result);

// Задание 3
const MONTH = 'Январь';
let season;
switch(MONTH) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
        season = 'Зима';
        break;
    case 'Март':
    case 'Апрель':
    case 'Май':
        season = 'Весна';
        break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
        season = 'Лето';
        break;
    case 'Сентябрь':
    case 'Октябрь':
    case 'Ноябрь':
        season = 'Осень';
        break;
}
console.log(season);
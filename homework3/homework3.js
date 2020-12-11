"use strict";
// 1. Задание
let n = 1;
for (let i = 0; i < 20; i++) {
  n = n * 2;
  console.log(n);
}

// Задача 2. Вывести в консоль все неотрицательные элементы последовательности 90 85 80 75 70 65 60...N
let m = 90;
do {
  m = m - 5;
  console.log(m);
} while (m >= 1);


// 3. Задание
  console.log('Exersize6');
   let array2 = [
          [23, 56, 78, 12, -900],
          [0, 0, 67, -3, 621],
          [89, 67, 12],
          [23, 56, 78, 12, -900, 89, 33, 21]
       ]

   let sum = 0;
  for (let i = 0; i < array2.length; i++) {
  	for (let d = 0; d < array2[i].length; d++) {
  		array2[i][d] += 10;

  		console.log(`Текущая сумма ${sum} добавлено ${array2[i][d]}`)
  		sum += array2[i][d];
  	}

  }

  console.log(`Сумма элементов массива ${sum}`);
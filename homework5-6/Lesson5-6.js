'use strict';

function getCountOfProduct(count) {
	if(count < 11 || count > 20) {
		let count1 = (count % 10);
		switch (count1) {
		case 0:  
			return (count + ' товаров');
			break;
		case 1:  
			return (count + ' товар');
			break;
		case 2:  
		case 3:  
		case 4:  
			return (count + ' товара');
			break;
		case 5:  
		case 6:  
		case 7:  
		case 8:  
		case 9:  
			return (count + ' товаров');
			break;
		default:
			return (count + ' некорректен');
		}
	} else {
		return (count + ' товаров');
	}
}

console.log(getCountOfProduct(12));

function range(a, b, c = 1) {
	let arr = [];
	while(a <= b) {
		arr.push(a);
		a = a + c;
	}
	return arr;
}

console.log(range(12, 20));
console.log(range(2, 20, 2));
console.log(range(1, 20, 3));
console.log(range(0, 20, 4));
console.log(range(12, 10));

function calculateSummOfDigits(n) {
	if (n > 10) {
		var temp = n % 10;
		return temp + calculateSummOfDigits((n - temp) / 10);
	} else {
		return n;
	}
}

console.log(calculateSummOfDigits(12345));

let numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12]
]

for (var i = numsArr.length - 1; i >= 0; i--) {
	for (var j = numsArr[i].length - 1; j >= 0; j--) {
		numsArr[i][j] += 10;
	}
}

console.log(numsArr);

numsArr = [
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12]
]

let posititveNumsArr = [];

for (var i = numsArr.length - 1; i >= 0; i--) {
	let temp = [];
	for (var j = numsArr[i].length - 1; j >= 0; j--) {
		if(numsArr[i][j] > 0) {
			temp.push(numsArr[i][j]);
		}
	}
	posititveNumsArr.push(temp);
}

console.log(posititveNumsArr);

function spamCheck(text) {
	let count = text.split(' ').filter(item => item == 'spam').length;
	switch (count) {
		case 0:
			return 5;
		case 1:
		case 2:
			return 4;
		case 3:
		case 4:
		case 5:
			return 3;
		default:
			return 2;
	}
}

console.log(spamCheck('spam spam spam spam spam spam spam spam spam spam spam text'));
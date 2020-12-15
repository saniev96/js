let goods = {
	piano: {
		title: "Пианино",
		price: 3000,
		count: 25
	},
	guitar: {
		title: "Гитара",
		price: 1200,
		count: 40
	},
	drum: {
		title: "Барабаны",
		price: 2700,
		count: 12
	},
	flute: {
		title: "Флейта",
		price: 900,
		count: 50
	},
	harp: {
		title: "Арфа",
		price: 3400,
		count: 5
	}
};

function getByTitle(title, countToCart, goods) {
	for(var key in goods) {
		if(goods[key]["title"] == title) {
			if(countToCart <= goods[key]["count"]) {
				goods[key]["count"] -= countToCart;
				console.log("Данного товара достаточно на складе");
			} else {
				console.log("Данного товара НЕдостаточно на складе");
			}
			break;
		}
	}
	console.log("Данный товар НЕ найден на складе");
}

getByTitle("Пианино", 25, goods);
console.log(goods["piano"]);

let books = []
books[0] = {
	book: "Властелин колец",
	author: "Джон Р. Р. Толкин"
}
books[1] = {
	book: "Братство Кольца",
	author: "Джон Р. Р. Толкин"
}
books[2] = {
	book: "Две крепости",
	author: "Джон Р. Р. Толкин"
}
books[3] = {
	book: "Возвращение короля",
	author: "Джон Р. Р. Толкин"
}
books[4] = {
	book: "Хоббит, или Туда и обратно",
	author: "Джон Р. Р. Толкин"
}
books[5] = {
	book: "Гордость и предубеждение",
	author: "Джейн Остин"
}
books[6] = {
	book: "«Автостопом по галактике",
	author: "Дуглас Адамс"
}
books[7] = {
	book: "Гарри Поттер и Кубок огня",
	author: "Джоан Роулинг"
}
books[8] = {
	book: "Гарри Поттер и философский камень",
	author: "Джоан Роулинг"
}
books[9] = {
	book: "Гарри Поттер и Тайная комната",
	author: "Джоан Роулинг"
}
books[10] = {
	book: "Гарри Поттер и узник Азкабана",
	author: "Джоан Роулинг"
}
books[11] = {
	book: "Гарри Поттер и Кубок огня",
	author: "Джоан Роулинг"
}
books[12] = {
	book: "Гарри Поттер и Орден Феникса",
	author: "Джоан Роулинг"
}

function getBooks(author, books) {
	let authorsBooks = [];
	for (var i = books.length - 1; i >= 0; i--) {
		if(books[i]["author"] == author) {
			authorsBooks.push(books[i]);
		}
	}
	return authorsBooks;
}

console.log(getBooks("Джоан Роулинг", books))

let group = [];
group[0] = {
	firstname: "Алексей",
	secondname: "Фёдорович",
	lastname: "Цапник"
}
group[1] = {
	firstname: "Борис",
	secondname: "Ефимович",
	lastname: "Харламов"
}
group[2] = {
	firstname: "Вадим",
	secondname: "Прокофьевич",
	lastname: "Чкалов"
}
group[3] = {
	firstname: "Геннадий",
	secondname: "Игнатьевич",
	lastname: "Шарапов"
}
group[4] = {
	firstname: "Дмитрий",
	secondname: "Алексеевич",
	lastname: "Щербаков"
}
group[5] = {
	firstname: "Евгений",
	secondname: "Евгеньевич",
	lastname: "Южный"
}
group[6] = {
	firstname: "Жорж",
	secondname: "Милославович",
	lastname: "Яблонский"
}

function compare(param) {	
    return function(a, b) {
    	return (a[param] < b[param]) ? -1 : (a[param] > b[param]) ? 1 : 0;
    };
}

function sortByParam(param, objectArray) {
	return objectArray.sort(compare(param));
}

console.log(sortByParam("secondname", group))
let articles = [
	{
		id: 1,
		title: "JS",
		text: "Статья про ",
		author: "Александр"
	},
	{
		id: 2,
		title: "PHP",
		text: "Статья про ",
		author: "Виталий"
	},
	{
		id: 3,
		title: "Базы Данных",
		text: "Статья про ",
		author: "Евгения"
	},
	{
		id: 4,
		title: "HTML",
		text: "Статья про ",
		author: "Виталий"
	},
]

let goods = [
	{
		title: "Пианино",
		price: 3000,
		count: 25
	},
	{
		title: "Гитара",
		price: 1200,
		count: 40
	},
	{
		title: "Барабаны",
		price: 2700,
		count: 12
	},
	{
		title: "Флейта",
		price: 900,
		count: 50
	},
	{
		title: "Арфа",
		price: 3400,
		count: 5
	}
];

function genereateTable(objArray) {

	var body = document.getElementsByTagName("body")[0];

	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");

	for (var i = objArray.length - 1; i >= 0; i--) {
		var row = document.createElement('tr');
		for(var key in objArray[i]) {
			if(i == 0) {
				var cell = document.createElement('th');
				var cellText = document.createTextNode(key);
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			var cell = document.createElement('td');
			var cellText = document.createTextNode(objArray[i][key]);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	tbl.setAttribute("border", "2");
}
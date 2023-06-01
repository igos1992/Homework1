// Задание 1 - Выполнено

let upper = 'js';

console.log(upper.toUpperCase());

// Задание 2 - Выполнено

const products = ['яблоко', 'груша', 'гриб', 'огурец'];
const search = 'г';

products.forEach((product) => {
	if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
});

// Задание - 3 - Выполнено

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

// Задание 4 - Выполнено

let least = Math.min(52, 53, 49, 77, 21, 32);
let greatest = Math.max(52, 53, 49, 77, 21, 32);

console.log(`Наименьшеее число ${least}, а Наибольшее число ${greatest}`);

// Задание 5 - Выполнено

function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(1, 10));

// Задание 6 - Выполнено

function getRandomArrNumbers(num) {
  return (Array.from({length: num / 2}, () => Math.round(Math.random() * num)))
}
console.log(getRandomArrNumbers(5));

// Задание 7 - Выполнено

function numberInNature(a, b) {
  return Math.round((Math.random() * (b - a)) + a);
}

console.log(numberInNature(10, 24));

// Задание 8 - Выполнено

let dateToday = new Date();
console.log(dateToday); 

// Задание 9 - Выполнено

let currentDate  = new Date();
currentDate.setDate(103);
console.log(currentDate);

// Задание 10 - Выполнено

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let myDate = new Date();
let TheCurrentDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()]; 
let currentTime = "Текущее время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(TheCurrentDate);
console.log(currentTime);

// Или лучше так

const allDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const allMonths = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let date = new Date();
let dateSoFar = "Дата: " + date.getDate() + " " + allMonths[date.getMonth()] + " " + date.getFullYear() + " " + "года" + " - это " + allDays[date.getDay()];
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds(); 

if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
if (second < 10) {
  second = "0" + second;
};

console.log(dateSoFar);
console.log("Текущее время: " + hour + ":" + minute + ":" + second);

// Задание 11 - Выполнено

function game2() {
  

let gameTwo = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
gameTwo = gameTwo.sort(() => Math.random() - 0.5);

alert(gameTwo);

let firstQuestion = prompt("Чему равнялся первый элемент массива?");
let secondQuestion = prompt('Чему равнялся последний элемент массива?');
if (gameTwo[0].toLowerCase() === firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() === secondQuestion.toLowerCase()) {
  alert('Поздравляем, Вы ответили верно');
} else if(gameTwo[0].toLowerCase() === firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() !== secondQuestion.toLowerCase() || gameTwo[0].toLowerCase() !== firstQuestion.toLowerCase() && gameTwo[6].toLowerCase() === secondQuestion.toLowerCase()) {
  alert('Один правильный ответ из двух - Вы были близки к победе!');
} else {
  alert('К сожалению, Вы ответили не верно');
};
}





//Задание 1
let password = 1234;
let enterPassword = Number(prompt('Введите пароль'));
if(password = 1234){
    password = 'Пароль введен верно';
} else {
    password = 'Пароль введен неправильно';
}
alert(password);

//Задание 2
let c = 15;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 147;
let e = 32;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = String(prompt('Введите номер месяца'));
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зима')        
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весна')        
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето')        
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осень')        
        break;
    default:
        console.log('Такого номера месяца не существует')
        break;
}

// Задание 6 "Адаптивная верстка игрового сайта c добавление эфектов наведения"

//Ниже дополнительные задание

// Задание 7

let evenOdd = String(prompt('Пожалуйста, введите любое число'));

if (evenOdd % 2 === 0) {
    console.log("Является числом")
    alert("Число четное");
} else if (evenOdd % 2 === 1, 3, 5, 7, 9) {
    console.log("Является числом");
    alert("Не четное");
} else if (evenOdd !== String) {
    console.log("Не является числом");
}

// Задание 8

let clientOS = 0 || 1;
if (clientOS === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
    console.log("Установите версию приложения для Android по ссылке");
}

// Задание 9

let clientDeviceYear = Number(prompt("Какой год выпуска Вашего телефон?"));
if (clientDeviceYear < 2015 && clientOS === 0) {
    alert("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientDeviceYear < 2015 && clientOS === 1) {
    alert('Установите облегченную версию приложения для Android по ссылке');
} else if (clientDeviceYear > 2015 && clientOS === 0) {
    alert("Установите версию приложения для iOS по ссылке");
} else if (clientDeviceYear > 2015 && clientOS === 1) {
    alert("Установите версию приложения для Android по ссылке");
}
 
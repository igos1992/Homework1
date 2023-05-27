// Задание 1

function min(a, b) {
  
    if (a < b) {
      console.log(a);
    } else {
    console.log(b);
    }
    return;
};

min(8, 4);

// Задание 2

function takeNumber(a) {

  if (a % 2 === 0) {
      return 'Число четное';
  } else if (a % 2 != 0) {
      return 'Число нечетное';
  }
  };
  
  console.log(takeNumber(10));

// Задание 3.1

function exponentiationA(a) {
    let exponentiationA = a **2;
    console.log(`${exponentiationA}`)
};

exponentiationA(7);

// Задание 3.2

function exponentiationB(b) {
    return b ** 2;
};

let result = exponentiationB(5);
console.log(result);

// Задание 4

let fullYears = prompt(' Сколько Вам полных лет?');

function age() {

    if (fullYears < 0 ) {
        return 'Вы ввели неправильное значение';
    } else if (fullYears <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    } 
};

alert(age(fullYears));

// Задание 5

function trueNumber(a, b) {

  if (isNaN(a) || isNaN(b)) {
    console.log('Одно или оба значения не являются числом');
  } else {
    return a * b;
  }
}

console.log(trueNumber('f', 5));


// Задание 6

let enterTheNumber = Number(prompt('Введите, пожалуйста любое число!!!'));

function anyNumber(n) {

  if (isNaN(n)) {
    console.log('Переданный параметр не является числом');
  } else {
    return `${enterTheNumber} в кубе равняется ${enterTheNumber ** 3}`;
  }
};

console.log(anyNumber(enterTheNumber));

// Задание 7

function getArea() {
  return (this.radius ** 2) * this.pi;
};

function getPerimeter() {
  return 2 * this.pi * this.radius;
};

const circle1 = {
  radius: 5,
  pi: 3.14,
  
  getCircleArea: getArea,
};

const circle2 = {
  radius: 15,
  pi: 3.14,

  getCirclePerimeter: getPerimeter
};

console.log(circle1.getCircleArea());
console.log(circle2.getCirclePerimeter());

// Задание 8

function Seasons() {

    let userAnswer = Number(prompt('Введите, пожалуйста, номер любого месяца от 1 до 12'));

    if (userAnswer === 1 || userAnswer === 2 || userAnswer === 12) {
      console.log('Зима - это самое холодное время года, следующее за осенью.');
    } else if (userAnswer === 3 || userAnswer === 4 || userAnswer === 5) {
      console.log('Весна - это переходный сезон между зимой и летом');
    } else if (userAnswer === 6 || userAnswer === 7 || userAnswer === 8) {
      console.log('Лето - это самое тёплое время года, следующее за весной');
    } else if (userAnswer === 9 || userAnswer === 10 || userAnswer === 11) {
      console.log('Осень - переходный сезон между летом и зимой, когда становится заметно уменьшение светового дня');
    } else {
     alert('Не правильно!!! Введите, пожалуйста цифру от 1 до 12');
    }
};
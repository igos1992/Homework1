// Задание 1 - Выполнено

let number = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
  if (number[i] === 10) break; 
  console.log(number[i]);
};

// Задание 2 - Выполнено

let findTheReason = [1, 5, 4, 10, 0, 3];

let search = findTheReason.includes(4);
console.log(search);


// Задание 3 - Выполнено

let withoutSpaces = [1, 3, 5, 10, 20];
let withSpaces = withoutSpaces.join(' ');
console.log(withSpaces);

// Задание 4 - Выполнено

const arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
const outputArr = [];
for (const inArr of arr) {
    const newArray = [];

    for (const element of inArr) {
        newArray.push(element);      
    }
    outputArr.push(newArray);
};
console.log(outputArr);

// Задание 5 - Выполнено

let a = [1, 1, 1];
a.push(2, 2, 2);
console.log(a);


// Задание 6 - Выполнено

let sortingAndDeleting = [9, 8, 7, 'a', 6, 5];
let sorting = sortingAndDeleting.sort();
sorting.pop();
console.log(sorting);

// Задание 7 - Под вопросом (вроде сделано)

let enterNum = Number(prompt('Введите, пожалуйста, цифру от 1 до 10'));
let num = [9, 8, 7, 6, 5];

for (let i = 0; i < num.length; i++) {
  if (enterNum === num[i]) {
    console.log(`Цифра ${enterNum} содержится в массиве`);
    break;
  }
};


// Задание 8 - Выполнено

let reflection = 'abcdef';
let reversedReflection = reflection.split('');
reversedReflection.reverse();
reversedReflection = reversedReflection.join('');
console.log(reversedReflection);

// Задание 9 - Выполнено

let union = [
  [1, 2, 3,],
  [4, 5, 6]
];

console.log(union.flat(Infinity));

// Задание 10 - Выполнено

let arbitraryNumbers = [1, 2, 5, 6, 7, 2, 3, 4, 1];

for (let i = 0; i < (arbitraryNumbers.length - 1); i++) {
  console.log((arbitraryNumbers[i] + arbitraryNumbers[i + 1]));
};

console.log(arbitraryNumbers[(arbitraryNumbers.length - 1)]);

// Задание 11 - Выполнено

function square(array) {
  return array.map((number) => number ** 2);
};

let numbers = [20, 2, 3, 4];
console.log(square(numbers));


// Задание 12 - Выполнено

function longWords(count) {
  return count.map((wordLength) => wordLength.length);
};
let wordLength = ['еле', 'еле', 'получилось', 'сделать', 'эту функцию'];
console.log(longWords(wordLength));


// Задание 13 Выполнено

function filterPositive(array) {
  return array.filter(negativeNumbers => negativeNumbers < 0);
}

let negativeNumbers = [-1, 0, 5, -10, -56, 13, 22, -374];
console.log(filterPositive(negativeNumbers));

// Дополнительное задание 14

let evenNumbers = [];
for(i = 0; i < 10; i++) {
  evenNumbers[i] = Math.floor(Math.random() * 10);
}
console.log(evenNumbers);
console.log(evenNumbers.filter(i => i % 2 === 0));


// Дополнительное задание 15

let firstAdditional = [];
for(i = 0; i < 10; i++) {
  firstAdditional[i] = Math.floor(Math.random() * 10);
}

console.log(firstAdditional);
console.log(firstAdditional.reduce((a, b) => (a + b)) / firstAdditional.length);

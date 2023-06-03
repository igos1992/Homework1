// Задание 1 - Выполнено

const peopleOne = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(peopleOne.sort((a, b) => a.age - b.age)) 

// Задание 2

function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
  
  const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
  ];
  
  console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]

// Задание 3 - Выполнено

const timer = (deadline) => {

	let time = new Date;
	console.log(time);
	const interval = setInterval(() => {
		time;
		console.log(time);
	}, 1000);

	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline * 1000)
};

timer(29);

// Задание 4 - Выполнено

function delayForSecond(callback) {
  setTimeout(callback, 1000)
};

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5 - Выполнено

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {
        cb();}

  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

setTimeout(() => {
    return sayHi('Глеб');
}, 2000); delayForSecond();




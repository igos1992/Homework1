// Задание 1
let i = 0;

while (i < 2) {
    console.log('Привет');
    i++;    
}

// Задание 2

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;    
}

// Задание 3

let b = 7;

while (b <= 22) {
    console.log(b);
    b++;    
}

// Задание 4

const workers = {
    'Коля' : ' - зарплата 200 доларов',
    'Вася' : ' - зарплата 300 доларов',
    'Петя' : ' - зарплата 400 доларов',
}; 
for (let name in workers) {
    if (workers[name])
    console.log(name + workers[name]);
}

// Задание 5


let c = 1000;
num = 0;

do {
    c = c / 2;
    num++;
} while (c > 50); 
    console.log("Интераций - " + num + "; " + "Окончательное число " + c);

// Задание 6

let dayNumber = 3;

while (dayNumber < 31) {
    dayNumber += 7;
    console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`)
    if (dayNumber > 31) {
        break;
    }
}

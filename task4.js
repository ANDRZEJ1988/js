// // // - створити функцію яка виводить масив
// let array=[1, 'cat', 44, true];
// console.log(array);
// function fArray(argument) {
//     console.log(argument);
// }
// // fArray(array);
// // // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let array = [];
// function fAdd(arg = 0) {
//         for (let i = 0; i < arg; i++) {
//         let number = Math.random() * 100;
//         array.push(number);
//     }
//     fArray(arg);
//     console.log(array);
// }
//
// fAdd(5);
// // створити функцію яка приймає три числа та виводить та повертає найменьше.
// function small(x, y, z) {
//     if (x < y && x < z) {
//         console.log(x);
// return x;
//     }
//     if (y < x && y < z) {
//         console.log(y);
//         return y;
//     }
//     if (z < x && z < y) {
//         console.log(z);
//         return z;
//     }
//
// }
// small(10, 10, 0);
// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function big(x, y, z) {
//     if (x > y && x >z) {
//         console.log(x);
//     }
//     if (y > x && y > z) {
//         console.log(y);
//     }
//     if (z > x && z > y) {
//         console.log(z);
//     }
//
// }
// big(50, 20, 40);
// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function more() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max=arguments[i];
//         }
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     console.log(`найменьше значення - ${min}`);
//     console.log(`найбільше значення - ${max}`);
//     return min;
// }
// more(8, 2, 3, 1, 9, 2);
// let res = more(8, 2, 3, 1, 9, 2);
// console.log(res);
//
// - створити функцію яка повертає найбільше число з масиву
//
//
// function fmax(argument) {
//     let max = argument[0];
//     for (let i = 0; i < argument.length; i++) {
//         if (argument[i] > max) {
//             max = argument[i];
//         }
//     }
//     return max;
// }
// let result=fmax(array);
// console.log(result);

// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function fsum(argument) {
//     let sum = 0;
//     for (let i = 0; i < argument.length; i++) {
//         sum = sum+argument[i];
//     }
//     return sum;
// }

// let array = [5, 1, 20, 7];
// let result = fsum(array);
// console.log(result);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function fmiddle(argument) {
//        let middle = fsum(argument)/argument.length;
//     return middle;
// }

// let array = [5, 1, 20, 7];
// let result = fsum(array);
// console.log(result);
// let resultMiddle = fmiddle(array);
// console.log(resultMiddle);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function fquintity(argument) {
// let quontity=argument.length;
// return quontity;
// }
// let resultQuontity = fquintity(array);
// console.log(resultQuontity);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let a= [1,2,3,4];
// let b= [2,3,4,5];
// function fadd(argument1, argument2) {
//     let c=[];
//     for (let i = 0; i < argument1.length||i<argument2.length; i++) {
//         c.push(argument1[i]+argument2[i]);
//             }
//     console.log(c);
// }
// fadd(a, b);
// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let a = [1, 2, 3, 4,5];
// console.log(a);
//
// function fIelement(i, array) {
//     if (i >= 0 && i < (array.length-1)) {
//         let x = array[i];
//         let y = array[i += 1];
//         i -= 1;
//         console.log(i);
//         console.log(x);
//         console.log(y);
//         array[i] = y;
//         array[++i] = x;
//         console.log(array);
//     }
//     else return;
// }
//
// fIelement(4, a);




// - Додає в боді блок з текстом "Hello owu"
// function createDiv() {
// let element=document.createElement('div');
// element.innerText=`"Hello owu"`;
// document.body.appendChild(element)
// }
// createDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElement(type, text) {
// let element=document.createElement(type);
//     element.innerText=`${text}`;
//     document.body.appendChild(element);
// }
// addElement( 'span',  "kfdjasdkfj dfjkasdlfj dafkjasdlf");

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [
    vw = {
        model: 'passat',
        year: 2012,
        power: 103,
        color: 'grey',
        driver: {name: 'vasya', age: 30, male: 'man', experience: 22}
    },
    audi = {
        model: 'a8',
        year: 2017,
        power: 198,
        color: 'white',
        driver: {
            name: 'petya', age: 18, male: 'man', experience: 0}
    }
]

function fCar(array, one, two) {
    let elementVw = document.getElementById(one);
    let elementAudi = document.getElementById(two);
    for (let i = 0; i < array.length; i++) {
        let element = document.createElement('div');
        element.style.height = '300px';
        element.style.length = '100px';
        element.innerText = `'модель-'${array[i].model}, 'рік-'${array[i].year}, 'потужністю-' ${array[i].power},
         'кольору-' ${array[i].color}, 'водій-'${array[i].driver.name}, 'віком-'${array[i].driver.age},
         'статтю-'${array[i].driver.male}, 'досвідом-'${array[i].driver.experience},`;
        if (one === 'vw') {
            elementVw.appendChild(element);
            document.body.appendChild(elementVw);
        }
        if (two === 'audi') {
            elementAudi.appendChild(element);
            document.body.appendChild(elementAudi);
        }
    }
}

fCar(cars, 'vw', 'audi');




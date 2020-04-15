// - создать массив с 20 числами.
// let array=[22, 11, 0, 5, 10, 7, 8, 4, 66, 77, 51, 44, 99, 100, 8, 88, 6, 26, 14, 47];
// console.log(array);
// // // -- при помощи метода sort отсортировать массив.
// let sort=array.sort();
// console.log(sort);


// let sortNew=array.sort(function (a, b) { return a-b})
// console.log(sortNew);
// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortNewArr=array.sort(function (a, b) { return b-a})
// console.log(sortNewArr);
// // -- при помощи filter получить числа кратные 3
// let filterThree=array.filter((num) =>num%3===0);
// console.log(filterThree);
// // -- при помощи filter получить числа кратные 10
// let filterTen=array.filter((num) =>num%10===0);
// console.log(filterTen);
// // -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach((value, index, array1) => {
//     console.log(value);});
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map=array.map((value, index, array1) => {value*=3;
//     console.log(value);
// return value;
// });
// console.log(array);
// console.log(map);
// одразу питання, чому console.log(array); виводить початковий масив, а не збільшує значення на 3, value ж збільшилось


// - создать массив со словами на 15-20 элементов.
// let string=['cat', 'dog', 'elephant', 'monkey', 'lion', 'tiger', 'rhipo','rat', 'mouse', 'goose', 'chiken','cow','duck'];
// console.log(string);
// -- отсортировать его по алфавиту в восходящем порядке.
// let sort=string.sort((a, b) => {
//     if (a<b){return -1}
//     else {return 1}
// });
// console.log(sort);
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortD=string.sort((a, b) => {
//     if (a<b){return 1}
//     else {return -1}
// });
// console.log(sortD);
// -- отфильтровать слова длиной менее 4х символов
// let filter=string.filter(value => value.length<4);
// console.log(filter);
//
// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let map=string.map(value => {
//     value=`${value}!`;
//     return value;
// })
// console.log(map);

// let users = [{name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}];
// console.log(users);
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort=users.sort((a, b) => {
//     if (a.age<b.age) {
//         return -1
//     }
//     else {return 1}
// })
// console.log(sort);
// let sort = users.sort((a, b) => {
//     if (a.age < b.age) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sort);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(sort);
// let sort = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return 1
//     } else {
//         return -1
//     }
// })
// console.log(sort);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// let userNew=JSON.stringify(users);
// let usersCopy=JSON.parse(userNew);
// let id=usersCopy.forEach((value, index) => {
//     value.id=index*Math.random();
//     return value;
// })
// console.log(usersCopy);
//
// console.log(users);
// // - відсортувати його за індентифікатором
// let sort=usersCopy.sort((a, b) => {
//     if (a.id<b.id) {
//         return -1
//     } else {
//         return 1
//     }
// })
// console.log(usersCopy);

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calc(a,b,c,callback) {
//     let rezult=callback(a,b,c);
//     console.log(rezult);
// }
// calc(2,2 ,2, function (a,b,c) {
// return a*b*c;
// })
// calc(2,4 ,3, function (a,b,c) {
// return a-b*c;
// })
// calc(0,5 ,3, function (a,b,c) {
// return a*(b-c);
// })

// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// console.log(cars);
// //
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// let filter=cars.filter(value => value.volume>3);
// console.log(filter);
// // - двигун = 2л
// let eng=cars.filter(value => value.volume===2);
// console.log(eng);
// // - виробник мерс
// let me=cars.filter(value => value.producer==='mercedes');
// console.log(me);
// // - двигун більше 3х літрів + виробник мерседес
// let superMe=cars.filter(value => (value.producer==='mercedes'&& value.volume>3));
// console.log(superMe);
// // - двигун більше 3х літрів + виробник субару
// let su=cars.filter(value => (value.producer==='subaru'&& value.volume>3));
// console.log(su);
// // - сили більше ніж 300
// let powers=cars.filter(value => value.power>300);
// console.log(powers);
// // сили більше ніж 300 + виробник субару
// let superSu=cars.filter(value => (value.power>300&&value.producer==='subaru'));
// console.log(superSu);
// // - мотор серіі ej
// let moto=cars.filter(value =>value.engine.startsWith('ej'));
// console.log(moto);
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let superSub=cars.filter(value => (value.power>300&&value.producer==='subaru'&&value.engine.startsWith('ej')));
// console.log(superSub);
// // - двигун меньше 3х літрів + виробник мерседес
// let mimiMe=cars.filter(value =>(value.producer==='mercedes'&&value.volume<3));
// console.log(mimiMe);
// // - двигун більше 2л + сили більше 250
// let eng250=cars.filter(value =>(value.power>250&&value.volume>2));
// console.log(eng250);
// // - сили більше 250  + виробник бмв
// let bm=cars.filter(value =>(value.power>250&&value.producer==='bmw'));
// console.log(bm);
//
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// console.log(usersWithAddress);
// -- отсортировать его по id пользователей
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.id<b.id) {
//         return -1
//     }
//     else {
//         return 1
//     }
// })
// console.log(sort);
// -- отсортировать его по id пользователей в обратном опрядке
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.id<b.id) {
//         return 1
//     }
//     else {
//         return -1
//     }
// })
// console.log(sort);
// -- отсортировать его по возрасту пользователей
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.age<b.age) {
//         return -1
//     }
//     else {
//         return 1
//     }
// })
// console.log(sort);
// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.age<b.age) {
//         return 1
//     }
//     else {
//         return -1
//     }
// })
// console.log(sort);
// отсортировать его по имени пользователей
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.name<b.name) {
//         return -1
//     }
//     else {
//         return 1
//     }
// })
// console.log(sort);
// -- отсортировать его по имени пользователей в обратном порядке
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.name<b.name) {
//         return 1
//     }
//     else {
//         return -1
//     }
// })
// console.log(sort);
// -- отсортировать его по номеру дома по возрастанию
// let sort=usersWithAddress.sort((a, b) => {
//     if (a.address.number<b.address.number) {
//         return -1
//     }
//     else {
//         return 11
//     }
// })
// console.log(sort);
// -- отфильтровать (оставить) тех кто младше 30
// let filter=usersWithAddress.filter(value => value.age<30);
// console.log(filter);
// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter=usersWithAddress.filter(value => value.status===false);
// console.log(filter);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter=usersWithAddress.filter(value => (value.status===false&&value.age<30));
// console.log(filter);
// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter=usersWithAddress.filter(value => value.address.number%2===0);
// console.log(filter);

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
// class Cars {
//     constructor(mark, power, driver, price, year) {
//         this.mark = mark;
//         this.power = power;
//         this.driver = driver;
//           this.price = price;
//         this.year = year;
//     }
// }
// let subaru=new Cars('subaru',400, {name:'oleg',age:30, experience:5 }, 1200,  2010);
// let mers=new Cars('mercedes',350, {name:'andrii',age:16, experience:7 }, 15000,  2018);
// let bmw=new Cars('bmm',250, {name:'olya',age:55, experience:15 }, 1400,  2012);
// let opel=new Cars('opel',104, {name:'maks',age:22, experience:2 }, 500,  2005);
// let audi=new Cars('audi',220, {name:'saha',age:44, experience:3 }, 3000,  2012);
// let vw=new Cars('vw',88, {name:'anya',age:30, experience:5 }, 5000,  2010);
// let pegeout=new Cars('pegeout',350, {name:'kolya',age:28, experience:1 }, 2000,  2007);
// let citroen=new Cars('citroen',420, {name:'vita',age:18, experience:0 }, 3500,  2015);
// let porshe=new Cars('porshe',140, {name:'vitalik',age:27, experience:11 }, 4200,  2008);
// let ferrari=new Cars('ferrari',175, {name:'sergey',age:41, experience:7 }, 800,  1998);
// let tesla=new Cars('tesla',220, {name:'zosya',age:77, experience:40 }, 18000,  2000);
// let cars=[];
// cars.push(subaru,mers,bmw,opel, audi,vw,pegeout,citroen, porshe, ferrari,tesla );
// console.log(cars);
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності)
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// cars.forEach((value, index) => {
//     if (index%2===0){
//         value.power+=0.1*value.power;
//         value.price+=0.05*value.price;
//     }
//     return value
// })
// console.log(cars);
//
// cars.forEach(value => {
//     if (value.driver.age>25 && value.driver.experience<5 ) {
//         value.driver.experience+=1;
//     }
//     return value
// })
// console.log(cars);
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let sum=cars.reduce((previousValue, currentValue) => {
// return previousValue+currentValue.price;
// }, 0);
// console.log(sum);
// let summ=0;
// // for (let i = 0; i < cars.length; i++) {
// //     // console.log(cars[i].price);
// //     summ+=cars[i].price;
// // }
// // console.log(summ);


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
console.log(Arr);
let empty=[];
function minMax(Array, arg) {
    Array.forEach((value, index) => {
        if (value===arg){
            empty.push(index);

                   }
        if(value!==arg)
        {
            // console.log(-1);/*не можу вивести -1 якщо немає такого елемента*/
            // empty.push(-1)
            return 
             }
    })
    let min=empty[0];
    let max=empty[empty.length-1];
        console.log(min);
    console.log(max);
}
minMax(Arr,4);




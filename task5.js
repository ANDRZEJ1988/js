// -  Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(model,  producer, year, speed, volume) {
//         this.model=model;
//         this.producer=producer;
//         this.year=year;
//         this.speed=speed;
//         this.volume=volume;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     info(){
//         console.log(`це модель ${this.model}, виробництва ${this.producer}, ${this.year} року, максимальна швидкість
//          ${this.speed} на годину, об’єм двигуна ${this.volume}`);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.speed+=newSpeed;
//         console.log(this.speed);
//     }
//     changeYear (newValue){
//         this.year=newValue;
//         console.log(this.year);
//     }
//
//     addDriver(name, age, experience) {
//        this.driver={name:name, age:age, experience:experience};
//     }
// }
// let bmw=new Car('x5', 'germany', 2015, 240, 3000);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(20);
// bmw.changeYear(2018);
// bmw.addDriver('oleg', 44, 15);
// bmw.info();
// console.log(bmw);

//
// Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати
// в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//  let car={
//     model:'passat',
//     producer: 'usa',
//     year: 2018,
//      speed: 200,
// volume:2000,
//      drive: function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     },
//      info: function(){
//         console.log(`це модель ${this.model}, виробництва ${this.producer}, ${this.year} року, максимальна швидкість
//          ${this.speed} на годину, об’єм двигуна ${this.volume}`);
//     },
//      increaseMaxSpeed: function(newSpeed){
//         this.speed+=newSpeed;
//         console.log(this.speed);
//     },
//      changeYear: function (newValue) {
//         this.year=newValue;
//         console.log(this.year);
//     },
//      addDriver(name, age, experience) {
//        this.driver={name:name, age:age, experience:experience};
//     }
//
//  };
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2000);
// car.addDriver('anya', 33, 5);
// console.log(car);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model,  producer, year, speed, volume) {
//     this.model=model;
//         this.producer=producer;
//     this.year=year;
//     this.speed=speed;
//     this.volume=volume;
//     this.drive=function(){
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     };
//     this.info=function(){
//         console.log(`це модель ${this.model}, виробництва ${this.producer}, ${this.year} року, максимальна швидкість
//          ${this.speed} на годину, об’єм двигуна ${this.volume}`);
//     };
//     this.increaseMaxSpeed=function(newSpeed){
//         this.speed+=newSpeed;
//         console.log(this.speed);
//     };
//     this.changeYear=function (newValue){
//         this.year=newValue;
//         console.log(this.year);
//     };
//
//     this.addDriver=function(name, age, experience) {
//        this.driver={name:name, age:age, experience:experience};
//     };
// }
// let mers=new Car('s500','china', 2019, 300, 5000);
// console.log(mers);
// mers.drive();
// mers.info();
// mers.changeYear(2012);
// mers.addDriver('petya', 50, 11);
// console.log(mers);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Princess {
//     constructor(name, old, size) {
//         this.name=name;
//         this.old=old;
//         this.size=size;
//     }
// }
// let princess1=new Princess('anya', 20, 32);
// let princess2=new Princess('olya', 21, 33);
// let princess3=new Princess('katya', 22, 34);
// let princess4=new Princess('olena', 23, 35);
// let princess5=new Princess('jenya', 24, 36);
// let princess6=new Princess('adriana', 25, 37);
// let princess7=new Princess('valya', 26, 38);
// let princess8=new Princess('marta', 27, 39);
// let princess9=new Princess('vasylyna', 28, 40);
// let princess10=new Princess('oksana', 29, 41);
// console.log(princess1);
// console.log(princess2);
// let group=[];
// group.push(princess1, princess2, princess3, princess4,princess5, princess6, princess7, princess8, princess9, princess10 );
// console.log(group);
// class   Prince   {
//     constructor(name, old, size) {
//         this.name=name;
//         this.old=old;
//         this.size=size;
//
//     }
// }
// let prince=new Prince('kolya', 33, 37);
// console.log(prince);
// for (let princess of group) {
//     if (prince.size===princess.size){
//         console.log(`принц ${prince.name} має бути з принцесою на ім’я ${princess.name} `);
//     }
//
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Princess(name, old, size) {
    this.name = name;
    this.old = old;
    this.size = size;
}
let princess1=new Princess('anya', 20, 32);
let princess2=new Princess('olya', 21, 33);
let princess3=new Princess('katya', 22, 34);
let princess4=new Princess('olena', 23, 35);
let princess5=new Princess('jenya', 24, 36);
let princess6=new Princess('adriana', 25, 37);
let princess7=new Princess('valya', 26, 38);
let princess8=new Princess('marta', 27, 39);
let princess9=new Princess('vasylyna', 28, 40);
let princess10=new Princess('oksana', 29, 41);
let group=[];
group.push(princess1, princess2, princess3, princess4,princess5, princess6, princess7, princess8, princess9,
    princess10 );
console.log(group);

function Prince(name, old, size) {
    this.name = name;
    this.old = old;
    this.size = size;
    this.find = function (argument) {
        for (let princess of argument) {
            if (prince.size === princess.size) {
                console.log(`принц ${prince.name} має бути з принцесою на ім’я ${princess.name} `);
            }
        }
    }
}
let prince=new Prince('kolya', 33, 36);
console.log(prince);
prince.find(group);
// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let one = {
//     name: 'Diana',
//     age: 46,
//     car: true,
// }
// let two = {
//     name: 'pasha',
//     age: 22,
//     car: false,
// }
// let three = {
//     name: 'masha',
//     age: 55,
//     car: true,
// }
// let four = {
//     name: 'kostya',
//     age: 10,
//     car: false,
// }
// let five = {
//     name: 'kolya',
//     age: 33,
//     car: true,
// }
// //
// //     // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let one = {
//     numbers: [22, '33', true],
//     hoby: {
//         sport: ['football', 'tennis']
//     },
//     car: true
// }
// let two = {
//     job: 'driver',
//     family: {
//         wife: {
//             name: 'anya',
//             married: true,
//             skill: ['java', 'pyton', 'js']
//         },
//         son: {
//             ame: 'vasya',
//             married: false,
//             skill: ['math', 'english']
//         }
//     },
//     animal: ['pig', 'dog', 'cat'],
// }
//     // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let item in two) {
//     console.log(item);
// }
// for (let item in one) {
//     console.log(item);
// }for (let item in five) {
//     console.log(item);
// }
// // При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let keyOne=Object.keys(one);
// let keyTwo=Object.keys(two);
// let keyFive=Object.keys(five);
// console.log(keyOne);
// console.log(keyTwo);
// console.log(keyFive);

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let car=[
//     vw={
//         model: 'passat',
//         year: 2012,
//         power: 103,
//         color: 'grey',
//         driver: {
//             name:'vasya',
//             age:30,
//             male:'man',
//             experience: 22
//         }
//     },
//     audi={
//         model: 'a8',
//         year: 2017,
//         power: 198,
//         color: 'white',
//         driver: {
//             name:'petya',
//             age:18,
//             male:'man',
//             experience: 0
//         }
//     },
//     bwv={
//         model: 'x5',
//         year: 2018,
//         power: 150,
//         color: 'black',
//         driver: {
//             name:'katya',
//             age:50,
//             male:'woman',
//             experience: 30
//         }
//     },
//     mers={
//         model: 's',
//         year: 2010,
//         power: 210,
//         color: 'red',
//         driver: {
//             name:'kolya',
//             age:28,
//             male:'man',
//             experience: 5
//         }
//     },
//     jeep={
//         model: 'cheroky',
//         year: 2000,
//         power: 98,
//         color: 'blue',
//         driver: {
//             name:'kostya',
//             age:44,
//             male:'man',
//             experience: 10
//         }
//     },
//     honda={
//         model: 'crev',
//         year: 2015,
//         power: 140,
//         color: 'yellow',
//         driver: {
//             name:'masha',
//             age:40,
//             male:'woman',
//             experience: 15
//         }
//     },
//     toyota={
//         model: 'camry',
//         year: 2010,
//         power: 166,
//         color: 'black',
//         driver: {
//             name:'olya',
//             age:27,
//             male:'woman',
//             experience: 7
//         }
//     },
//     hynday={
//         model: 'tucson',
//         year: 2020,
//         power: 180,
//         color: 'pink',
//         driver: {
//             name:'andrij',
//             age:35,
//             male:'man',
//             experience: 14
//         }
//     },
//     suzuki={
//         model: 'vitara',
//         year: 2005,
//         power: 80,
//         color: 'grey',
//         driver: {
//             name:'sergiy',
//             age:59,
//             male:'man',
//             experience: 30
//         }
//     },
//     lada={
//         model: 'kolina',
//         year: 2011,
//         power: 70,
//         color: 'white',
//         driver: {
//             name:'nazar',
//             age:88,
//             male:'man',
//             experience: 50
//         }
//     },
//     acura={
//         model: 'mdx',
//         year: 2014,
//         power: 200,
//         color: 'green',
//         driver: {
//             name:'oleg',
//             age:50,
//             male:'man',
//             experience: 12
//         }
//     }
//
// ];
// console.log(car);
// console.log(car);
// // Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let city=[ townOne={
//     name:'lviv',
//     population: 900000,
//     country:'ukraine',
//     region:'europe'},
//
//     townTwo={
//     name:'london',
//     population: 3000000,
//     country:'greate breatain',
//     region:'europe'
//     },
//
//     townTree={
//     name:'vasington',
//     population: 1500000,
//     country:'usa',
//     region:'america'
//     }
// ]
// console.log(city);
// проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i=0;
// while (i<car.length) {
//     console.log(car[i]);
//     i++;
// }
// while (i<city.length) {
//     console.log(city[i]);
//     i++;
// }
// проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < city.length; i++) {
//     const cityElement = city[i];
//     console.log(cityElement);
// }
// for (let i = 0; i < car.length; i++) {
//     const carElement = car[i];
//     console.log(carElement);
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let carElement of car) {
//     console.log(carElement);
// }
// for (let cityElement of city) {
//     console.log(cityElement);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jsonOne=JSON.stringify(one);
// let jsonOTwo=JSON.stringify(two);
// let jsonThree=JSON.stringify(three);
// let jsonFour=JSON.stringify(four);
// let jsonFive=JSON.stringify(five);
// console.log(jsonOne);
// console.log(jsonOTwo);
// console.log(jsonThree);
// console.log(jsonFour);
// console.log(jsonFive);
//
// // взять json из задания 11 и превратить их обратно в объекты.
// let parseOne=JSON.parse(jsonOne);
// let parseTwo=JSON.parse(jsonOTwo);
// let parseThree=JSON.parse(jsonThree);
// let parseFour=JSON.parse(jsonFour);
// let parseFive=JSON.parse(jsonFive);
// console.log(parseOne);
// console.log(parseTwo);
// console.log(parseThree);
// console.log(parseFour);
// console.log(parseFive);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let carElement of car) {
//       let jasonCarEl=JSON.stringify(carElement);
//      console.log(jasonCarEl);
// }
// // for (let cityElement of city) {
// //       let jasonCityEl=JSON.stringify(cityElement);
// //      console.log(jasonCityEl);
// // }
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let parseCars = [];
// for (let carElement of car) {
//     let jasonCarEl = JSON.stringify(carElement);
//     let parseCar = JSON.parse(jasonCarEl);
//     parseCars.push(parseCar);
// }
// console.log(parseCars);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let customer = [
//     anya = {
//         age: 22,
//         car: 'bmv',
//         skills: ['dance', 'read', 'walk']
//     },
//     max={
//     age:33,
//         car: 'vw',
//         skills: ['football', 'basketball']
//     },
//     kolya={
//     age:55,
//         car: 'honda',
//         skills:['tennis', 'judo', 'succer']
//     }
// ];
// console.log(customer);
// let arraySkills = [];
// for (let customerElement of customer) {
//     for (let element of customerElement.skills) {
//         arraySkills.push(element);
//     }
// }
// console.log(arraySkills);

// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// for (let user of users) {
//     console.log(user);
//     for (let arrayEl of user.skills) {
//         console.log(arrayEl);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
//     ];
// let adress=[];
// for (let user of users) {
//     console.log(user);
//     adress.push(user.address);
// }
// console.log(adress);
// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let user of users) {
//     let box=document.createElement('div');
//     box.innerHTML=`name - ${user.name}, age - ${user.age}, status-  ${user.name}, address- ${user.address.country},${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;
//     document.body.appendChild(box);
//     console.log(box);
// }



// ДО ЦЬОГО МОМЕНТУ ВЖЕ ПЕРЕВІРЕНО
//


// -  За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let user of users) {
//     let boxName = document.createElement('div');
//     let boxAge = document.createElement('div');
//     let boxStatus = document.createElement('div');
//     let boxAddress = document.createElement('div');
//     boxName.innerHTML = `name - ${user.name}`;
//     boxAge.innerHTML = `age - ${user.age}`;
//     boxStatus.innerHTML = `status-  ${user.status}`;
//     boxAddress.innerHTML = `address- ${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;
//     document.body.appendChild(boxName);
//     document.body.appendChild(boxAge);
//     document.body.appendChild(boxStatus);
//     document.body.appendChild(boxAddress);
//     console.log(boxName);
//     console.log(boxAge);
//     console.log(boxStatus);
//     console.log(boxAddress);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let user of users) {
//     let box = document.createElement('div');
//     let boxName = document.createElement('div');
//     let boxAge = document.createElement('div');
//     let boxStatus = document.createElement('div');
//     let boxAddress = document.createElement('div');
//     boxName.innerHTML = `name - ${user.name}`;
//     boxAge.innerHTML = `age - ${user.age}`;
//     boxStatus.innerHTML = `status-  ${user.status}`;
//     boxAddress.innerHTML = `address- ${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;
//     box.appendChild(boxName);
//     box.appendChild(boxAge);
//     box.appendChild(boxStatus);
//     box.appendChild(boxAddress);
//     document.body.appendChild(box);
//     console.log(box);
// }

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let aray = [];
// for (let elementUser of usersWithId) {
//     for (let elementCity of citiesWithId) {
//         if (elementUser.id === elementCity.user_id) {
//             elementUser.adress=elementCity;
//             aray.push(elementUser);
//         }
//     }
// }
// console.log(aray);
//

//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
////     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
// змістом того, що знаходиться на сторінці.
////     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let element =document.getElementsByTagName('h2');
// console.log(element);
// let content=document.getElementById('content');
// for (let i = 0; i < element.length; i++) {
//     let ulElement =document.createElement('ul');
//     let liElement=document.createElement('li');
//     liElement.innerHTML=`${element[i].innerText}`;
//     ulElement.appendChild(liElement);
//     content.appendChild(ulElement);
// }
// console.log(content);
// - знайти всі елементі, які мають id
let idElement=document.getElementsByTagName('div');
console.log(idElement);
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let pElement=document.getElementsByTagName('p');
// console.log(pElement);
// for (let i = 0; i < pElement.length; i++) {
//     let newP = pElement[i];
//     newP.innerText=`Hello oktenweb!`;
// }
// - знайти всі div та змінити ім колір на червоний
// let divElement=document.getElementsByTagName('div');
// for (let i = 0; i < divElement.length; i++) {
//     let divs = divElement[i];
//     divs.style.color='red';
// }
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let wrapElement = document.getElementById('wrap');
// // console.log(wrapElement);
// let ruleElement = document.getElementsByTagName('h2');
// // console.log(ruleElement);
// let pElement = document.getElementsByTagName('p');
// // console.log(pElement);
// for (let i = 0; i < ruleElement.length; i++) {
//     let ruleEl = document.createElement('div');
//     ruleEl.innerHTML = `${ruleElement[i].innerText}`;
//     let pEl = document.createElement('div');
//     pEl.innerHTML = `${pElement[i].innerText}`;
//     ruleEl.appendChild(pEl);
//     wrapElement.appendChild(ruleEl);
// }
// console.log(wrapElement)


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
// let wrap=document.createElement('div');
// for (let i = 0; i < rules.length; i++) {
//     rul=rules[i];
//     let rule=document.createElement('div');
//     let titleEl=document.createElement('div');
//     let bodyEl=document.createElement('div');
//     bodyEl.innerText=`${rul.body}`;
//     titleEl.innerText=`${rul.title}`;
//     titleEl.appendChild(bodyEl);
//     rule.appendChild(titleEl);
//     wrap.appendChild(rule);
//     }
// console.log(wrap);

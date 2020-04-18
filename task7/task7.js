// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.querySelector('#text');
// text.onclick=()=>{
//     text.style.display='none';
// };
//
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn=document.createElement('button');
// btn.innerText='button';
// document.body.appendChild(btn);
// btn.onclick=()=>{
//     btn.style.display='none';
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let check=document.forms.mainForm.check;
// check.onclick=function(){
//     let age=document.forms.mainForm.age.value;
//     if (age < 18) {
//         alert('you are very yong');
//     }
//     else{
//         alert('you old');
//     }
// }
// - Создайте меню, которое раскрывается/сворачивается при клике
// let men=document.querySelector('#menu');
// men.onclick=(e)=>{
//     e.preventDefault();
//     let pla = document.querySelector('#players');
//     let ani = document.querySelector('#animals');
//     let clu = document.querySelector('#clubs');
//     if ( pla.style.display==='none' && ani.style.display==='none' && clu.style.display==='none'){
//         pla.style.display='block';
//         ani.style.display='block';
//         clu.style.display='block';
//     }
//     else    {
//         pla.style.display='none';
//         ani.style.display='none';
//         clu.style.display='none';
//     }
//
// }


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
// let childNod=document.body.childNodes;
// console.log(childNod);
// console.log(childNod[3].textContent);
// let div=document.createElement('div');
// div.innerText=`${childNod[3].textContent}`;
// let element=document.querySelector('#vw');
// element.appendChild(div);
// document.body.appendChild(element);
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let btn=document.createElement('button');
// btn.innerText='delete coment with div';
// element.appendChild(btn);
// document.body.appendChild(element);
// btn.onclick=()=>{
//     element.style.display='none';
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let btn = document.querySelector('#read');
// btn.onclick = function () {
//     let cat = document.forms.one.cat.value;
//     let dog = document.forms.one.dog.value;
//     let lion = document.forms.two.lion.value;
//     let tiger = document.forms.two.tiger.value;
//     console.log(`текст першого інпуту - ${cat}, текст другого інпуту - ${dog},
//     текст третього інпуту - ${lion}, текст четвертого інпуту - ${tiger}, `);
// }

//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// function table(x, y, z) {
//     let div = document.querySelector(z);
//     let tab = document.createElement('table');
//     tab.style.border = 'inset';
//     for (let i = 0; i < x; i++) {
//         let str = document.createElement('tr');
//         str.style.border = 'double';
//         for (let j = 0; j < y; j++) {
//
//             let cell = document.createElement('td');
//
//             cell.style.border = 'double';
//             cell.innerText = `dfsdsf`;
//             str.appendChild(cell);
//             tab.appendChild(str);
//             div.appendChild(tab);
//         }
//     }
// }
// table(2,5, '#tables'  );


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//

let btn = document.querySelector('#butTable');
btn.onclick = () => {
    let tab = document.createElement('table');
    tab.style.border = 'inset';
    let row = Number(document.forms.tableee.row.value);
    let cell = Number(document.forms.tableee.cell.value);
    let content = document.forms.tableee.content.value;
    for (let i = 0; i < row; i++) {
        let str = document.createElement('tr');
        str.style.border = 'double';
        for (let j = 0; j < cell; j++) {
            let cells = document.createElement('td');
            cells.style.border = 'double';
            cells.innerText = content;
            str.appendChild(cells);
            tab.appendChild(str);
            document.body.appendChild(tab);
        }

    }
}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let bad = ['cat', 'dog', 'pig', 'cow', 'lion'];
// let btn = document.querySelector('#word');
// btn.onclick = () => {
//     let inp = document.forms.word.mat.value;
//     let sum = 0;
//     for (let element of bad) {
//         if (inp === element) {
//              alert(`${inp}- this is bad word`);
//             return
//         } else {
//             sum += 1;
//             if (sum === bad.length) {
//                  alert(`${inp}- this is good word`);
//             }
//         }
//     }
// }


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// let bad = ['cat', 'dog', 'pig', 'cow', 'lion'];
// let btn = document.querySelector('#word');
// btn.onclick = () => {
//     let inp = document.forms.word.mat.value;
//     let sum = 0;
//     for (let element of bad) {
//         if (inp.includes(element)) {
//             alert(`your sentence have bad word`);
//                        return
//         }
//         else {
//             sum += 1;
//             if (sum === bad.length) {
//                  alert(`your sentence have not bad word`);
//             }
//             }
//         }
//     }


//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
// let box = document.querySelector('#users');
// console.log(box);
// let status = document.forms.user.status;
// status.onclick = () => {
//     box.innerText = '';
//     if (status.checked) {
//         for (let us of usersWithAddress) {
//             if (!us.status) {
//                 console.log(JSON.stringify(us));
//                 let divStatus = document.createElement('div');
//                 divStatus.innerText = JSON.stringify(us);
//                 box.appendChild(divStatus);
//             }
//         }
// }
// }
// let age = document.forms.user.age;
// age.onclick = () => {
//     box.innerText = '';
//     if (age.checked) {
//         for (let us of usersWithAddress) {
//             if (us.age>=29) {
//                 console.log(JSON.stringify(us));
//                 let divStatus = document.createElement('div');
//                 divStatus.innerText = JSON.stringify(us);
//                 box.appendChild(divStatus);
//             }
//         }
// }
// }
// let city = document.forms.user.city;
// city.onclick = () => {
//     box.innerText = '';
//     if (city.checked) {
//         for (let us of usersWithAddress) {
//             if (us.address.city==='Kyiv') {
//                 console.log(JSON.stringify(us));
//                 let divStatus = document.createElement('div');
//                 divStatus.innerText = JSON.stringify(us);
//                 box.appendChild(divStatus);
//             }
//         }
// }
// }



//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//


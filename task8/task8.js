// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let text = document.querySelector('#text');
// text.oninput = () => {
//     let value = text.value;
//     localStorage.setItem('text', value);
// }
// textFromLocal = localStorage.getItem('text');
// if (textFromLocal) {
//     text.value = textFromLocal
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let text = document.querySelector('#text');
// let btn = document.querySelector('#save');
// btn.onclick = () => {
//     let info=JSON.parse(localStorage.getItem('info'));
//     if (Array.isArray(info) && localStorage.getItem('info')!=null) {
//         info.push(text.value);
//         localStorage.setItem('info', JSON.stringify(info));
//     }
//     else {
//         let arr=[];
//         arr.push(text.value)
//         localStorage.setItem('info', JSON.stringify(arr));
//     }
// }
// let left = document.querySelector('#left');
// let i=0;
// left.onclick=()=>{
//     let info = JSON.parse(localStorage.getItem('info'));
//     console.log(info);
//
//     if (i-1<0) {
//         i=info.length-1;
//     }
//     else {
//         i=i-1;
//     }
//        text.value=info[i];
// }
// let right = document.querySelector('#right');
// right.onclick=()=>{
//     let info = JSON.parse(localStorage.getItem('info'));
//     console.log(info);
//     if (i+1>info.length-1) {
//         i=0;
//     }
//     else {
//         i=i+1;
//     }
//        text.value=info[i];
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


let btn = document.querySelector('#contact');
let user = {};
btn.onclick = () => {
    let name = document.forms.contact.name.value;
    let adres = document.forms.contact.adres.value;
    let number = document.forms.contact.number.value;
    let date = document.forms.contact.date.value;
    user = {
        imya: name,
        adr: adres,
        phone: number,
        age: date
    }
    console.log(user);
    let contactFromStorage = JSON.parse(localStorage.getItem('contact'));
    if (Array.isArray(contactFromStorage) && localStorage.getItem('contact') != null) {
        contactFromStorage.push(user)
        localStorage.setItem('contact', JSON.stringify(contactFromStorage));
    } else {
        let contact = [];
        contact.push(user);
        localStorage.setItem('contact', JSON.stringify(contact));
    }
}
let show = document.querySelector('#show');
show.onclick = () => {
    let contact = JSON.parse(localStorage.getItem('contact'));
    for (let i = 0; i < contact.length; i++) {
        let li = document.createElement('li');
        li.innerText = `name-${contact[i].imya}, adress-${contact[i].adr}, phone- ${contact[i].phone}, birthday-${contact[i].age} `;
        let del = document.createElement('button');
        del.innerText = `delete`;
        let change = document.createElement('button');
        change.innerText = `change`;
        li.appendChild(del);
        li.appendChild(change);
        document.body.appendChild(li);
        del.onclick = () => {
            contact.splice(i, 1);
            localStorage.setItem('contact', JSON.stringify(contact));
        }
        change.onclick = () => {
            let form = document.createElement('form');
            let name = document.createElement('input');
            name.setAttribute('value', 'new name');
            let adres = document.createElement('input');
            adres.setAttribute('value', 'new adres');
            let number = document.createElement('input');
            number.setAttribute('value', 'new phone number');
            let date = document.createElement('input');
            date.setAttribute('value', 'new birthday');
            form.appendChild(name);
            form.appendChild(adres);
            form.appendChild(number);
            form.appendChild(date);
            li.appendChild(form);
            let btn = document.createElement('button');
            btn.innerText = `save changes`;
            console.log(form);
            li.appendChild(btn);
            btn.onclick = () => {
                contact[i].imya = name.value;
                contact[i].adr = adres.value;
                contact[i].phone = number.value;
                contact[i].age = date.value;
                localStorage.setItem('contact', JSON.stringify(contact));
                console.log(contact);
            }

        }
    }

}



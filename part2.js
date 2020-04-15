let users = [

    {name: 'vasya', age: 31, status: false},

    {name: 'petya', age: 30, status: true},

    {name: 'kolya', age: 29, status: true},

    {name: 'olya', age: 28, status: false},

    {name: 'max', age: 30, status: true},

    {name: 'anya', age: 31, status: false},

    {name: 'oleg', age: 28, status: false},

    {name: 'andrey', age: 29, status: true},

    {name: 'masha', age: 30, status: true},

    {name: 'olya', age: 31, status: false},

    {name: 'max', age: 31, status: true}

];
console.log(users[7].status);
console.log(users[4].status, users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age,users[9].age );
console.log(users[4].age,users[4].name );
console.log(users[5].age,users[5].status );
let content = document.getElementById('content');
console.log(content);
let rules = document.getElementById('rules');
console.log(rules);
content.innerText='this is new text';
console.log(content);
rules.innerText=' i can change text';
console.log(rules);
content.style.backgroundColor='red';
rules.style.color='blue';
let fcBp=document.getElementsByClassName('fc bp');
console.log(fcBp);
let fcRules=document.getElementsByClassName('fc_rules');
console.log(fcRules);
fcRules[0].style.color='red';
fcRules[1].style.color='red';
fcRules[2].style.color='red';
fcRules[3].style.color='red';
let str;
let num;
let flag;
let txt;
str='привет';
num=123;
flag=true   ;
txt='true';
console.log(typeof str,typeof num,typeof flag,typeof txt,);
let a1;
let a2;
let a3;
let a4;
let a5;
a1=5+3;
a2=5-3;
a3=5*3;
a4=5/3;
a5=5%3;
console.log(a1, a2, a3, a4, a5);
let a6;
let a7;
let a8;
let a9;
let a10;
a6=5%3;
a7=3%5;
a8=5+'3';
a9='5'-3;
a10=75+'кг';
console.log(a6, a7, a8, a9, a10);
let s;
let height;
let width;
height=23;
width=10;
s=height*width;
console.log(s);
let heightC;
let dC;
let v;
heightC=10;
dC=4;
v=3.14*Math.pow((dC/2), 2);
console.log(v);

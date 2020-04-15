// let color = prompt('enter color of trafficlights');
// let road = confirm('there is no car?');
// if (road && color === 'green') {
//     console.log('go');
// } else if (!road && color === 'green') {
//     console.log('одожди пока нарушители проедут');
// } else if (!road && color === 'yellow') {
//     console.log('жди');
// } else if (road && color === 'yellow') {
//     console.log('все рано жди');
// } else if (road && color === 'red') {
//     console.log('стой все рано');
// } else if (!road && color === 'red') {
//     console.log('стой и жди');
// } else console.log('делай что хочешь');
// let num = [1, 2, 3, 4, 5];
// console.log(num);
// let str = ['mother', 'father', 'son', 'daughter', 'uncle'];
// console.log(str);
// let complex = [1, 'father', true, '2', false];
// console.log(complex);
// let empty = [];
// empty[0] = 11;
// empty[1] = 'name';
// empty[2] = true;
// empty[3] = '22';
// console.log(empty);
// for (let i = 0; i < 10; i++) {
//     document.write(`item  ${i} <div> Lorem ipsum dolor sit amet. </div>`);
// }
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor.</h1>`);
//     i++;
// }
// let i = 0;
// while (i < 20) {
//     document.write(`item ${i} <h1>Lorem ipsum dolor.</h1>`);
//     i++;
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 10; i++) {
//     console.log(num[i]);
// }
// let str = ['hello', 'andrey', 'vasy', 'masha', 'dog and cat', 'rat', 'cow', 'bird', 'football', 'mu'];
// for (let i = 0; i < 10; i++) {
//     console.log(str[i]);
// }
// let any = [1, 'andrey', true, 'masha', 'dog and cat', 'rat', null, '22', false, 'false'];
// for (let i = 0; i < 10; i++) {
//     console.log(any[i]);
// }
// for (let i = 0; i < 10; i++) {
//     if (typeof any[i] === 'boolean') {
//         console.log(any[i]);
//     }
// }
// for (let i = 0; i < 10; i++) {
//     if (typeof any[i] === 'number') {
//         console.log(any[i]);
//     }
// }
// for (let i = 0; i < 10; i++) {
//     if (typeof any[i] === 'string') {
//         console.log(any[i]);
//     }
// }
// let empty = [];
// empty[0] = 11;
// empty[1] = 'name';
// empty[2] = true;
// empty[3] = '22';
// empty[4] = false;
// empty[5] = 'false';
// empty[6] = null;
// empty[7] = 22;
// empty[8] = 'cat and rat';
// empty[9] = 1;
// for (let i = 0; i < 10; i++) {
//     console.log(empty[i]);
// }
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }
// for (let i = 0; i < 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }
//
// }
// let minute = 0;
// let second = 0;
// let hour = 0;
// for (minute = 0; minute <= 2; minute++) {
//     for (second = 0; second < 60; second++) {
//         console.log(`${minute}минут ${second}секунд`);
//     }
// }
// let minute = 0;
// let second = 0;
// let hour = 0;
// for (hour = 0; hour < 3; hour++) {
//     if (hour < 3) {
//         for (minute = 0; minute < 60; minute++) {
//             if (minute < 21) {
//                 for (second = 0; second < 60; second++) {
//                     if (second < 60) {
//                         if (hour == 2 && minute == 20 && second == 0) {
// //                         }
//                             console.log(`${hour} час ${minute} минут ${second} секунд`);
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     let letter = ['a', 'b', 'c'];
//     for (let i = 1; i < 4; i++) {
//         letter.push(i);
//         console.log(letter);
//     }
//     let array = [1, 2, 3];
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray[i] = array.length - i;
//     }
//     console.log(newArray);
//     for (let i = 4; i < 7; i++) {
//         array.push(i);
//     }
//     console.log(array);
//     for (let i = 6; i > 3; i--) {
//         array.unshift(i);
//     }
//     console.log(array);
//     let str = ['js', 'css', 'jq'];
//     let sym = str.shift();
//     console.log(sym);
//     let lastSym = str.pop();
//     console.log(lastSym);
//
//
//     let array = [1, 2, 3, 4, 5];
//     let newArray = array.slice(3);
//     console.log(newArray);
//     let newArray1 = array.slice(0, 2);
//     console.log(newArray1);
//     let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     console.log(array);
//     for (let i = 0; i < 10; i++) {
//         if (array[i] % 2 == 0) {
//             console.log(array[i]);
//         }
//     }
//     let one = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let empty = [];
//     console.log(one);
//     console.log(empty);
//     for (let i = 0; i < 10; i++) {
//         empty.push(one[i]);
//     }
// // console.log(empty);
//     for (let i = 0; i < one.length; i++) {
//         empty[i] = one[i];
//     }
//     console.log(empty);
//     let i = 0;
//     while (i < one.length) {
//         console.log(one[i]);
//         i++
//     }
//     while (i < one.length) {
//         if (one[i] % 2 == 0) {
//             console.log(one[i]);
//         }
//         i++
//     }
//     while (i < one.length) {
//         if (i % 2 != 0) {
//             console.log(one[i]);
//         }
//         i++
//     }
//     for (i; i < one.length; i++) {
//         console.log(one[i]);
//     }
//     for (i; i < one.length; i++) {
//         if (i % 2 == 0) {
//             console.log(one[i]);
//         }
//     }
//     for (i; i < one.length; i++) {
//         if (one[i] % 2 != 0) {
//             console.log(one[i]);
//         }
//     }
//     for (i; i < one.length; i++) {
//         if (one[i] % 3 == 0) {
//             one[i] = 'okten';
//         }
//     }
//     console.log(one);
//     let one = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     console.log(one);
//     for (let i = one.length; i > 0; i--) {
//         one [i - 1] = one[one.length - i];
//     }
//     console.log(one);
//
//     let one = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     console.log(one);
//     let newOne = [];
//     for (let i = one.length; i > 0; i--) {
//         newOne[i - 1] = one[one.length - i];
//     }
//     console.log(newOne);
//     for (let i = 0; i < one.length; i++) {
//         newOne[i] = one[one.length - 1 - i];
//     }
//     console.log(newOne);
//     let minute = 0;
//     let second = 0;
//     let hour = 0;
//     for (let hour = 0; hour < 3; hour++) {
//         for (let minute = 0; minute < 60; minute++) {
//             if (hour !== 2 || (hour <= 2 && minute <= 20)) {
//                 for (let second = 0; second < 60; second++) {
//                     if ((hour !== 2 || minute !== 20) || (hour <= 2 && minute <= 20 && second <= 0))
//                         console.log(`${hour} час ${minute} минут ${second} секунд`);
//                 }
//             }
//         }
//     }
//
//     for (hour = 0; hour < 3; hour++) {
//         if (hour < 3) {
//             for (minute = 0; minute < 60; minute++) {
//                 if (minute < 60) {
//                     for (second = 0; second < 60; second++) {
//                         if (second < 60) {
//                             console.log(`${hour} час ${minute} минут ${second} секунд`);
//                         }
//                     }
//
//                 }
//             }
//         }
//     }
//
//     let one = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     console.log(one);
//     let array = [];
//     for (let i = 0; i < one.length; i++) {
//         if (3 * i < one.length && one[3 * i] % 2 == 0) {
//             array[i] = one[3 * i];
//             console.log(array);
//         }
//     }
//     for (let i = 0; i < one.length; i++) {
//         if (one[i + 1] % 2 == 0) {
//             console.log(one[i]);
//         }
//     }
let
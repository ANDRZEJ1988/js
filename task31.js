let wrapElement = document.getElementById('wrap');
// console.log(wrapElement);
let ruleElement = document.getElementsByTagName('h2');
// console.log(ruleElement);
let pElement = document.getElementsByTagName('p');
// console.log(pElement);
for (let i = 0; i < ruleElement.length; i++) {
    let ruleEl = document.createElement('div');
    ruleEl.innerHTML = `${ruleElement[i].innerText}`;
    let pEl = document.createElement('div');
    pEl.innerHTML = `${pElement[i].innerText}`;
    ruleEl.appendChild(pEl);
    wrapElement.appendChild(ruleEl);
}
console.log(wrapElement);
// for (let i = 0; i     < wrapEl.length; i++) {
//     let ruleElement=document.getElementsByTagName('h2');
//     for (let j = 0; j < ruleElement.length; j++) {
//         let pElement=document.getElementsByTagName('p');
//         for (let k = 0; k < pElement.length; k++) {
//             let ruleEl=document.createElement('div');
//             let pEl=document.createElement('div');
//             pEl.innerText=`${pElement[k].innerText}`;
//             ruleEl.innerText=`${pElement[j].innerText}`;
//             ruleEl.appendChild(pEl);
//             wrapEl.appendChild(ruleEl);
//         }
//
//     }
//
// }
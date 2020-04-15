let a=3;
let b=4;
let c=Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));
console.log(c);
let str='hello world';
console.log(str);
document.write(str);
alert(str);

let name='andrey cherevychnyi';
let age=31;
let hoby='sport';
alert(name);
alert(age);
alert(hoby);
let str1='кто';
let str2='ты';
let str3='такой?';
let concatenation=`${str1} ${str2} ${str3}`;
document.write(concatenation);
let a;
let b;
a=prompt('enter number1');
b=prompt('enter number2');
let c=parseFloat(a, 10)+parseFloat(b, 10);
alert(c);
let result=`'Доброго вечера' ${name} 'мои поздравления что вам' ${age}`;
alert(result);
let aa = prompt('enter number1');
let bb = prompt('enter number2');
let cc = prompt('enter number3');
let x=parseFloat(aa, 10);
let y=parseFloat(bb, 10);
let z=parseFloat(cc, 10);
if (x <= y && y <= z)
    {console.log(x, y, z);}
else
{
    if (y <= x && x <= z)
    {console.log(y, x, z);}
    else
    {
        if (y <= z && z <= x)
        {console.log(y, z, x);}
        else
        {
            if (x <= z && z <= y)
            {console.log(x, z, y);}
            else
            {
                if (z <= x && x <= y)
                {console.log(z, x, y);}
                else{console.log(z, y, x);}
            }

        }
    }
    }
let color=prompt('enter color of trafficlights');
switch (color) {
    case 'green':
        console.log('go');
        break;
        case 'yellow':
        console.log('wait');
        break;
        case 'red':
        console.log('stop');
        break;
    default:
        console.log('do anything');
        break;

}


let road = confirm('there is no car?');
if (road === true && color === 'green') {
    console.log('go');
} else if (road === false && color === 'green') {
    console.log('одожди пока нарушители проедут');
} else if (road === false && color === 'yellow') {
    console.log('жди');
} else if (road === true && color === 'yellow') {
    console.log('все рано жди');
} else if (road === true && color === 'red') {
    console.log('стой все рано');
} else if (road === false && color === 'red') {
    console.log('стой и жди');
} else if ((color !== 'red') && (color !== 'green') && (color !== 'yellow')) {
    console.log('делай что хочешь');
}

// function wakeUp(isClock) {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if (isClock) {
//             console.log('i wake up');
//             resolve(true);
//         }
//         else {
//            reject('i steel sleep');
//         }
//     }, 1000)
//     })
// }
// function shower(isWakeUp) {
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (isWakeUp){
//             console.log('i take a shower');
//             resolve(true);
//         }
//         else {
//             reject('i am durty');
//         }
//     }, 2000);
//     })
// }
// function breakfast(isShower) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (isShower) {
//                 console.log('i eat');
//                 resolve (true);
//             }
//             else {
//                 reject('i am hungry');
//             }
//         }, 1000);
//     })
// }
// function goToWork (isBreakfast){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (isBreakfast) {
//                 console.log('i go to work');
//                 resolve (true);
//             }
//             else {
//               reject ('ai do not go');
//             }
//         },1000)
//     })
// }
// function work(isGoToWork){
//     return new  Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (isGoToWork){
//                 let money=1000;
//                 console.log(`i have ${money}`);
//                 resolve(money);
//             }
//             else {
//                 reject ('i have no maney');
//             }
//         },1000)
//     })
// }
// function cinema(money){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (money < 500) {
//                 reject('i have not got money and go home');
//                             }
//             else {
//                 money-=600;
//                 console.log(`i go to the cinema and have ${money} jet`);
//                 resolve (true);
//             }
//         }, 1000)
//     })
// }
// function goHome(isCinema){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (isCinema){
//                 console.log('i go home');
//                 resolve(true);
//             }
//             else{
//                 reject ('i also go home');
//             }
//         },2000)
//     })
// }
//
// wakeUp(true)
//     .then(value => {
//         return shower(value)
//     })
//     .then(value => {
//         return breakfast(value)
//     })
//     .then(value => {
//         return goToWork(value);
//     })
//     .then(value => {
//         return work(value);
//     })
//     .then(value => {
//         return cinema(value);
//     })
//     .then(value => {
//         return goHome(value);
//     })
//     .catch(reason => {
//         console.log(reason);
//     });



// другий метод
function wakeUp(isClock, cb) {
    setTimeout(() => {
        if (isClock) {
            let wake = true;
            cb(null, wake);

        } else {
            cb('i steel sleep ');
        }
    }, 1000)
}

function shower(wake, cb) {
    setTimeout(() => {
        if (wake) {
            let show = true;
            cb(null, show);
        } else {
            cb('i am durty');
        }
    }, 1500)
}

function breakfast(show, cb) {
    setTimeout(() => {
        if (show) {
            let eat = true;
            cb(null, eat);
        } else {
            cb('i am hungry');
        }
    }, 1000)
}

function goToWork(eat, cb) {
    setTimeout(() => {
        if (eat) {
            let go = true;
            cb(null, eat);
        } else {
            cb('i stay home today');
        }
    }, 1000)
}

function work(go, cb) {
    setTimeout(() => {
        if (go) {
            let money = 1000;
            cb(null, money);
        } else {
            cb('i have no money');
        }
    }, 3000)
}

function cinema(money, cb) {
    setTimeout(() => {
        if (money < 500) {
            cb('i have not got money and go home');
        } else {
            let film = true;
            money -= 600;
            cb(null, money);
        }
    }, 1500)
}

function goHome(money, cb) {
    setTimeout(() => {
        if (money) {
            let home = true;
            cb(null, true);
        } else {
            cb('i also go home');
        }
    }, 1000)
}

wakeUp(true, (error, wake) => {
    if (error) {
        console.log(error);
    } else {
        console.log('i wake up');
        shower(wake, (error, show) => {
            if (error) {
                console.log(error);
            } else {
                console.log('i take a shower');
                breakfast(show, (error, eat) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('i have breakfast');
                        goToWork(eat, (eror, go) => {
                            if (error) {
                                console.log(eror);
                            } else {
                                console.log('i go to work');
                                work(go, (error, money) => {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        console.log(`i have ${money}`);
                                        cinema(money, (error, money) => {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                console.log(`i go to the cinema and steel have ${money}`);
                                                goHome(money, (error, home) => {
                                                    if (error) {
                                                        console.log(error);
                                                    } else {
                                                        console.log(('i go home'));
                                                        ;
                                                    }
                                                })
                                            }
                                        })
                                    }

                                })
                            }
                        })
                    }
                })
            }

        })
    }
})










function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;

    function getCardOption() {
        if (key === 1 || key === 2 || key === 3) {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        }
    }

    function putCredits(putMoney) {
        let date = new Date().toLocaleString();
        historyLogs.push({operationType: 'putCredits', credit: putMoney, operationTime: date});
        balance += putMoney;
        return balance;
    }

    function takeCredits(takeMoney) {
        let date = new Date().toLocaleString();
        if (takeMoney > balance || takeMoney > transactionLimit) {
            console.log('you have not got enought money');
        } else {
            historyLogs.push({operationType: 'takeCredits', credit: takeMoney, operationTime: date});
            balance -= takeMoney;
        }
    }

    function setTransactionLimit(newLimit) {
        let date = new Date().toLocaleString();
        historyLogs.push({operationType: 'setTransactionLimit', credit: balance, operationTime: date});
        transactionLimit = newLimit;
        return transactionLimit;
    }

    function transferCredits(money, card) {
        if (money > balance || money > transactionLimit) {
            console.log('you have not got enought money for transfer');
        } else {
            balance -= money;
            card.putCredits(0.95 * money);
        }
    }

    return {
        getCardOption,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
}

//
// let card1 = userCard(1);
// console.log(card1.getCardOption());
// card1.putCredits(200);
// console.log(card1.getCardOption());
// card1.putCredits(50);
// console.log(card1.getCardOption());
// card1.takeCredits(150);
// console.log(card1.getCardOption());
// card1.takeCredits(100);
// console.log(card1.getCardOption());
// card1.setTransactionLimit(50);
// console.log(card1.getCardOption());
// card1.takeCredits(100);
// console.log(card1.getCardOption());
// let card2 = userCard(2);
// console.log(card2.getCardOption());
// card1.transferCredits(80, card2);
// console.log(card1.getCardOption());
// console.log(card2.getCardOption());

class UserAcount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length<3){

            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(number) {
        return this.cards[number - 1];

    }
}

let max = new UserAcount('Max');
console.log(max);
max.addCard();
max.addCard();
max.addCard();
max.addCard();
max.addCard();
let card1 = max.getCardByKey(1);
let card2 = max.getCardByKey(2);
card1.putCredits(500);
console.log(card1.getCardOption());
card1.setTransactionLimit(800);
console.log(card1.getCardOption());
card1.transferCredits(400, card2);
console.log(card1.getCardOption());
console.log(card2.getCardOption());



"use strict";

let num =20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('HW!');
console.log(num);

function calc(a, b) {
    return (a + b);
    console.log('dfkjdf');// После return код недоступен(мертвый код)
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
    console.log('Hi');
};

logger();

const cals = (a, b) => a + b;// Если функция растет раскрываем тело функции
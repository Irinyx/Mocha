function sum(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}

function isOddNumber(num) {
    if (num % 2) {
        return true;
    } else {
        return false;
    }
}

function isEvenNumber(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function isAdult(num) {
    if (num < 21) {
        return false;
    } else if (typeof num !== 'number') {
        return undefined;
    } else {
        return true;
    }
}

function findDivisors(int) {

    let arr = [];

    for (let i = 2; i < int; i++) {
        if (int % i == 0) {
            arr.push(i);
        }
    }

    if (arr.length == 0) {
        return `${int} is prime`;
    } else return arr;
}

function sumArray(numbers) {
    if (numbers.length <= 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }
}

function oddCount(n) {
    return Math.floor(n / 2)
}

function toBinary(n) {
    return parseInt(n.toString(2));
}

function typeOfVariable(value) {
    const type = {}.toString.call(value);
    const convert = type.split(" ");
    return convert[1].substring(0, convert[1].length - 1).toLowerCase();
}


module.exports = {
    sum,
    mult,
    isEvenNumber,
    isOddNumber,
    isAdult,
    findDivisors,
    sumArray,
    oddCount,
    toBinary,
    typeOfVariable
};

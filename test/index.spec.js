const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isOddNumber, isEvenNumber, isAdult, findDivisors, sumArray, oddCount, toBinary, typeOfVariable} = require('../index.js');

//Function sum > return the sum of two integers
describe('function sum', () => {

    it('should func sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
        expect(sum(2, 4)).equal(6);
    });

    it('should func sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
        expect(sum(2, 4)).equal(0);

    });

    it('should func sum equals 55', () => {
        assert.equal(sum(5, '5'), '55');
        expect(sum(5, '5')).equal('55');
    });

    it('should func sum equals s5', () => {
        assert.notEqual(sum('s', 5), 5);
        expect(sum('s', 5)).not.equal(5);

    })

});


//Function mult return the result of multiplication of two integers
describe('function mult', () => {

    it('should func mult a equals 8', () => {
        expect(mult(2, 4).equal(8));
    });

    it('should func mult not equals 0', () => {
        expect(mult(2, 4).not.equal(0));
    });

});

//Function isOddNumber checking if given number is odd
describe('function isOddNumber', () => {
    it('should 9 be an Odd Number', () => {
        expect(isOddNumber(9)).true;
    });

    it('should 6 be not an Odd Number', () => {
        expect(isOddNumber(6)).false;
    });

    it('should -3 be an Odd Number', () => {
        expect(isOddNumber(-3)).true;
    });

});

//Function isEvenNumber checking if given number is even
describe('function isEvenNumber', () => {
    it('should 16 be an Even Number', () => {
        expect(isEvenNumber(16)).true;
    });

    it('should 3 be not an Even Number', () => {
        expect(isEvenNumber(3)).false;
    });

    it('should -6 be an Even Number', () => {
        expect(isEvenNumber(-6)).true;
    });

});

//Function isAdult checking if given age is adult or not
describe('function isAdult', () => {
    it('should number -5 be equal to false', () => {
        expect(isAdult(-5)).false;
    });

    it('should number 0 be equal to false', () => {
        expect(isAdult(0)).false;
    });

    it('should number 20 be equal to false', () => {
        expect(isAdult(20)).false;
    });

    it('should number 21 be equal to true', () => {
        expect(isAdult(21)).true;
    });

    it('should number 22 be equal to true', () => {
        expect(isAdult(22)).true;
    });

    it('should number 234 be equal to true', () => {
        expect(isAdult(234)).true;
    });

});

//Function findDivisors finds all divisors and return 'prime' if integer is prime
describe('function findDivisors', () => {
    it('should number 15 and return the array [3, 5]', () => {
        expect(findDivisors(15)).deep.equal([3, 5]);
    });

    it('should number 12 and return the array [2, 3, 4, 6]', () => {
        expect(findDivisors(12)).deep.equal([2, 3, 4, 6]);
    });

    it('should the number 13 and return prime', () => {
        expect(findDivisors(13)).equal('13 is prime');
    });

});

//Function sumArray > sum all elements in array
describe('function sumArray', () => {
    it('should return 0 if given array is empty', () => {
        expect(sumArray([])).equal(0);
    });

    it('should return 9.2 as a sum of given array', () => {
        expect(sumArray([1, 5.2, 4, 0, -1])).equal(9.2);
    });
});

//Function oddCount return the quantity of odd number in a given integer
describe('function oddCount', () => {
    it('should return 7 for 15', () => {
        expect(oddCount(15)).equal(7);
    });

    it('should return 7511 for 15023', () => {
        expect(oddCount(15023)).equal(7511);
    });
});

//Function toBinary returns binary value to given number
describe('function toBinary', () => {
    it('should return 1 for 1', () => {
        expect(toBinary(1)).equal(1);
    });

    it('should return 11 for 3', () => {
        expect(toBinary(3)).equal(11);
    });
});

//Function returns type of given variable
describe('function typeOfVariable', () => {
    it('should return array if type is array', () => {
        expect(typeOfVariable([1, 3])).equal('array');
    });

    it('should return object if type is objects', () => {
        expect(typeOfVariable({})).equal('object');
    });

    it('should return string if type is string', () => {
        expect(typeOfVariable('s')).equal('string');
    });

    it('should return string if type is string', () => {
        expect(typeOfVariable('[].join()')).equal('string');
    });


    test;
    one more;


})










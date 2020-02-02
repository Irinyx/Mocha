const assert = require('assert');
const {sum, mult} = require('../index.js');

describe('function sum', () => {

    it('should func sum equals 6', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('should func sum not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);

    });

    it('should func sum equals 55', () => {
        assert.equal(sum(5, '5'), 55);
    });

    it('should func sum equals s5', () => {
        assert.notEqual(sum('s', 5), 5);
    })

});

describe('function mult', () => {

    it('should func mult a equals 8', () => {
        assert.equal(mult(2, 4), 8);
    });

    it('should func mult not equals 0', () => {
        assert.notEqual(mult(2, 4), 0);
    });

});


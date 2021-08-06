var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;
var Add = require('../maths');

describe('Addition Tests', function()
{
    //assert style added
    it('should return 3 when passed one and two', function(){
        var numberOne = 1;
        var numberTwo = 2;

        var expectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.equal(expectedResult);
        expect(actualResult).to.equal(expectedResult);
        assert.equal(actualResult, expectedResult);
    });

    //assert style added
    it('should return not 3 when passed one and two', function(){
        var numberOne = 1;
        var numberTwo = 4;

        var notExpectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.not.equal(notExpectedResult);
        expect(actualResult).to.not.equal(notExpectedResult);
        assert.notEqual(actualResult, notExpectedResult);
    });
});
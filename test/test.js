var should = require('chai').should();
var Add = require('../maths');

describe('Addition Tests', function()
{
    //should style
    it('should return 3 when passed one and two', function(){
        var numberOne = 1;
        var numberTwo = 2;

        var expectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.not.equal(expectedResult);

    });
});
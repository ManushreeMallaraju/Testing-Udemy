var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var Add = require('../sinonMaths');

describe('Spy Tests', function()
{
    it('should log result of add', function()
    {
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);

        // logSpy.called.should.be.true;
        logSpy.calledWith(3).should.be.true;
    });
});
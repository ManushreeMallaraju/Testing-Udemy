var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var Add = require('../sinonSpiesMaths');

describe('Spy Tests', function()
{
    it('should log result of add', function()
    {
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy(); //creating a sinon spy, with calling a spy() function
        Add(numberOne, numberTwo, logSpy); //takes a parameter of log callback(), ca
        //called as logSpy since it is a sinon spy

        // logSpy.called.should.be.true;
        logSpy.calledWith(3).should.be.true; //to check whether the spy is called or not
    });
});
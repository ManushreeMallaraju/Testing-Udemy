var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var IsAlive = require('../sinonStubsfunction');

describe('IsAlive Tests', function()
{
    it('should return true when ping callback return true', function()
    {
        var pinger = sinon.stub(); //set up sinon stub
        
        //setting the behaviour of the stub
        pinger.returns(true); //pinger returns true whenever it's called

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    });

    it('should return true when ping returns true three times in a row', function()
    {
        var pinger = sinon.stub(); //set up sinon stub
        
        //returna specific value in particular based on the no. of times. it's been called.
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    });

    it('should return false when ping does not return true three times in a row', function()
    {
        var pinger = sinon.stub(); //set up sinon stub
        
        //returna specific value in particular based on the no. of times. it's been called.
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.false;
    });

});
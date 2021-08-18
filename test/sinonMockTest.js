var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');

var API = {
 IsAlive: function() 
    {
        try {
            var pingOneSuccess = ping();
            var pingTwoSuccess = ping();
            var pingThreeSuccess = ping();
        }
        catch (e) {
            return new Error('ping threw exception');
        }
        
        if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess)
            return true;

        return false;
    },

    ping: function()
    {
        return true;
    },

    killServer: function()
    {

    }
}

describe('IsAlive Tests', function()
{ 
    it('should call ping 3 times', function()
     {
        var mockApi = sinon.mock(API);
        mockApi.expects('ping').exactly(3);

        API.IsAlive();

        mockApi.verify
        mockApi.restore();
     });

     it('should call ping atLeast one time', function()
     {
        var mockApi = sinon.mock(API);
        mockApi.expects('ping').atLeast(1);

        API.IsAlive();

        mockApi.verify
        mockApi.restore();
     });

     it('should call most 3 times', function()
     {
        var mockApi = sinon.mock(API);
        mockApi.expects('ping').atMost(3);

        API.IsAlive();

        mockApi.verify
        mockApi.restore();
     });

     it('should call ping atLeast one time, most 3 times', function()
     {
        var mockApi = sinon.mock(API);
        mockApi.expects('ping').atMost(3).atLeast(1);

        API.IsAlive();

        mockApi.verify
        mockApi.restore();
     });

     it('kill Server() should never be called', function()
     {
        var mockApi = sinon.mock(API);
        mockApi.expects('killServer').never();

        API.IsAlive();

        mockApi.verify
        mockApi.restore();
     });
});

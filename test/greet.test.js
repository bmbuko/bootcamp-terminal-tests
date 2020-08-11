let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Busi correctly', function(){
        assert.equal('Hello, Busi', greet('Busi'));
    });
    it('should greet Amber correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Amber', greet('Amber'));
    });
});
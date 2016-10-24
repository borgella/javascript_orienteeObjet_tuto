var chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
var index = require('../index');

describe('sanitize',function() {
    it('description of what my function does',function(){
        var word = 'Hello World';
        expect(word).to.equal('Hello World');
        expect(word).to.not.equal('Hellooo.. Word');
        expect(word).to.be.a('string');
        expect(word).to.not.be.a('number');
        expect(word).to.contain('ll');
    });
})

describe('Sanitizing',function(){
    it('returns the lower case of a string',function(){
        var actual = index.sanitize('HELLO WORLD');
        var expectResult = 'hello world';
        expect(actual).to.equal(expectResult);
    });
})

describe('Hyphen',function(){
    it('Suppress all - by space',function(){
        var actual = index.sanitize('Hello-world');
        var expectResult = 'hello world';
        assert.strictEqual(actual,expectResult);
    });
})

describe('tokenize',function(){
    it('returns an array by slipting a sentence',function(){
        var expectResult = index.tokenize('Don t believe the doctor');
        assert.isArray(expectResult);        
    });
});


/*
CHAI TEST TO SETUP FOR NOMORELINE PROJECT
var srcFolder = '../../../src';
var chai = require("chai");
var chaiHttp = require("chai-http");
var assert = require("chai").assert;
require("colors");

var mock = require("./mocks/mock-login");
var utilApp = require(srcFolder + "/services/utilApp");
var ourserverUrl = require(srcFolder + "/server");
//var request = chai.request(ourserverUrl);

chai.use(chaiHttp);

describe("Company Tests",function(){

    describe("/login",function(){
        it("Get the Company login page",function(done){
            chai.request(ourserverUrl)
            .get("/companies/login")
            .end(function(err,res){
                console.log(err);
                //assert.equal(res.statusCode,200);
                //assert.isTrue(res.body.success);
                //assert.strictEqual(res.body.message,"Request successfully completed");
                done();
            });
        });

    });

});
*/
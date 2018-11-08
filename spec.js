exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    specs: ['spec.js'],
   framework: 'jasmine2' ,
    onPrepare: function() {
        var reporters = require('/node_modules/jasmine-reporters');
        
        jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: '/node_modules/jasmine-reporters/testresults',
            filePrefix: 'xmloutput'
        }))
   }
 };

describe('Enter GURU99 Name', function() {
 it('should add a Name as GURU99', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('GURU99');
 var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello GURU99!');
 });
});


describe('Enter GURU99 Name with error', function() {
 it('should add a Name as GURU99', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('GURU99');
 var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(guru.getText()).toEqual('Hello change GURU99!');
  });
});
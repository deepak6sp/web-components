/**
* @Author: deepak
* @Date:   2017-01-08T15:59:20+11:00
* @Last modified by:   deepak
* @Last modified time: 2017-01-08T17:11:51+11:00
*/

'use strict';

var fail = 0, pass = 0;

var testReporter = {
    jasmineStarted: function(suiteInfo) {
        console.log('Reporting from Jasmine Reporter');
        console.log('Total specs ' + suiteInfo.totalSpecsDefined);
        console.log('--------------------------------------------------');
    },

    suiteStarted: function(result) {
        console.log("Description : " + result.description);
        console.log("\r");
    },

    specStarted: function(result) {
        console.log('Spec - ' + result.id + ' : '  + result.description);

    },

    specDone: function(result) {
      if(result.status == "failed"){
        console.log('\x1b[31m', "Failed :", result.failedExpectations[0].message, '\x1b[0m');
        fail++;
      }
      if(result.status == "passed"){
        console.log('\x1b[36m', "Success :", result.passedExpectations[0].message, '\x1b[0m');
        pass++;
      }
      console.log("\r");
    },

    suiteDone: function(result) {

      console.log('--------------------------------------------------');
    },

    jasmineDone: function(suiteInfo) {
        console.log('Finished suite');
        console.log("Passed :",pass," - ",'\x1b[31m',"Failed:",fail,'\x1b[0m');
    }
};

module.exports = testReporter;
//jasmine.getEnv().addReporter(myCustomReporter);

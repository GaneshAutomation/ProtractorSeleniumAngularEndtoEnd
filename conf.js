// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
    },
   
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    framework: 'jasmine2',
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));


    //Screenshot
    var fs = require('fs-extra');
 
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'passed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('./screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
},
    
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['Specs/myfirst_spec.js'],
  
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    
    //HTMLReport called once tests are finished
onComplete: function() {
  var browserName, browserVersion;
  var capsPromise = browser.getCapabilities();

  capsPromise.then(function (caps) {
     browserName = caps.get('browserName');
     browserVersion = caps.get('version');

     var HTMLReport = require('protractor-html-reporter');

     testConfig = {
         reportTitle: 'Test Execution Report',
         outputPath: './',
         screenshotPath: './screenshots',
         testBrowser: browserName,
         browserVersion: browserVersion,
         modifiedSuiteName: false,
         screenshotsOnlyOnFailure: false
     };
     new HTMLReport().from('./testresults/xmloutput.xml', testConfig);
 });
},
// onPrepare: function() {
//   var jasmineReporters = require('C:/Workspace/Protractor/node_modules/jasmine-reporters');
//   jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
//   );
// }

  };
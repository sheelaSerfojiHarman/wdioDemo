const report = require('multiple-cucumber-html-reporter');
const reporter = require('cucumber-html-reporter');

report.generate({
  jsonDir: './reports/json/', // Path to the folder containing JSON reports
  reportPath: './reports/html/', // Path to the output HTML report
  metadata:{
    browser: {
      name: 'chrome',
      version: '91127'
    },
    device: 'Local Test Machine',
    platform: {
      name: 'Windows',
      version: '10'
    }
  },
  customData: {
    title: 'Regression Report',
    data: [
      {label: 'Project', value: 'Sauce Demo'},
      {label: 'Release', value: '1'},
      {label: 'Cycle', value: 'B11221.34321'},
      {label: 'Execution Start Time', value: 'Aug 1st 2024, 10:00 AM EST'},
      {label: 'Execution End Time', value: 'Aug 1st 2024, 10:30 AM EST'}
    ]
  }
});

var options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  90.0.4430.93",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
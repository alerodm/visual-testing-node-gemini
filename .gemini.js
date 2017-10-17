module.exports = {
  rootUrl: 'https://www.rottentomatoes.com/',
  gridUrl: 'http://127.0.0.1:4444/wd/hub',
  windowSize: '1280x800',
  system: {
    plugins: {
      'html-reporter': {
        enabled: true,
        path: 'reports',
        errorsOnly: false
      }
    }
  },
  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [ '--headless', '--disable-gpu' ]
        },
      }
    }
  },
  sets: {
    sampleSuite: {
      files: ['test/test.gemini.js']
    }
  }
};
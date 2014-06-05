module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    //frameworks: ['requirejs', 'mocha', 'chai', 'sinon'],  //aaargh... here order matters! (if requirejs is included after chai, tests will fail miserably)
    files: [
      //'app/**/*.js', //not including any actual code for now... TODO: include more files ..
      'test/**/*.spec.js'
    ],
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    //logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 6000,
    singleRun: true
  });
};
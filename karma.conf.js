// Karma configuration


// base path, that will be used to resolve files and exclude
basePath = '.';



// list of files / patterns to load in the browser
files = [
	JASMINE,
	JASMINE_ADAPTER,
	
	/* Dojo config: */
	"dojo-config.js",
	/* Dojo Karma adapter */
	"dojo-adapter.js",
	
	/* dojo main file */
	"lib/dojo/dojo.js",


	//AMD files will be loaded if require by another AMD
	{pattern: 'lib/dojo/**/*.js', included:false, served:true, watched:true},
	{pattern: 'lib/dijit/**/*.js', included:false, served:true, watched:false},


	{pattern: 'src/**/*.js', included: false, served:true, watched:true},
	{pattern: 'src/**/*.html', included: false, served:true, watched:true},
	{pattern: 'test/**/*Spec.js', included: false, served:true, watched:true},
	


];


// list of files to exclude
exclude = [
  //'lib/dojo/tests/**/*.*',
  //'lib/dijit/tests/**/*.*'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

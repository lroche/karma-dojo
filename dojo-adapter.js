(function(karma, dojoConfig){
	if(dojoConfig == null){
		//configuration error, abort now
		throw new Error("DojoConfig variable is missing");
	}

	//Disable cause of async loading: 
	karma.loaded=function(){}

	var tests = [];
	for (var file in karma.files) {
    	if (/Spec\.js$/.test(file)) {
        	tests.push(file);
    	}
	}
	//AMD test modules:
	dojoConfig.deps = tests;
	 //callback used when specified deps will be loaded:
	dojoConfig.callback = karma.start;

})(window.__karma__, window.dojoConfig)

//Dojo Configuration  :
var dojoConfig = {
    async:true, //All your sources MUST be AMD compliant !
    
	baseUrl: "/base/src",
   
    cacheBust:new Date(),
    packages:[
    	{name:"dojo", location:"/base/lib/dojo"},
    	{name:"dijit", location:"/base/lib/dijit"},

    	{name:"myApp", location:"/base/src/myApp"}
    ],
    //updated by dojo-adapter:
    deps: null, 
    waitSeconds:30, 
    //custom objects 
    customConfig:{ 
    	foo:'bar',
        car:'cdr'
    },
    has:{
    	//Useful for unloading modules and Mock/Fake tests
    	"dojo-undef-api":0,
    },
    //Dojo Trace API 
    //for debugging :
    trace:{
    	"loader-run-factory":0,
    	"loader-define":0
    },
    //callback used when specified deps will be loaded:
    callback:null, //updated by dojo-adapter


}
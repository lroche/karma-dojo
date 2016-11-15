Karma-dojo
=========

Mainly, an adapter for testing [Dojo](http://dojotoolkit.org) code with [Karma](http://karma-runner.github.io/0.8/) platform.

Here, some examples using the famous [Jasmine](https://jasmine.github.io/) bdd framework.



Setup
-----

install karma:

	npm install karma -g

download [Dojo toolkit SDK](http://dojotoolkit.org/download) and put into a lib directory or install by using [CPM](https://github.com/kriszyp/cpm "Common Package Manager") :

	mkdir lib
	cd lib
	cpm install dijit 1.8.2
	cd ..

Run
-----
	karma start karma.conf.js



Dev 
-----

Designed only for Karma 0.8.x (stable version).
Tested with Dojo 1.8.2 and 1.9.0 SDK.


Licence
-----

MIT License







This branch adds an optional field to the options given to the validateXML function.
If the user adds a field ```format``` with the content ```rng```, then the
argument used will be ```--relaxng``` instead of ```--schema```. Otherwise
```--schema``` is used.

-----------------------------------------------------------------------------------

Online demo at [http://syssgx.github.io/xml.js/](https://syssgx.github.io/xml.js/)

This package exports the `xmllint` object which is an Emscripten port of
libxml2's `xmllint` command for use in the browser or node.

##### API #####

```javascript

Object xmllint.validateXML({
	xml: "String",
	schema: "String" || ["String", "String", ...]
});

```

The return value Object has one property `errors` which is either null,
in the case of no errors, or an Array of error strings....eg:

```javascript

if (!xmllint.validateXML(opts).errors) {
	//there were no errors.
}

```

Usable with Browserify via `browserify-shim`.

#### Building xmllint from source ####

Setup emscripten
```
	git clone https://github.com/emscripten-core/emsdk.git
	cd emsdk
	git checkout 3.1.29
	./emsdk install 1.40.1-fastcomp
	./emsdk activate 1.40.1-fastcomp
	source emsdk_env.sh
```

Build
```
	git clone
	git submodule init
	git submodule update
	./script/clean
	./script/libxml2
	./script/compile
	./script/test
```

There are also equivalent `gulp` tasks.

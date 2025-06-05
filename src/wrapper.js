export const xmllint = {};

xmllint.validateXML = function (options) {
	var Module = {
		xml: options.xml,
		schema: options.schema,
		TOTAL_MEMORY: options.TOTAL_MEMORY
	};

  if (options.format === 'rng') {
		Module['extension'] = '--relaxng';
	} else {
		Module['extension'] = '--schema';
	}

	/* XMLLINT.RAW.JS */

	Module['return'] = Module['return'].split('\n').slice(0,-1);

	// Do this in a JSLint style way...
	return {
		errors: Module['return'].length ? Module['return'] : null
	};
}

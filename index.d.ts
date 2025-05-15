type ValidateXmlOpts = {
    xml: string;
    schema: string | string[];
};

type ValidateXmlResult = {
    errors: null | string[];
};

interface XmlLint {
    validateXML: (opts: ValidateXmlOpts) => ValidateXmlResult;
}

export declare const xmllint: XmlLint;

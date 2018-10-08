/* eslint-disable */
module.exports = [{ "description": "", "commentRange": { "start": 17, "end": 23 }, "context": { "type": "function", "name": "oTestComponentDouble", "code": "\n    @return 2 * $scale;\n", "line": { "start": 24, "end": 26 } }, "group": ["helpers"], "return": { "type": "Number" }, "example": [{ "type": "scss", "code": "oTestComponentDouble(2) //4" }, { "type": "scss", "code": "oTestComponentDouble(10) //10" }], "deprecated": "This function has been replaced. Please contact Origami with any questions.", "access": "public", "require": [], "file": { "path": "src/scss/_functions.scss", "name": "_functions.scss" } }, { "description": "", "commentRange": { "start": 28, "end": 30 }, "context": { "type": "function", "name": "_oTestComponentGetSize", "code": "\n    @return 25 * $scale;\n", "line": { "start": 31, "end": 33 } }, "group": ["helpers"], "return": { "type": "Number" }, "access": "private", "require": [], "file": { "path": "src/scss/_functions.scss", "name": "_functions.scss" }, "usedBy": [{ "description": "The main stlyes fo a big test component.\n", "context": { "type": "mixin", "name": "oTestComponentBig", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(1);\n    width: _oTestComponentGetSize(1);\n", "line": { "start": 2, "end": 6 } } }, { "description": "The main stlyes fo a big test component.\n", "context": { "type": "mixin", "name": "oTestComponentBig", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(1);\n    width: _oTestComponentGetSize(1);\n", "line": { "start": 2, "end": 6 } } }, { "description": "The main styles for a small test component.\n", "context": { "type": "mixin", "name": "oTestComponentSmall", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(2);\n    width: _oTestComponentGetSize(2);\n", "line": { "start": 9, "end": 13 } } }, { "description": "The main styles for a small test component.\n", "context": { "type": "mixin", "name": "oTestComponentSmall", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(2);\n    width: _oTestComponentGetSize(2);\n", "line": { "start": 9, "end": 13 } } }] }, { "description": "", "commentRange": { "start": 84, "end": 87 }, "context": { "type": "mixin", "name": "_oTestComponentThrowError", "code": "\n    // :point-up: This is to test an implicitly private function.\n    @error 'o-test-component says: #{$message}';\n", "line": { "start": 88, "end": 91 } }, "group": ["helpers"], "throw": ["o-test-component says: #{$message}"], "access": "private", "require": [], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" }, "usedBy": [{ "description": "Applies to a test component.\n", "context": { "type": "mixin", "name": "oTestComponentTheme", "code": "\n    @if type-of(theme) != 'map' {\n        @include _oTestComponentThrowError('Invalid theme.');\n    }\n    background-color: map-get($theme, $primary-color);\n    border-color: map-get($theme, $secondary-color);\n", "line": { "start": 39, "end": 45 } } }] }, { "description": "A placeholder for shared styles.\n    It's \"naughty\" as we usually avoid them.\n", "commentRange": { "start": 6, "end": 7 }, "context": { "type": "placeholder", "name": "o-test-component", "code": "\n        content: 'Naughty palceholder.';\n    ", "line": { "start": 8, "end": 10 } }, "access": "public", "group": ["undefined"], "file": { "path": "main.scss", "name": "main.scss" } }, { "description": "", "commentRange": { "start": 1, "end": 6 }, "context": { "type": "function", "name": "oTestComponentTell", "code": "\n    @if $keep-quiet {\n        @return null;\n    }\n    @if $truth {\n        @return 'Copy-pasta: This code has an author.';\n    }\n    @return 'I made this.';\n", "line": { "start": 7, "end": 15 } }, "link": [{ "url": "https://www.google.co.uk/", "caption": "" }], "author": ["Jane Madeup Smith", "John Madeup Smith"], "parameter": [{ "type": "Bool", "name": "keep-quiet", "default": "false", "description": "Whether to tell (default) or keep quiet." }, { "type": "Bool", "name": "truth", "default": "true", "description": "Whether to tell the truth (default) or lie." }], "return": { "type": "String|Null", "description": "A made-up sentence." }, "access": "public", "group": ["undefined"], "require": [], "file": { "path": "src/scss/_functions.scss", "name": "_functions.scss" } }, { "description": "The main stlyes fo a big test component.\n", "commentRange": { "start": 1, "end": 1 }, "context": { "type": "mixin", "name": "oTestComponentBig", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(1);\n    width: _oTestComponentGetSize(1);\n", "line": { "start": 2, "end": 6 } }, "access": "public", "group": ["undefined"], "require": [{ "type": "mixin", "name": "_oTestComponentBase" }, { "type": "function", "name": "_oTestComponentGetSize" }, { "type": "function", "name": "_oTestComponentGetSize" }], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "The main styles for a small test component.\n", "commentRange": { "start": 8, "end": 8 }, "context": { "type": "mixin", "name": "oTestComponentSmall", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(2);\n    width: _oTestComponentGetSize(2);\n", "line": { "start": 9, "end": 13 } }, "access": "public", "group": ["undefined"], "require": [{ "type": "mixin", "name": "_oTestComponentBase" }, { "type": "function", "name": "_oTestComponentGetSize" }, { "type": "function", "name": "_oTestComponentGetSize" }], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "Output CSS only if a given feature is supported.\n", "commentRange": { "start": 15, "end": 22 }, "context": { "type": "mixin", "name": "oTestComponentIfFeature", "code": "\n    @if map-get($map: $o-test-component-features, $key: $feature) {\n        @content;\n    }\n", "line": { "start": 23, "end": 27 } }, "content": "Conditional CSS styles.", "example": [{ "type": "scss", "code": "@include oTestComponentIfFeature($feature: 'small') {\n    .o-test-component-small--mymodifier {\n        border-color: blue;\n    };\n}" }], "access": "public", "group": ["undefined"], "require": [{ "type": "variable", "name": "o-test-component-features" }], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "Applies to a test component.\n", "commentRange": { "start": 29, "end": 38 }, "context": { "type": "mixin", "name": "oTestComponentTheme", "code": "\n    @if type-of(theme) != 'map' {\n        @include _oTestComponentThrowError('Invalid theme.');\n    }\n    background-color: map-get($theme, $primary-color);\n    border-color: map-get($theme, $secondary-color);\n", "line": { "start": 39, "end": 45 } }, "example": [{ "type": "scss", "code": ".my-test-component {\n    @include oTestComponentBig();\n    @include oTestComponentTheme($theme: (primary-color: red, secondary-color: blue));\n}", "description": "A big test component with a custom theme." }], "see": [{ "description": "The main stlyes fo a big test component.\n", "context": { "type": "mixin", "name": "oTestComponentBig", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(1);\n    width: _oTestComponentGetSize(1);\n", "line": { "start": 2, "end": 6 } } }, { "description": "The main styles for a small test component.\n", "context": { "type": "mixin", "name": "oTestComponentSmall", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(2);\n    width: _oTestComponentGetSize(2);\n", "line": { "start": 9, "end": 13 } } }], "parameter": [{ "type": "Map", "name": "theme", "description": "Apply a custom theme to the component. Theme keys include 'primary-color' and 'secondary-color' (see example)." }], "throw": ["An invalid theme will throw an error."], "access": "public", "group": ["undefined"], "require": [{ "type": "mixin", "name": "_oTestComponentThrowError" }], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "B2b modifier.\n", "commentRange": { "start": 47, "end": 52 }, "context": { "type": "mixin", "name": "oTestComponentB2b", "code": "\n    background-color: $o-test-component-b2b-color;\n    @if $bold {\n        font-weight: bold;\n    }\n", "line": { "start": 53, "end": 58 } }, "output": "Modifiying, cosmetic styles to make a test component fit the B2B look.", "link": [{ "url": "http://example.com", "caption": "Some helpful link to B2b materials." }], "brand": { "supported": ["master"], "description": "" }, "since": [{ "version": "v2.0.0", "description": "All versions since support B2b styles." }], "parameter": [{ "type": "Bool", "name": "bold", "default": "false", "description": "To make the b2b component copy strong." }], "access": "public", "group": ["undefined"], "require": [{ "type": "variable", "name": "o-test-component-b2b-color" }], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "Marketing modifier.\n", "commentRange": { "start": 60, "end": 63 }, "context": { "type": "mixin", "name": "oTestComponentMarketing", "code": "\n    background-color: aqua;\n", "line": { "start": 64, "end": 66 } }, "ignore": [], "output": "Modifiying, cosmetic styles to make a test component fit the marketing look.", "brand": { "supported": ["master"], "description": "" }, "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "Inverse modifier.\n", "commentRange": { "start": 68, "end": 70 }, "context": { "type": "mixin", "name": "oTestComponentInverse", "code": "\n    background-color: white;\n    color: darkslategray;\n", "line": { "start": 71, "end": 74 } }, "output": "Modifiying, cosmetic styles to make a test component work on a dark background.", "brand": { "supported": ["master", "internal"], "description": "" }, "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" } }, { "description": "", "commentRange": { "start": 76, "end": 76 }, "context": { "type": "mixin", "name": "_oTestComponentBase", "code": "\n    border: 1px solid hotpink;\n    &:after {\n        content: 'Test component scss.';\n    }\n", "line": { "start": 77, "end": 82 } }, "access": "private", "group": ["undefined"], "file": { "path": "src/scss/_mixins.scss", "name": "_mixins.scss" }, "usedBy": [{ "description": "The main stlyes fo a big test component.\n", "context": { "type": "mixin", "name": "oTestComponentBig", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(1);\n    width: _oTestComponentGetSize(1);\n", "line": { "start": 2, "end": 6 } } }, { "description": "The main styles for a small test component.\n", "context": { "type": "mixin", "name": "oTestComponentSmall", "code": "\n    @include _oTestComponentBase();\n    height: _oTestComponentGetSize(2);\n    width: _oTestComponentGetSize(2);\n", "line": { "start": 9, "end": 13 } } }] }, { "description": "", "commentRange": { "start": 1, "end": 1 }, "context": { "type": "variable", "name": "o-test-component-is-silent", "value": "true", "scope": "default", "line": { "start": 2, "end": 2 } }, "type": "Bool", "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" } }, { "description": "", "commentRange": { "start": 4, "end": 4 }, "context": { "type": "variable", "name": "o-test-component-main-color", "value": "hotpink", "scope": "private", "line": { "start": 5, "end": 5 } }, "type": "Color", "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" }, "aliased": ["o-test-component-primary-color"] }, { "description": "B2b variant colour.\n", "commentRange": { "start": 7, "end": 8 }, "context": { "type": "variable", "name": "o-test-component-b2b-color", "value": "blue", "scope": "private", "line": { "start": 9, "end": 9 } }, "type": "Color | Null", "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" }, "usedBy": [{ "description": "B2b modifier.\n", "context": { "type": "mixin", "name": "oTestComponentB2b", "code": "\n    background-color: $o-test-component-b2b-color;\n    @if $bold {\n        font-weight: bold;\n    }\n", "line": { "start": 53, "end": 58 } } }] }, { "description": "", "commentRange": { "start": 11, "end": 12 }, "context": { "type": "variable", "name": "o-test-component-primary-color", "value": "$o-test-component-main-color", "scope": "private", "line": { "start": 13, "end": 13 } }, "type": "Color", "alias": "o-test-component-main-color", "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" } }, { "description": "", "commentRange": { "start": 15, "end": 15 }, "context": { "type": "variable", "name": "o-test-component-features", "value": "('big', 'small')", "scope": "private", "line": { "start": 16, "end": 16 } }, "type": "Map", "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" }, "usedBy": [{ "description": "Output CSS only if a given feature is supported.\n", "context": { "type": "mixin", "name": "oTestComponentIfFeature", "code": "\n    @if map-get($map: $o-test-component-features, $key: $feature) {\n        @content;\n    }\n", "line": { "start": 23, "end": 27 } } }] }, { "description": "", "commentRange": { "start": 18, "end": 27 }, "context": { "type": "variable", "name": "o-test-component-scales", "value": "(\n    'marketing': (\n        'miniture': -5,\n        'normal': 6,\n        'massive': 15,\n    ),\n    'default': (\n        'miniture': -10,\n        'normal': 1,\n        'massive': 10,\n    ),\n)", "scope": "private", "line": { "start": 28, "end": 39 } }, "todo": ["Integrate scale with size related mixins."], "type": "Map", "property": [{ "type": "Map", "name": "base.marketing" }, { "type": "Map", "name": "base.default" }, { "type": "Number", "name": "base.default.miniture" }, { "type": "Number", "name": "base.default.normal" }, { "type": "Number", "name": "base.default.massive" }, { "type": "Number", "name": "base.marketing.miniture" }, { "type": "Number", "name": "base.marketing.normal" }, { "type": "Number", "name": "base.marketing.massive" }], "access": "public", "group": ["undefined"], "file": { "path": "src/scss/_variables.scss", "name": "_variables.scss" } }];

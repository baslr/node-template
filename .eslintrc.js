'use strict';

const nodeEnv = process.env.NODE_ENV;

module.exports = {
    env: {
        node: true,
        es6: true,
        jest: true
    },
    extends: ['airbnb-base', 'eslint:recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        yoda: 0,
        'space-unary-ops': [2, {
            words: true,
            nonwords: false
        }],
        "arrow-body-style": 0,
        "arrow-parens": 2,
        "class-methods-use-this": 0,
        "comma-dangle": 0,
        "import/prefer-default-export": 0,
        "max-len": [1, 200, 2, { "ignoreComments": true }],
        "object-curly-newline": 0,
        "no-nested-ternary": 0,
        "no-return-assign": 0,
        "no-param-reassign": 0,
        "import/no-extraneous-dependencies": 0,
        "no-case-declarations": 0,
        "no-plusplus": 0,
        "object-shorthand": 0,
        "padded-blocks": 0,
        "prefer-destructuring": 0,
        "lines-between-class-members": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

// enable jest for test checks
if (nodeEnv === 'test') {
    module.exports.env.jest = true;
}

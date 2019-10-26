module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "strict": 0,
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    "indent": ["error", 4],
    "linebreak-style": 0,
    "no-const-assign": "warn",
    'no-extra-semi': 'error',
    "no-this-before-super": "warn",
    "no-multi-spaces": 1,
    "no-multiple-empty-lines": [1, { "max": 1 }],
    "no-undef": "warn",
    "no-unreachable": "warn",
    "no-unused-vars": "warn",
    "constructor-super": "warn",
    "valid-typeof": "warn",
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "functions": "never"
    }],
    "quotes": [2, "single"]
  }
}

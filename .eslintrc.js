module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'jest'
  ],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "import/no-unresolved": "off"
  },
};

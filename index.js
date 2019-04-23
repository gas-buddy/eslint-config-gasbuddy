// We need to do this horrible thing because of the interaction of module resolution and npm 5.
// We want our dependencies to just depend on eslint-config-gasbuddy and be done, but
// this doesn't work if the binary is running from the referencing package because npm5 buries our
// dependencies under eslint-config-gasbuddy node_modules, where eslint will not find them.
var monkeypatch = require('monkeypatch');

var replacements = {
  'eslint-plugin-jsx-a11y': require('eslint-plugin-jsx-a11y'),
  'eslint-plugin-react': require('eslint-plugin-react'),
  'eslint-plugin-import': require('eslint-plugin-import'),
};

monkeypatch(require('module').prototype, 'require', function (original, modname) {
  if (replacements[modname]) {
    return replacements[modname];
  }
  return original(modname);
});

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['babel'],
  rules: {
    camelcase: 0,
    'babel/camelcase': ['error', { properties: 'never' }],
    'max-len': ['error', 160, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'jsx-a11y/href-no-hash': 'off',
    'object-curly-newline': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'import/prefer-default-export': [0],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-update-set-state': false,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
};

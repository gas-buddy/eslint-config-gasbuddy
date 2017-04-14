module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'import/prefer-default-export': [0],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'react/jsx-filename-extension': [1, { "extensions": ['.js', '.jsx'] }],
    'no-param-reassign': [
      2,
      {
        props: false,
      }
    ],
  },
}

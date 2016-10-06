module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'import/prefer-default-export': [0],
    'no-param-reassign': [
      2,
      {
        props: false,
      }
    ],
  },
}
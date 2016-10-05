module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'no-param-reassign': [
      2,
      {
        props: false,
      }
    ],
  },
}
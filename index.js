module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'import/prefer-default-export': [0],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
};

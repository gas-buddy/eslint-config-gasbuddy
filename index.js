module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:react-hooks/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: ['@typescript-eslint', 'react-hooks'],
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      extends: [
        'airbnb/base',
        'plugin:react-hooks/recommended'
      ],
      parser: '@babel/eslint-parser',
      plugins: ['@babel', 'react-hooks'],
    }
  ],
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

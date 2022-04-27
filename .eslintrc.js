module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      },
    },
  },
}

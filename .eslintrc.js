module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/prop-types': 1,
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'no-param-reassign': 'off',
  },
};

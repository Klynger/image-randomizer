const path = require('path')

module.exports = {
  extends: [
    '@kiwi/eslint-config/react',
    'plugin:@next/eslint-plugin-next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 'off',
    '@next/next/no-html-link-for-pages': [1, path.join(__dirname, 'pages')],
    '@next/next/no-img-element': 0,
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Checkbox'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

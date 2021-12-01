module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.ts'],
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:storybook/recommended',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['*.js'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
      },
    ],
    'no-multi-assign': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}

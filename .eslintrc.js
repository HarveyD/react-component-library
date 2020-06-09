module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    './node_modules/gts/',
    './config/react-app.eslint.js',
  ],
  plugins: ['eslint-plugin-simple-import-sort'],
  rules: {
    'simple-import-sort/sort': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    afterAll: 'readonly',
    jest: 'readonly',
  },
};

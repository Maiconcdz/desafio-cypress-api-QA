
module.exports = {
  env: {
    node: true,
    es2021: true,
    mocha: true
  },
  extends: ['eslint:recommended', 'plugin:cypress/recommended', 'prettier'],
  plugins: ['cypress'],
  rules: {
    'no-unused-vars': ['warn'],
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['**/cypress/**/*.js', '**/cypress/**/*.cy.js'],
      env: {
        mocha: true,
        browser: false
      }
    }
  ]
};

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {},
  globals: {},
};

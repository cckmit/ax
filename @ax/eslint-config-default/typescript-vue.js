module.exports = {
  extends: [
    './typescript.js',
    'plugin:vue/recommended',
    '@vue/typescript',
    '@vue/prettier',
  ],
  rules: {
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  }
}

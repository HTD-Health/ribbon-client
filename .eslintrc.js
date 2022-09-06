module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'simple-import-sort', 'import'],
  env: {
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
    project: ['./tsconfig.json']
  },
  overrides: [
    {
      files: ['*.ts']
    }
  ],
  rules: {
    "prettier/prettier": "error",
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
};

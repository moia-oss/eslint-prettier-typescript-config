import base from './eslint-base';

export = {
  parser: base.parser,
  plugins: base.plugins,
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  rules: base.rules,
};

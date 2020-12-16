import base from './eslint-base';

export = {
  parser: base.parser,
  plugins: base.plugins,
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/react',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  rules: {
    ...base.rules,
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

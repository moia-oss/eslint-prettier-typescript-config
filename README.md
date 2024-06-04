# eslint-prettier-typescript-config

_This project was once a collection of shared MOIA TypeScript, eslint and prettier configurations. It's now just a README._

This document is intended to be used as a starting point for setting up your TypeScript project with ESLint and Prettier.

The following steps presume you have an existing repository with a `package.json` (you can do this with `npm init`) that is [of type "module"](https://nodejs.org/api/packages.html#type).

1. Install TypeScript

   ```bash
   npm install --save-dev typescript
   ```

2. Configure TypeScript

   Create a `tsconfig.json` in your project root:

   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "esnext",
       "strict": true,
       "esModuleInterop": true,
       "outDir": "./dist"
     },
     "include": ["src/**/*"]
   }
   ```

3. Install Prettier

   ```bash
   npm install --save-dev prettier
   ```

4. Configure Prettier

   Create a `.prettierrc` file in your project root:

   ```json
   {
     "semi": false,
     "singleQuote": true
   }
   ```

5. Install ESLint and ESLint plugins

   ```bash
   npm install --save-dev eslint @eslint/js eslint-config-prettier typescript-eslint
   ```

6. Configure ESLint

   Create an `eslint.config.js`

   ```js
   import eslint from "@eslint/js";
   import prettier from "eslint-config-prettier";
   import typescript from "typescript-eslint";

   export default [
     {
       ignores: ["node_modules/*", "dist/*"],
     },
     {
       languageOptions: {
         parserOptions: {
           projectService: true,
         },
       },
     },
     eslint.configs.recommended,
     ...typescript.configs.recommended,
     // prettier should be the last config because it disables all formatting rules
     prettier,
   ];
   ```

7. Add Scripts

   Edit your `package.json` to include build, lint and format scripts:

   ```json
   "scripts": {
     "build": "tsc",
     "lint": "eslint ./src",
     "format": "prettier ./src --check"
   }
   ```

## VSCode

- To enable auto-formatting (prettier) and auto-fixing (ESLint) in VSCode, you can add this to your `.vscode/settings.json`:

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

- To recommend the ESLint and Prettier plugins vor VSCode, you can add this to your `.vscode/extensions.json`:

  ```json
  {
    "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
  }
  ```

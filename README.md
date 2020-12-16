# eslint-prettier-typescript-config

Shared MOIA TypeScript, eslint and prettier configuration

## Usage

1. Install

   ```sh
   yarn add -D typescript eslint prettier
   yarn add -D @moia-dev/eslint-prettier-typescript-config
   ```

2. Link configurations

   (customise paths as needed)

   - `tsconfig.json`

     ```json
     {
       "extends": "./node_modules/@moia-dev/eslint-prettier-typescript-config/tsconfig.json",
       "compilerOptions": {
         "outDir": "./build",
         "rootDir": "./src"
       },
       "include": ["./src"]
     }
     ```

   - `.eslintrc`

     ```json
     {
       "extends": ["./node_modules/@moia-dev/eslint-prettier-typescript-config/config/eslint.js"],
       "parserOptions": {
         "project": "./tsconfig.json"
       }
     }
     ```

     :warning: If you're using react, use `eslint-react.js` instead!

   - `.prettierrc`

     ```json
     "@moia-dev/eslint-prettier-typescript-config/config/prettier"
     ```

3. Add scripts to `package.json`

   (customise paths as needed)

   ```json
   {
     "scripts": {
       "build": "tsc",
       "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src/",
       "format": "prettier . --write",
       "format:check": "prettier . --check"
     }
   }
   ```

4. Done! Don't forget to run `build`, `lint` and `format:check` in your CI workflow.

## Optional Additions

- VSCode lint/format settings in `.vscode/settings.json`

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

- VSCode extension recommendations in `.vscode/extensions.json`

  ```json
  { "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"] }
  ```

- `.editorconfig`

  ```ini
  [*]
  end_of_line = lf
  insert_final_newline = true
  charset = utf-8
  indent_style = space
  indent_size = 2
  ```

## Config Development

> This relates to the development of _this package_. Ignore this section as a consumer.

This package uses its own exported config to build, lint and format itself. This also makes sure that the configs are valid, as the steps are run during the GitHub Actions build step.

Because of this, you _must_ run `yarn build` before linting or formatting during development

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
        "extends": [
          "./node_modules/@moia-dev/eslint-prettier-typescript-config/config/eslint.js"
        ],
        "parserOptions": {
          "project": "./tsconfig.json"
        }
      }
      ```

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

- `.editorconfig`

    ```ini
    [*]
    end_of_line = lf
    insert_final_newline = true
    charset = utf-8
    indent_style = space
    indent_size = 2
    ```

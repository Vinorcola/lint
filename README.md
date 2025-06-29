# Vinorcola config for ESlint & Prettier

## Usage

```
npm i -D @vinorcola/lint
```

Add to `package.json` the following block:

```json
{
    "eslintConfig": {
        "extends": ["@vinorcola/lint"]
    }
}
```

You can override rules like this:

```json
{
    "eslintConfig": {
        "extends": ["@vinorcola/lint"],
        "rules": {
            "prettier/prettier": "warn"
        }
    }
}
```

For more ellaborate usage, please check https://eslint.org/docs/latest/extend/shareable-configs#using-a-shareable-config.

## Installing dependencies manually (not required)

```
npm i -D @eslint/js eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-unused-imports globals prettier typescript-eslint
```

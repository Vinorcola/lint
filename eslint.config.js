import js from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        ignores: ["build"],
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            pluginPrettierRecommended,
            pluginImport.flatConfigs.recommended,
            pluginImport.flatConfigs.typescript,
            react.configs.flat.recommended,
            react.configs.flat["jsx-runtime"],
        ],
        files: [
            "client/**/*.{ts,tsx}",
            "migrations/**/*.js",
            "server/**/*.ts",
            "type/**/*.ts",
            "eslint.config.js",
            "prettier.config.js",
            "vite.config.ts",
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "unused-imports": unusedImports,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/consistent-type-imports": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off", // Overriden by unused-imports
            "import/newline-after-import": "warn",
            "import/no-unresolved": "off",
            "import/order": [
                "warn",
                {
                    groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
                    pathGroups: [
                        {
                            pattern: "@App/**",
                            group: "internal",
                        },
                        {
                            pattern: "./**",
                            group: "sibling",
                            position: "after",
                        },
                        {
                            pattern: ".",
                            group: "sibling",
                            position: "after",
                        },
                    ],
                    pathGroupsExcludedImportTypes: ["builtin"],
                    distinctGroup: false,
                    alphabetize: {
                        order: "asc",
                    },
                    "newlines-between": "always",
                },
            ],
            "no-empty": [
                "warn",
                {
                    allowEmptyCatch: true,
                },
            ],
            "prettier/prettier": [
                "warn",
                {
                    printWidth: 120,
                    tabWidth: 4,
                    semi: false,
                    singleQuote: false,
                    trailingComma: "all",
                    endOfLine: "lf",
                },
            ],
            "react/jsx-curly-brace-presence": [
                "warn",
                {
                    props: "never",
                    children: "never",
                    propElementValues: "always",
                },
            ],
            "react/no-unescaped-entities": "warn",
            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
            "unused-imports/no-unused-imports": "warn",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    caughtErrors: "none",
                },
            ],
        },
    },
)

import javascriptPlugin from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefreshPlugin from "eslint-plugin-react-refresh"
import tailwindcssPlugin from "eslint-plugin-tailwindcss"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import globals from "globals"
import typescriptPlugin from "typescript-eslint"

export default typescriptPlugin.config(
    {
        ignores: ["build"],
    },
    {
        extends: [
            javascriptPlugin.configs.recommended,
            ...typescriptPlugin.configs.recommended,
            importPlugin.flatConfigs.recommended,
            importPlugin.flatConfigs.typescript,
            prettierPluginRecommended,
            reactPlugin.configs.flat.recommended,
            reactPlugin.configs.flat["jsx-runtime"],
            ...tailwindcssPlugin.configs["flat/recommended"],
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        plugins: {
            "react-hooks": reactHooksPlugin,
            "react-refresh": reactRefreshPlugin,
            "unused-imports": unusedImportsPlugin,
        },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
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

const globals = require("globals");
const js = require("@eslint/js");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const prettierConfig = require("eslint-config-prettier");
//const JSONCPlugin = require("eslint-plugin-jsonc");
//const cssPlugin = require("eslint-plugin-css");
const htmlPlugin = require("@html-eslint/eslint-plugin");
const htmlParser = require("@html-eslint/parser");

module.exports = [
	js.configs.recommended,
	prettierRecommended,
	prettierConfig,
	/* Crashes VS Code ESLint extension */
	//...JSONCPlugin.configs["flat/recommended-with-jsonc"],
	//...JSONCPlugin.configs["flat/prettier"],
	/* Doesn't yet support flat config format */
	//cssPlugin.configs.recommended,
	{
		files: ["**/*.html"],
		plugins: { "@html-eslint": htmlPlugin },
		languageOptions: {
			parser: htmlParser,
		},
		rules: {
			"@html-eslint/indent": "error",
		},
	},
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: { ...globals.browser },
		},
	},
	{
		ignores: [".yarn/*", ".pnp.cjs", ".pnp.loader.mjs"],
	},
];

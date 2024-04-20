const globals = require("globals");
const js = require("@eslint/js");
const prettierRecommended = require("eslint-plugin-prettier/recommended");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
	js.configs.recommended,
	prettierRecommended,
	prettierConfig,
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

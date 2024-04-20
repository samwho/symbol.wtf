import globals from "globals";
import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import prettierConfig from "eslint-config-prettier";

export default [
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

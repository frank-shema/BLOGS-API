// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2022, // Use latest ECMAScript
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json', // Ensure TypeScript knows the project
        tsconfigRootDir: import.meta.dirname,
        strict: true, // Enforce strict typing
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'off', // ✅ Turn off the error
      '@typescript-eslint/no-unsafe-member-access': 'off', // ✅ Fix unsafe access issue
    },
  },
);

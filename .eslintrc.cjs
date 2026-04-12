module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/prefer-class-list-directive': 'error',
        'astro/valid-compile': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        // Browser APIs used in React components
        SpeechSynthesisVoice: 'readonly',
        SpeechSynthesisUtterance: 'readonly',
        SpeechSynthesis: 'readonly',
        // Astro image types
        ImageMetadata: 'readonly',
      },
      rules: {
        '@typescript-eslint/no-unused-vars': ['error', {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        }],
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-unused-vars': 'off', // Turn off base rule for TypeScript files
        'no-undef': 'off', // TypeScript handles this better than ESLint
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.astro/',
    'public/',
    'coverage/',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
  ],
};

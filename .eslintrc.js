module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'jest',
    ],
    rules: {
      'react/jsx-props-no-spreading': 0,
      'import/extensions': [
        'error',
        'ignorePackages',
        {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'never',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: [
            '.jsx',
            '.tsx',
          ]
        },
      ],
    },
    settings: {
      'import/extensions': [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.d.ts',
      ],
      'import/resolver': {
        node: {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.d.ts',
          ],
        },
      },
    },
  };
  
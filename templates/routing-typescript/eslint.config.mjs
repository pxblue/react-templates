import bluiRecommended from '@brightlayer-ui/eslint-config'

export default [
    ...bluiRecommended,
    { ignores: ['dist'] },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        parserOptions: {
          project: ['./tsconfig.json'],
        },
      },
    },
  ];
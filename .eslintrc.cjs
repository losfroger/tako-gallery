module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  plugins: ['@typescript-eslint', 'tailwindcss'
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended',
    '@nuxt/eslint-config',
  ],

  settings: {
    'tailwindcss': {
      'config': 'tailwind.config.cjs'
    }
  },

  globals: {
    $nuxt: true
  },

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },

  rules: {
    semi: ['error', 'never'
    ],
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false
    }],
    'quotes': [
      2, 'single',
      {
        'avoidEscape': true
      }
    ],
    'tailwindcss/no-custom-classname': 'off'
  },
}
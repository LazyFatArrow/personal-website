module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/essential',
  ],
  plugins: [
    'unused-imports',
    'modules-newline',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'allowTemplateLiterals': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'modules-newline/import-declaration-newline': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    }],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'import/no-unresolved': ['off'],
    'newline-after-var': ['error', 'always'],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
        allowFirstLine: true,
      },
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}

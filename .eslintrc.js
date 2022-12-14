module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: [],
  ignorePatterns: ['ecosystem.config.js'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // eslint
    semi: ['error', 'never'],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-bitwise': [
      'error',
      {
        int32Hint: true,
        allow: ['|', '&'],
      },
    ],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-shadow': [
      'error',
      {
        allow: ['state'],
      },
    ],
    // 'max-len': [
    //   'error',
    //   {
    //     code: 100,
    //     ignoreTemplateLiterals: true,
    //     ignoreStrings: true,
    //     ignoreUrls: true,
    //     ignoreRegExpLiterals: true,
    //   },
    // ],
    'operator-linebreak': 'off',
    camelcase: [
      'error',
      {
        allow: [
          'access_token',
          'refresh_token',
          'expires_in',
          'client_id',
          'client_secret',
          'grant_type',
        ],
      },
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: 1,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // vuejs-accessibility
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    // eslint-plugin-vue
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-end-tags': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/max-len': [
      'error',
      {
        code: 100,
        template: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLAttributeValues: true,
      },
    ],
    'vue/no-v-for-template-key': 'off',
  },
}

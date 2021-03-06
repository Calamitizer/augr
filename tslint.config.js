(() => {
  'use strict';

  const hasTypeInfo = true;

  const baseRules = {
    // TS-Specific
    'member-access': {
      options: ['no-public'],
    },
    'member-ordering': false,
    'no-empty-interface': false,
    'no-magic-numbers': true,
    'no-parameter-reassignment': true,
    typedef: true,

    // Functionality
    'ban-comma-operator': true,
    'no-console': {
      options: ['log'],
    },
    'no-duplicate-switch-case': true,
    'no-invalid-this': true,
    'no-object-literal-type-assertion': true,
    'no-return-await': true,
    'no-sparse-arrays': true,
    'no-this-assignment': {
      options: ['allow-destructuring'],
    },
    'no-unused-expression': {
      options: ['allow-fast-null-checks'],
      severity: 'warning',
    },
    'no-void-expression': true,
    'prefer-object-spread': true,
    'switch-default': true,

    // Maintainability
    'no-duplicate-imports': true,
    'no-require-imports': true,
    'object-literal-sort-keys': false,

    // Style
    'interface-name': {
      options: ['never-prefix'],
    },
    'newline-before-return': true,
    'no-unnecessary-callback-wrapper': false, // false positives with typesafe-actions
    'ordered-imports': false,
    'prefer-function-over-method': true,
    'prefer-switch': true,
    'prefer-template': true,
    'type-literal-delimiter': true,
    'variable-name': {
      options: ['check-format', 'allow-leading-underscore', 'allow-pascal-case', 'ban-keywords'],
    },
  };

  const typeInfoRules = {
    'no-unnecessary-type-assertion': true,
    'promise-function-async': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-inferred-empty-object-type': true,
    'no-unsafe-any': true,
    'no-boolean-literal-compare': true,
    'no-unnecessary-qualifier': true,
  };

  const config = {
    extends: ['tslint:recommended', 'tslint-config-prettier'],
    rules: {
      ...baseRules,
      ...(hasTypeInfo ? typeInfoRules : {}),
    },
  };

  module.exports = config;
})();

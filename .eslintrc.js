module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'prettier',
    ],
    plugins: ['import'],

    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                ts: 'never',
            },
        ],
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 'off',
        'object-curly-spacing': 'error',
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'multiline-ternary': 0,
        'no-unused-vars': 'off',
        'no-shadow': 0,
        'no-useless-constructor': 'off',
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: ['bundle']
        }],
        'no-use-before-define': 'off',
        'arrow-body-style': 0,
        'default-param-last': 'off',
        'import/no-cycle': 'off',
        semi: ['error', 'never'],
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
                moduleDirectory: ['node_modules'],
            },
        },
    },
}

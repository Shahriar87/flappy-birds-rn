module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import', 'react-hooks'],
    rules: {
        'import/no-cycle': 2,
        'react-native/no-inline-styles': 0,
        'eslint-comments/require-description': 2,
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useCode)',
            },
        ],
    },
};
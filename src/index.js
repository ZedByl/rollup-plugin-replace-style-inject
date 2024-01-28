export default function replaceStyleInject({ replaceValue, regExp }) {
    const defaultSearchValue = /[./]*\.\/node_modules\/style-inject\/dist\/style-inject.es.js/
    const defaultReplaceValue = replaceValue || 'rollup-plugin-replace-style-inject/style-inject-custom/style-inject.es.js'
    const defaultRegExp = regExp || /.*(.scss.js)$/

    return {
        name: 'Rollup Plugin Replace style-inject',
        generateBundle: (options, bundle) => {
            Object.entries(bundle).forEach(entry => {
                if (!entry[0].match(defaultRegExp)) return

                bundle[entry[0]].code = entry[1].code.replace(defaultSearchValue, defaultReplaceValue)
            })
        },
    }
}
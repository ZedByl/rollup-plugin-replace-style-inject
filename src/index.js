export default function replaceStyleInject(
    replaceValue = 'rollup-plugin-replace-style-inject/vendor/style-inject/style-inject.es.js',
    regExp = /.*(.scss.js)$/
) {
    const plugin = { name: 'Rollup Plugin Replace style-inject`' }
    const searchValue = /[./]*\.\/node_modules\/style-inject\/dist\/style-inject.es.js/
    if (!replaceValue || !regExp) return plugin

    return Object.assign(plugin, {
        generateBundle: (options, bundle) => {
            Object.entries(bundle).forEach(entry => {
                if (!entry[0].match(regExp)) return

                bundle[entry[0]].code = entry[1].code.replace(searchValue, replaceValue)
            })
        },
    })
}
# rollup-plugin-replace-style-inject
This plugin changes the path to style-inject  and installs a built copy of it

## Installation

```bash
# npm
npm install --save-dev rollup-plugin-replace-style-inject

# yarn
yarn add -D rollup-plugin-replace-style-inject
```

## Usage

```js
// rollup.config.js
import replaceStyleInject from 'rollup-plugin-replace-style-inject'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js',
    format: 'cjs'
  },
  plugins: [
	replaceStyleInject()
  ]
}
```

### Configuration

There are some useful options:

#### replaceValue
Your custom path to the file `style-inject.es.js`

Type: `String`

Default value: `'rollup-plugin-replace-style-inject/vendor/style-inject/style-inject.es.js'`

```js
replaceStyleInject({ replaceValue: 'your-file-path' })
```

#### regExp
Type: `String`

Default value: `/.*(.scss.js)$/`

Regular expression to find style files

```js
replaceStyleInject({ regExp: '/.*(.scss.js)$/' })
```

## Dependencies

Don't forget to specify the plugin as a dependency for your library

```json
{
  "dependencies": {
    "rollup-plugin-replace-style-inject": "latest"
  }
}
```

## License

MIT
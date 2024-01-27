import copy from 'rollup-plugin-copy'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      copy({
        targets: [
          { src: 'vendor', dest: 'dist' },
          { src: 'index.d.ts', dest: 'dist' },
          { src: 'readme.md', dest: 'dist' },
          { src: 'src/package.json', dest: 'dist' },
        ]
      }),
    ]
  }
]

import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const config = {
  input: 'src/index.js',
  output: {
    name: 'datagrid',
    exports: 'named',
    globals: {
      react: 'React'
    }
  },
  external: ['react', 'styled-components', '@jjordy/layout', 'react-virtualized'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: ['../../node_modules', '../']
      }
    }),
    commonjs({
      include: /node_modules/
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify())
}

export default config

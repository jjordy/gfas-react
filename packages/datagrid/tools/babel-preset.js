const BABEL_ENV = process.env.BABEL_ENV
const building = BABEL_ENV !== undefined && BABEL_ENV !== 'cjs'

const plugins = [
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-class-properties'
]

// if (process.env.NODE_ENV === 'production') {
//   plugins.push('dev-expression', 'transform-react-remove-prop-types')
// }

module.exports = () => ({
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        modules: building ? false : 'commonjs'
      }
    ],
    '@babel/react'
  ],
  plugins: plugins
})

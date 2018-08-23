const execSync = require('child_process').execSync

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  })

console.log('Building CommonJS modules ...')

exec('babel src/components -d lib --ignore __tests__', {
  BABEL_ENV: 'cjs'
})

console.log('\nBuilding ES modules ...')

exec('babel src/components -d lib/es --ignore __tests__', {
  BABEL_ENV: 'es'
})

global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}

global.composeFn = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

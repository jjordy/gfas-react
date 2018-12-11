global.requestAnimationFrame = callback => {
  setTimeout(callback, 0)
}

global.composeFn = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

global.walkJSONTree = (jsonTree, searchElement, callback, searchCriteria = {}) => {
  if (jsonTree.type === searchElement) {
    callback(jsonTree)
  } else if (jsonTree.children) {
    jsonTree.children.forEach(child => {
      global.walkJSONTree(child, searchElement, callback, searchCriteria)
    })
  }
}

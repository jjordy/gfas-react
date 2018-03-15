const PARSER_START = '$'
const PARSER_END = '.'

export const parseDataToken = (token) => {
  const start = token.indexOf(PARSER_START) + 1
  const end = token.indexOf(PARSER_END, start)
  const key = token.substring(start, end)
  const field = token.split('.')[1]
  return {
    key: key,
    subkey: field
  }
}

export const validators = {
  includes: (val, arrOrStr) => {
    if (val && arrOrStr) {
      return arrOrStr.includes(val)
    } else {
      return false
    }
  },
  stringEquals: (val, str) => {
    if (str) {
      return val === str
    } else {
      return false
    }
  },
  excludes: (val, arrOrStr) => {
    return !arrOrStr.includes(val)
  }
}

export const IAMDisabled = ({ render, field, effects }) => {
  if (effects && effects['all']) {
    return render(!effects.all)
  } else if (effects && effects[field]) {
    return render(!effects[field])
  } else {
    return render(true)
  }
}

export function iamDisabled (field, effects) {
  if (effects && effects['all']) {
    return !effects.all
  } else if (effects && effects[field]) {
    return !effects[field]
  } else {
    return true
  }
}

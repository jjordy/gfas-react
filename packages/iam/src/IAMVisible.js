export function iamVisible (field, effects) {
  if (effects && effects.all) {
    return effects.all
  } else if (effects && effects[field]) {
    return effects[field]
  } else if (effects && !effects[field]) {
    return false
  } else {
    return true
  }
}

export function IAMVisible ({ field, effects, render }) {
  if (effects && effects.all) {
    return render()
  } else if (effects && effects[field]) {
    return render()
  } else if (effects && !effects[field]) {
    return null
  } else {
    return render()
  }
}

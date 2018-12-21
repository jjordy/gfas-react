import { css } from 'styled-components'

const hasProp = (v, p) => {
  if (p[v] || p[v] === 0) {
    return true
  }
  return false
}

export const createRule = (value, selector) => css`
  ${selector}: ${props =>
  `${props.theme.BASE_SIZE * value}${props.theme.UNIT}`};
`

export const pxMixin = css`
  ${props =>
    hasProp('px', props) &&
    `
    padding-left: ${props.theme.BASE_SIZE * props.px}${props.theme.UNIT};
    padding-right: ${props.theme.BASE_SIZE * props.px}${props.theme.UNIT};
  `};
`

export const pyMixin = css`
  ${props =>
    hasProp('py', props) &&
    `
    padding-top: ${props.theme.BASE_SIZE * props.py}${props.theme.UNIT};
    padding-bottom: ${props.theme.BASE_SIZE * props.py}${props.theme.UNIT};
  `};
`

export const pMixin = css`
  ${props =>
    hasProp('p', props) &&
    `padding:${props.theme.BASE_SIZE * props.p}${props.theme.UNIT};
  `};
`

export const ptMixin = css`
  ${props =>
    hasProp('pt', props) &&
    `
    padding-top: ${props.theme.BASE_SIZE * props.pt}${props.theme.UNIT};
  `};
`

export const pbMixin = css`
  ${props =>
    hasProp('pb', props) &&
    `
  padding-bottom: ${props.theme.BASE_SIZE * props.pb}${props.theme.UNIT};
  `};
`

export const mtMixin = css`
  ${props =>
    hasProp('mt', props) &&
    `
  margin-top: ${props.theme.BASE_SIZE * props.mt}${props.theme.UNIT};
  `};
`

export const mbMixin = css`
  ${props =>
    hasProp('mb', props) &&
    `
  margin-bottom: ${props.theme.BASE_SIZE * props.mb}${props.theme.UNIT};
  `};
`

export const myMixin = css`
  ${props =>
    hasProp('my', props) &&
    `
    margin-top: ${props.theme.BASE_SIZE * props.my}${props.theme.UNIT};
    margin-bottom: ${props.theme.BASE_SIZE * props.my}${props.theme.UNIT};
  `};
`

export const mxMixin = css`
  ${props =>
    hasProp('mx', props) &&
    `
    margin-left: ${props.theme.BASE_SIZE * props.mx}${props.theme.UNIT};
    margin-right: ${props.theme.BASE_SIZE * props.mx}${props.theme.UNIT};
  `};
`

export const mMixin = css`
  ${props =>
    hasProp('m', props) &&
    `margin: ${props.theme.BASE_SIZE * props.m}${props.theme.UNIT};
  `};
`

export const mlMixin = css`
  ${props =>
    hasProp('ml', props) &&
    `margin-left: ${props.theme.BASE_SIZE * props.ml}${props.theme.UNIT};
`};
`

export const mrMixin = css`
  ${props =>
    hasProp('mr', props) &&
    `margin-right: ${props.theme.BASE_SIZE * props.mr}${props.theme.UNIT};
`};
`

export const plMixin = css`
  ${props =>
    hasProp('pl', props) &&
    `
  padding-left: ${props.theme.BASE_SIZE * props.pl}${props.theme.UNIT};
`};
`

export const prMixin = css`
  ${props =>
    hasProp('pr', props) &&
    `
  padding-right: ${props.theme.BASE_SIZE * props.pr}${props.theme.UNIT};
`};
`

export const hasPaddingProp = props => {
  const hasVal = v => parseInt(v, 10)
  let hasPadding = false
  console.log(hasVal(props.p))
  if (hasVal(props.p)) {
    hasPadding = true
  }

  if (props.px) {
    hasPadding = true
  }

  if (props.py) {
    hasPadding = true
  }

  if (props.pt) {
    hasPadding = true
  }

  if (props.pb) {
    hasPadding = true
  }

  if (props.pl) {
    hasPadding = true
  }

  if (props.pr) {
    hasPadding = true
  }
  console.log(hasPadding)
  return hasPadding
}

import { css } from 'styled-components'

export const pxMixin = css`
  ${props =>
    props.px &&
    `
    padding-left: ${props.theme.BASE_SIZE * props.px}${props.theme.UNIT};
    padding-right: ${props.theme.BASE_SIZE * props.px}${props.theme.UNIT};
  `};
`

export const pyMixin = css`
  ${props =>
    props.py &&
    `
    padding-top: ${props.theme.BASE_SIZE * props.py}${props.theme.UNIT};
    padding-bottom: ${props.theme.BASE_SIZE * props.py}${props.theme.UNIT};
  `};
`

export const pMixin = css`
  ${props =>
    props.p &&
    `
    padding-top: ${props.theme.BASE_SIZE * props.p}${props.theme.UNIT};
    padding-bottom: ${props.theme.BASE_SIZE * props.p}${props.theme.UNIT};
    padding-left: ${props.theme.BASE_SIZE * props.p}${props.theme.UNIT};
    padding-right: ${props.theme.BASE_SIZE * props.p}${props.theme.UNIT};
  `};
`

export const ptMixin = css`
  ${props =>
    props.pt &&
    `
    padding-top: ${props.theme.BASE_SIZE * props.pt}${props.theme.UNIT};
  `};
`

export const pbMixin = css`
  ${props =>
    props.pb &&
    `
  padding-bottom: ${props.theme.BASE_SIZE * props.pb}${props.theme.UNIT};
  `};
`

export const mtMixin = css`
  ${props =>
    props.mt &&
    `
  margin-top: ${props.theme.BASE_SIZE * props.mt}${props.theme.UNIT};
  `};
`

export const mbMixin = css`
  ${props =>
    props.mb &&
    `
  margin-bottom: ${props.theme.BASE_SIZE * props.mb}${props.theme.UNIT};
  `};
`

export const myMixin = css`
  ${props =>
    props.my &&
    `
    margin-top: ${props.theme.BASE_SIZE * props.my}${props.theme.UNIT};
    margin-bottom: ${props.theme.BASE_SIZE * props.my}${props.theme.UNIT};
  `};
`

export const mxMixin = css`
  ${props =>
    props.mx &&
    `
    margin-left: ${props.theme.BASE_SIZE * props.mx}${props.theme.UNIT};
    margin-right: ${props.theme.BASE_SIZE * props.mx}${props.theme.UNIT};
  `};
`

export const mMixin = css`
  ${props =>
    props.m &&
    `
    margin-left: ${props.theme.BASE_SIZE * props.m}${props.theme.UNIT};
    margin-right: ${props.theme.BASE_SIZE * props.m}${props.theme.UNIT};
    margin-top: ${props.theme.BASE_SIZE * props.m}${props.theme.UNIT};
    margin-bottom: ${props.theme.BASE_SIZE * props.m}${props.theme.UNIT};
  `};
`

export const mlMixin = css`
  ${props =>
    props.m &&
    `
  margin-left: ${props.theme.BASE_SIZE * props.ml}${props.theme.UNIT};
`};
`

export const mrMixin = css`
  ${props =>
    props.m &&
    `
  margin-right: ${props.theme.BASE_SIZE * props.mr}${props.theme.UNIT};
`};
`

export const plMixin = css`
  ${props =>
    props.m &&
    `
  padding-left: ${props.theme.BASE_SIZE * props.pl}${props.theme.UNIT};
`};
`

export const prMixin = css`
  ${props =>
    props.m &&
    `
  padding-right: ${props.theme.BASE_SIZE * props.pr}${props.theme.UNIT};
`};
`

import { Sizes } from './SharedProps'

export default interface ThemeInterface {
  colors?: any
  color?: object
  BASE_SIZE: number
  UNIT: string
  size?: Sizes
  /* Should the item have a border radius? */
  rounded?: boolean
}
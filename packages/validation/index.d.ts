import { cleanMask } from "./src";

type ValidationMessage = string
type ValidationReturn = ValidationMessage | undefined

interface FormValuesObject {
  [key: string]: any
}

interface RulesObject {
  [key: string]: Function | Function[]
}

interface ErrorsObject {
  [key: string]: string
}

declare module "@jjordy/validation" {
  declare function cleanMask(value: any, pattern = RegExp): any
  declare function email(value: string): ValidationReturn
  declare function required(value: any): ValidationReturn
  declare function minLength(min: number): (value: any) => ValidationReturn
  declare function maxLength(max: number): (value: any) => ValidationReturn
  declare function minNumber(min: number): (value: any) => ValidationReturn
  declare function maxNumber(max: number): (value: any) => ValidationReturn
  declare function phone(value: any): ValidationReturn
  declare function oneCap(value: string): ValidationReturn
  declare function noLeadingZero(value: any): ValidationReturn
  declare function integer(value: any): ValidationReturn
  declare function dateMMDDYYYY(value: any): ValidationReturn
  declare function zipcode(value: any): ValidationReturn
  declare function saig(value: any): ValidationReturn
  declare function requiredIfNo(field: string, name: string): (value: any, data: FormValuesObject) => ValidationReturn
  declare function match(field: string, name: string): (value: any, data: FormValuesObject) => ValidationReturn
  declare function oneNum(value: string): ValidationReturn
  declare function oneSpecialChar(value: string): ValidationReturn
  declare function createValidator(rules: RulesObject): ErrorsObject
}
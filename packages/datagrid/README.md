# @jjordy/datagrid

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
  $ npm install @jjordy/datagrid
```
## Requirements
* node `>= 8`
* npm `>= 5`

# Contributing & Development Instructions

## Install dependencies, and check to see it works

```bash
$ npm install                   # Install project dependencies
$ npm run dev                     # Development via storybook @ localhost:9001
```
While developing, you will probably rely mostly on `npm run dev`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`dev`| Development Mode |
|`lint`|Lint all `.js` files.|
|`build`| Build Production Library.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Project Structure
```
├── .storybook               # Storybook config
├── src                      # Client entry point
```
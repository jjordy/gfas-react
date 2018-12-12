# @jjordy/gfas-react

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

## Install

```bash
$ git glone https://github.com/jjordy/gfas-react
```

## Requirements

- node `>= 8`
- npm `>= 5`
- yarn `>= 1.7`

# Contributing & Development Instructions

## Install dependencies, and check to see it works

```bash
$ yarn install                   # Install project dependencies via yarn and lerna
$ yarn run dev                     # Development via storybook @ localhost:9001
```

While developing, you will probably rely mostly on `npm run dev`; however, there are additional scripts at your disposal:

| `npm run <script>` | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| `dev`              | Run the dev command in all projects with lerna and run storybook project localhost:9001 |
| `test`             | Run all package test via lerna exec                                                     |
| `build`            | Build Production Library.                                                               |

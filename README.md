# NPM Module TypeScript

A frontend npm module project template based on TypeScript.

English | [简体中文](./README-zh_CN.md)

## Features

* **Quick Start** Development can be started with a single command.
* **Multiple Build Targets** `cjs/esm/umd` modules support.
* **Documentation** API documentation is generated automatically.
* **Code Check** `git commit/npm publish` check integration.

## Packages

* **[typescript](https://github.com/microsoft/TypeScript)**
* **[eslint](https://github.com/eslint/eslint)**

    Use [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) to support.

    Palantir, the backers behind TSLint announced earlier this year that they would be deprecating TSLint in favor of supporting typescript-eslint in order to benefit the community. You can read more about that here: https://medium.com/palantir/tslint-in-2019-1a144c2317a9

* **[jest](https://github.com/facebook/jest)**
* **[typedoc](https://github.com/TypeStrong/typedoc)** tsdoc has no stable release.
* **[commitizen](https://github.com/commitizen/cz-cli)**

    `npm run commit` or `git cz` to use AngularJS's commit message convention.

    `npm run changelog` to automatically generate changelog.

* **[husky](https://github.com/typicode/husky)** git hooks.
* **[shx](https://github.com/shelljs/shx)** cross-platform Unix commands in npm package scripts.
* **[cross-env](https://github.com/kentcdodds/cross-env)** cross-platform to set environment variables.
* **[concurrently](https://github.com/kimmobrunfeldt/concurrently)** run multiple commands concurrently. Like `npm run watch-js & npm run watch-less` but better.
* **[rollup](https://github.com/rollup/rollup)** The best package tool for frontend lib.
* **[terser](https://github.com/terser-js/terser)** compressor for ES6+
* **[demo](./demo)**

    The demo project will be used for development, which use `webpack`, `babel`,`webpack-dev-server`, `webpack-bundle-analyzer`, `jsconfig.json`

## NPM Scripts

* **npm run clean** clean `esm/cjs/umd` output.
* **npm run build** A combination of the following commands:

    * **npm run build:esm** tsc compile.
    * **npm run build:cjs** tsc compile.
    * **npm run build:umd** use rollup to package.
    * **npm run build:umd:min** use terser to minify.

* **npm run start** start develop.
* **npm run doc** automatically generate API documentation.
* **npm run commit** same as `git cz`
* **npm run changelog** automatically generate changelog.
* **npm run codeCheck** A combination of the following commands:

    * **npm run eslint** run eslint check.
    * **npm run build** as mentioned before.
    * **npm run test** run jest check.

* **npm run prepublishOnly** `npm publish` pre hook, a combination of the following commands:

    * **npm run doc** as mentioned before.
    * **npm run codeCheck** as mentioned before.

## What's Next

* eslint need Upgrade to prettier + eslint

    * **prettier** code style format.
    * **eslint** code syntax error.

## License

[MIT](./LICENSE)

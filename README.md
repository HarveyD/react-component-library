# React Component Library

This is a fork of Harvey Delaney's [react-component-library](https://github.com/HarveyD/react-component-library) - with some personal tweaks.

This project skeleton was created to help people get started with creating their own React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [Sass Modules](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Google Typescript Style](https://github.com/google/gts)

It also features:

- [React Cosmos](https://https://reactcosmos.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
yarn test
```

### Building

```
yarn build
```

### React Cosmos

To run a live-reload React Cosmos server on your local machine:

```
yarn cosmos
```

## Deploying to GitHub

### [GitHub Access Token](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages)

Authenticate by adding your personal access token to your `~/.npmrc` file, edit the `~/.npmrc` file for your project to include the following line, replacing `TOKEN` with your personal access token. Create a new `~/.npmrc` file if one doesn't exist.

```bash
//npm.pkg.github.com/:_authToken=TOKEN
```

### [Update the package version & publish](https://classic.yarnpkg.com/en/docs/cli/version/)

Using the yarn version command you can update the version of your package via the command line.

```bash
yarn version --major | --minor | --patch
```

`preversion` & `postversion` entries in `package.json` lint, test, deploy and commit the package.

```json
{
  "name": "example-package",
  "version": "1.0.2",
  "scripts": {
    "test": "jest",
    "preversion": "yarn lint & yarn test",
    "postversion": "git push --tags && yarn publish . --tag $npm_package_version && git push && echo \"Successfully released version $npm_package_version!\""
  }
}
```

## Consuming

Let's say you created a public NPM package called `react-component-library` with the `TestComponent` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { TestComponent } from "react-component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent theme="primary" />
  </div>
);

export default App;
```

# React Component Library

This project skeleton was created to help people get started with creating their own React component library using:
- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:
- :white_check_mark: [Storybook](https://storybook.js.org/) to help you create and show off your components
- :white_check_mark: [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) enabling testing of the components

[**Read my blog post about why and how I created this project skeleton ▸**](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

## Development
### Testing
```shell
npm run test
```

### Building
```shell
npm run build
```

### Storybook
```shell
npm run storybook
```

### Installing component library locally
Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:
```shell
npm i --save ../react-component-library
```
which will install the local component library as a dependency in `test-app`. Your components can then be imported and used.

### Publishing
First make sure that you've updated the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```shell
npm publish
```

## Component Usage
Let's say you created a public NPM package called `harvey-component-library` with the `TestComponent` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```javascript
import React from "react";
import { TestComponent } from "harvey-component-library";

const App = () => (
    <div className="app-container">
        <h1>Hello I'm consuming the component library</h1>
        <TestComponent theme="primary" />
    </div>
);

export default App;
```

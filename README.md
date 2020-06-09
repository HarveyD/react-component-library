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

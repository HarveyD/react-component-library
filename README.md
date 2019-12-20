# React Component Library

This project skeleton was created to help people get started with creating their own React component library using:
- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:
- :white_check_mark: [Storybook](https://storybook.js.org/) to help you create and show off your components
- :white_check_mark: [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) enable testing of the components

[**Read my blog post about why and how I created this project skeleton ▸**](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

## Development
### Testing
`npm run test`

### Building
`npm run build`

### Storybook
`npm run storybook`

### Publishing
`npm run publish`

## Component Usage
Let's say you created a public npm library called `harvey-component-library` with the `TestComponent` component created in this repository.

Usage of the component (once published to the registry and then installed into another project) will be:

```
import React from "react";
import { TestComponent } from "harvey-component-library";

const TestApp = () => (
    <div className="app-container>
        <TestComponent theme="primary" />
    </div>
);

export TestApp;
```

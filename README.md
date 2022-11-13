# React Component Library

[![Build status](https://badge.buildkite.com/90ff98db996bb137c5be1bdce666c4b1ce68a25b17af0a6a04.svg?branch=master)](https://buildkite.com/harvey/react-component-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This project skeleton was created to help people get started with creating their own React component library using:

- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)
- ~~Sass~~ (This dependency has been removed, see [Using CSS Preprocessors](#using-css-preprocessors) on how to support it)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

[**Read my blog post about why and how I created this project skeleton ▸**](https://blog.harveydelaney.com/creating-your-own-react-component-library/)

[Check out this CodeSandbox to see the component library in action ▸](https://codesandbox.io/s/harvey-component-library-example-y2b60)

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc. I've hosted this library at: https://www.harveydelaney.com/react-component-library

### Generating New Components

I've included a handy NodeJS util file under `util` called `create-component.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.css
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../react-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

**NOTE**: After installing the component library locally, you may run into:

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app See for tips about how to debug and fix this problem.
```

This is the most commonly encountered problem people face when installing the library locally. This is most likely due to the third reason: `You might have more than one copy of React in the app`.

Normally when a library is published, dev dependencies are excluded. However, when the library is symlinked, all local dev depdendencies are persisted in the libraries `node_modules` (includes React). Your bundler may see two versions of React, one in the consuming app and one in the symlinked library. The solution is to have the component library use the React version in the consuming app. So from your component library folder, run:

```
npm link ../test-app/node_modules/react
```

**OR**, if you are using Webpack in app you can follow [this GitHub comment](https://github.com/facebook/react/issues/13991#issuecomment-435587809).

Read more about this issue [here](https://reactjs.org/warnings/invalid-hook-call-warning.html).

## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`. [See this branch for an example.](https://github.com/HarveyD/react-component-library/tree/host-via-github)

You can then install your library into other projects by running:

```
npm i --save git+https://github.com/HarveyD/react-component-library.git#branch-name
```

OR

```
npm i --save github:harveyd/react-component-library#branch-name
```

## Usage

Let's say you created a public NPM package called `harvey-component-library` with the `TestComponent` component created in this repository.

### Stylesheet

First, you'll need to import the `index.css` CSS file distributed by the package. This should be done at the root of your project (in `index.js` or `App.tsx` of your React app) and will look like:

```tsx
import 'harvey-component-library/build/index.css';

...
```

### Components

Usage of components (after the library installed as a dependency into another project) will look like:

```TSX
import React from "react";
import { TestComponent } from "harvey-component-library";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>
    <TestComponent heading={'Some heading'} content={<div>Some content</div>} />
  </div>
);

export default App;
```

[Check out this Code Sandbox for a live example.](https://codesandbox.io/s/harvey-component-library-example-y2b60?file=/src/App.js)

### Using Component Library CSS Variables

Above we imported `index.css` into the root of our project. `index.css` contains a number of CSS variables that can be used across the project that consumes our component library.

In your CSS, you can use the variables defined in `variables.css` like:

```CSS
.example-container {
    color: var(--harvey-white);
    background-color: var(--harvey-black);
}
```

See: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties for more information about CSS Variables.

## Additional Help

### Dark Mode

The example component `TestComponent` respects the user's dark mode operating system preferences and renders the component in the appropriate theme.

This is achieved by using the media query: `@media (prefers-color-scheme: dark)` in combination with CSS variables. The colours that change depending on dark mode preference can be found in [`src/index.css`](src/index.css). Example usage of these variables can be found within [`src/TestComponent/TestComponent.css`](src/TestComponent/TestComponent.css).

Read https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme for more details.

### Using CSS Preprocessors

The Rollup plugin [`rollup-plugin-postcss`](https://github.com/egoist/rollup-plugin-postcss) supports Sass, Less and Stylus:

- For Sass, install less: `yarn add node-sass --dev`
- For Stylus, install stylus: `yarn add stylus --dev`
- For Less, install less: `yarn add less --dev`

#### CSS Modules

If you want to use CSS Modules, update `postcss` in `rollup-config.js` to:

```
postcss({
  modules: true
})
```

#### Styled Components

If you want to use [`styled-components`](https://styled-components.com/), the changes required are a bit more involved. As such, I've created a branch where I've got `styled-components` working in this component library, [check it out here](https://github.com/HarveyD/react-component-library/tree/styled-components).

### Component Code Splitting

Code splitting of your components is not supported by default.

[Read this section of my blog post](https://blog.harveydelaney.com/creating-your-own-react-component-library/#introducing-code-splitting-optional-) to find out how and why you would enable code splitting of your components. In summary, code splitting enables users to import components in isolation like:

```
import TestComponent from 'harvey-component-library/build/TestComponent';
```

This can reduce the bundle size for projects using older (CJS) module formats.

You can check out [this branch](https://github.com/HarveyD/react-component-library/tree/code-splitting) or [this commit](https://github.com/HarveyD/react-component-library/commit/94631be5a871f3b39dbc3e9bd3e75a8ae5b3b759) to see what changes are neccesary to implement it.

Please note, there's an issue with code splitting and using `rollup-plugin-postcss`. I recommend using `rollup-plugin-sass` instead alongside code splitting.

### Supporting Image Imports

Add the following library to your component library [@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image):

```
npm i -D @rollup/plugin-image
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  image(),
  ...
]
...
```

You can then import and render images in your components like:

```tsx
import logo from "./rollup.png";

export const ImageComponent = () => (
  <div>
    <img src={logo} />
  </div>
);
```

### Supporting JSON Imports

Add the following library to your component library [@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json):

```
npm i -D @rollup/plugin-json
```

Then add it to `rollup-config.js`:

```
...
plugins:[
  ...,
  json(),
  ...
]
...
```

You can then import and use JSON as ES6 Modules:

```tsx
import data from "./some-data.json";

export const JsonDataComponent = () => <div>{data.description}</div>;
```

Checkout the [official Rollup plugin list](https://github.com/rollup/plugins) for additional helpful plugins.

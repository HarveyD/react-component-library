import "../src/index.css";
/**
 * Read https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 * for more information about the purpose of this file.
 *
 * Use preview.js for global code (such as CSS imports or JavaScript mocks)
 * that applies to all stories. For example, `import thirdPartyCss.css`.
 *
 * This file can have three exports:
 * - decorators - an array of global decorators
 * - parameters - an object of global parameters
 * - globalTypes - definition of globalTypes
 */

/**
 * Decorators
 *
 * A decorator is a way to wrap a story in extra “rendering” functionality.
 *
 * Example:
 *
 * import React from 'react';
 * export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];
 *
 * Each story throughout the library will be wrapped in a div with a margin of 3
 */

/**
 * Parameters
 *
 * Most Storybook addons are configured via a parameter-based API.
 * You can set global parameters in this file
 *
 * export const parameters = {
 *   backgrounds: {
 *     values: [
 *       { name: 'red', value: '#f00' },
 *       { name: 'green', value: '#0f0' },
 *     ],
 *   },
 * };
 *
 * With backgrounds, you configure the list of backgrounds that every story can render in.
 */

/**
 * Global Types
 *
 * Global Types allow you to add your own toolbars by creating
 * globalTypes with a toolbar annotation:
 *
 * For example:
 *
 * export const globalTypes = {
 *   theme: {
 *     name: 'Theme',
 *     description: 'Global theme for components',
 *     defaultValue: 'light',
 *     toolbar: {
 *       icon: 'circlehollow',
 *       // array of plain string values or MenuItem shape
 *       items: ['light', 'dark'],
 *       },
 *     },
 *   };
 *
 * Will add a new dropdown in your toolbar with options light and dark.
 **/

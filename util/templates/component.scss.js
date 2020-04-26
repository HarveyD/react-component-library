module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
@import "../variables.scss";
@import "../typography.scss";

.foo {
  background-color: $harvey-white;
  border: 1px solid $harvey-black;
  padding: 16px;
  width: 360px;
  text-align: center;

  .heading {
    @include heading;
  }

  &.test-component-secondary {
    background-color: $harvey-black;
    color: $harvey-white;
  }
}
`,
  extension: `.scss`
});

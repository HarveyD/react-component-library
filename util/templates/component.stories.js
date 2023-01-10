module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}",
};

export const WithBar = () => <${componentName} foo="bar" />;

export const WithBaz = () => <${componentName} foo="baz" />;
`,
  extension: `.stories.tsx`,
});

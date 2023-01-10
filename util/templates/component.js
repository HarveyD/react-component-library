module.exports = (componentName) => ({
  content: `import React from "react";
import "./${componentName}.css";

export interface ${componentName}Props {
  foo: string;
}

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="${componentName}" className="foo-bar">
    {foo}
  </div>
);

export default ${componentName};
`,
  extension: `.tsx`,
});

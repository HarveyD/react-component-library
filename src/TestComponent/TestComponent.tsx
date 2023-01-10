import React, { ReactNode } from "react";

import "./TestComponent.css";

export interface TestComponentProps {
  heading: string;
  content: ReactNode;
}

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <div data-testid="test-component" className="test-component">
    <h1 data-testid="test-component__heading" className="heading">
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </div>
);

export default TestComponent;

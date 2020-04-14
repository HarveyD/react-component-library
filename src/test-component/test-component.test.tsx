import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./test-component";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  describe("Snapshots", () => {
    it("should have primary theme with default props", () => {
      const { getByTestId } = renderComponent();

      const testComponent = getByTestId("test-component");

      expect(testComponent).toHaveClass("test-component-primary");
    });

    it("should match snapshots as secondary themed", () => {
      props.theme = "secondary";
      const { getByTestId } = renderComponent();

      const testComponent = getByTestId("test-component");

      expect(testComponent).toHaveClass("test-component-secondary");
    });
  });
});

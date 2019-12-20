import React from "react";
import { shallow } from "enzyme";

import TestComponent from "./test-component";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderWrapper = () => shallow(<TestComponent {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as primary themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots as secondary themed", () => {
      props.theme = "secondary";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});

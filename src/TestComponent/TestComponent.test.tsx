import {render} from '@testing-library/react';
import React from 'react';

import TestComponent from './TestComponent';
import {TestComponentProps} from './TestComponent.types';

describe('Test Component', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it('should have default className with default props', () => {
    const {getByTestId} = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('testComponent');
  });

  it('should have brand className with theme set as brand', () => {
    props.theme = 'brand';
    const {getByTestId} = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('testComponent brand');
  });

  it('should have light className with theme set as light', () => {
    props.theme = 'light';
    const {getByTestId} = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('testComponent light');
  });

  it('should have dark className with theme set as dark', () => {
    props.theme = 'dark';
    const {getByTestId} = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('testComponent dark');
  });
});

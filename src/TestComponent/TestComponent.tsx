import React from 'react';

import styles from './TestComponent.module.scss';
import {TestComponentProps} from './TestComponent.types';

const TestComponent: React.FC<TestComponentProps> = ({theme}) => {
  let themeClass;

  switch (theme) {
    case 'brand':
      themeClass = styles.brand;
      break;
    case 'light':
      themeClass = styles.light;
      break;
    case 'dark':
      themeClass = styles.dark;
      break;
    default:
      themeClass = '';
  }

  return (
    <div
      data-testid="test-component"
      className={`${styles.testComponent} ${themeClass}`}
    >
      <h1>I'm the test component</h1>
      <h2>Made with love by Barb Components</h2>
    </div>
  );
};

export default TestComponent;

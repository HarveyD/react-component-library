import React, {ReactElement} from 'react';

import AppFixture from '../AppFixture';
import TestComponent from './TestComponent';

export default {
  'Default Theme': (): ReactElement => (
    <AppFixture>
      <TestComponent />
    </AppFixture>
  ),
  'Brand Theme': (): ReactElement => (
    <AppFixture>
      <TestComponent theme="brand" />
    </AppFixture>
  ),
  'Light Theme': (): ReactElement => (
    <AppFixture>
      <TestComponent theme="light" />
    </AppFixture>
  ),
  'Dark Theme': (): ReactElement => (
    <AppFixture>
      <TestComponent theme="dark" />
    </AppFixture>
  ),
};

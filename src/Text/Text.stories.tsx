import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text from './Text';
import { TextProps } from './Text.types';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Dashboard/Text',
  component: Text,
  argTypes: {},
} as Meta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;
storiesOf('Text', module);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  disabled: false,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  disabled: false,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  disabled: false,
  size: 'large',
};
Primary.decorators = [
  (Story) => (
    <div style={{ display: 'flex', margin: 'auto' }}>
      <Story />
    </div>
  ),
];

import { storiesOf, Story } from '@storybook/react';
import React from 'react';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip.types';

export default {
  title: 'Dashboard/Tooltip',
  component: Tooltip,
};

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;
storiesOf('Tooltip', module);

export const Right = Template.bind({});
Right.args = {
  title: 'Tooltip Title',
  theme: 'primary',
  text: 'string',
  visible: true,

  alignment: 'right',
};

export const Left = Template.bind({});
Left.args = {
  title: 'Tooltip Title',
  text: 'stringstring',
  theme: 'primary',
  visible: true,
  alignment: 'left',
};

export const Bottom = Template.bind({});
Bottom.args = {
  title: 'Tooltip Title',
  theme: 'primary',
  text: 'string',
  visible: true,
  alignment: 'bottom',
};
export const DefaultTop = Template.bind({});
DefaultTop.args = {
  title: 'Tooltip Title',
  theme: 'primary',
  text: 'string',
  visible: true,
  alignment: 'top',
};

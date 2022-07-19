import React from 'react';
import { Story, Meta } from '@storybook/react';

import StatsPane from './StatsPane';
import { StatsPaneProps } from './StatsPane.types';
import { storiesOf } from '@storybook/react';

export default {
  title: 'Dashboard/StatsPane',
  component: StatsPane,

  argTypes: {
    // themify:{
    //   options: themeNames,
    //   control: { type: 'radio' },
    //   mapping: themes
    // }
  },
} as Meta;

const Template: Story<StatsPaneProps> = (args) => <StatsPane {...args} />;
storiesOf('StatsPane', module);

export const HappyStatsPane = Template.bind({});
HappyStatsPane.args = {
  currentNumber: 123451,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  previousNumber: 3,
  previousLabel: 'Previous Number',
  currentDirection: true,
  whiteBackground: true,
  smallPane: true,
};

export const SadStatsPane = Template.bind({});
SadStatsPane.args = {
  currentNumber: 2345,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  previousNumber: 3,
  previousLabel: 'Previous Number',
  currentDirection: false,
  smallPane: false,
};
export const SmallStatsPane = Template.bind({});
SmallStatsPane.args = {
  currentNumber: 12345671,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  previousNumber: 3,
  previousLabel: 'Previous Number',
  currentDirection: false,
  smallPane: false,
  whiteBackground: true,
};

// [HappyStatsPane,SadStatsPane].map(story=>{ return story.decorators = [(Story) => <div style={{ width: 500, height: 350 }}><Story /></div>]})

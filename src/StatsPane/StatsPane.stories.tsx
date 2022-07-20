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

export const LargeStatsPane = Template.bind({});
LargeStatsPane.args = {
  currentNumber: 1234,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  previousNumber: 3,
  previousLabel: 'Previous Number',
  currentDirection: true,
  whiteBackground: true,
  smallPane: false,
};

export const SmallStatsPane = Template.bind({});
SmallStatsPane.args = {
  currentNumber: 2345,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  previousNumber: 3,
  currentDirection: false,
  smallPane: true,
};


export const LargeStatsPaneWithStars = Template.bind({});
LargeStatsPaneWithStars.args = {
  currentNumber: 123,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  currentDirection: false,
  smallPane: false,
  whiteBackground: true,
  stars: 4.5
};


export const SmallStatsPaneWithStars = Template.bind({});
SmallStatsPaneWithStars.args = {
  currentNumber: 456,
  title: 'StatsPane Title',
  label: 'Here goes the Label',
  currentDirection: false,
  smallPane: true,
  whiteBackground: true,
  stars:4
};

// [HappyStatsPane,SadStatsPane].map(story=>{ return story.decorators = [(Story) => <div style={{ width: 500, height: 350 }}><Story /></div>]})

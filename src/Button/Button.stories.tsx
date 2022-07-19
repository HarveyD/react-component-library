import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button  from './Button';
import {ButtonProps} from "./Button.types"
import { storiesOf } from '@storybook/react';

export default {
  title: 'Dashboard/Button',
  component: Button,
  // controls: {
  //   presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
  // },
  argTypes: {
    // themify:{
    //   options: themeNames,
    //   control: { type: 'radio' },
    //   mapping: themes
    // }
  },
 
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
storiesOf('Button', module)


export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',  
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",

};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  text: 'Disabled',

};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  disabled: false,
  size:"small",
  text: 'Small',

};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  disabled: false,
  size:"medium",
  text: 'Medium',


};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  disabled: false,
  size:"large",
  text: 'Large',
};
// Primary.decorators = [(Story) => <div style={{ display: 'flex', margin: 'auto' }}><Story /></div>]
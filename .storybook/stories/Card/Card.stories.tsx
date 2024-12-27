// Card.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from "../../../components/ui/card"
export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'], // Replace with actual size options from your `cardStyle`
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['elevated', 'flat', 'outlined'], // Replace with actual variant options from your `cardStyle`
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

type CardProps = React.ComponentProps<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  variant: 'elevated',
  className: '',
};

export const SmallElevated = Template.bind({});
SmallElevated.args = {
  size: 'sm',
  variant: 'elevated',
};

export const MediumFlat = Template.bind({});
MediumFlat.args = {
  size: 'md',
  variant: 'flat',
};

export const LargeOutlined = Template.bind({});
LargeOutlined.args = {
  size: 'lg',
  variant: 'outlined',
  className: 'custom-class', // Add a custom class if needed
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  size: 'md',
  variant: 'elevated',
  className: 'bg-blue-500 p-4',
};

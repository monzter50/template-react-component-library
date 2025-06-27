import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const HelloWorld: Story = {
  args: {
    children: 'Hello world!',
  },
};

export const ClickMe: Story = {
  args: {
    children: 'Click me!',
  },
};

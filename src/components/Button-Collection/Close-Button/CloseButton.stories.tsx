import type { Meta, StoryObj } from '@storybook/react';

import { CloseButton, CloseButtonProps } from './CloseButton';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  title: 'components/Button/Close Button',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Group: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  //   args: {size, supportingText: true },
  render: ({ size, theme, color }: CloseButtonProps) => (
    <div className="flex items-center">
      <div className="">
        <CloseButton size="sm" theme={theme} color="primary" />
        <CloseButton size="md" theme={theme} color="primary" />
        <CloseButton size="lg" theme={theme} color="primary" />
      </div>
      <div className="">
        <CloseButton size="sm" theme={theme} color="secondary" />
        <CloseButton size="md" theme={theme} color="secondary" />
        <CloseButton size="lg" theme={theme} color="secondary" />
      </div>
      <div>
        <CloseButton size={size} theme={theme} color={color} />
      </div>
    </div>
  ),
};
export const Primary: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  //   args: {size, supportingText: true },
  render: ({ size, theme, color }: CloseButtonProps) => (
    <CloseButton size={size} theme={theme} color="primary" />
  ),
};
export const Secondary: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  //   args: {size, supportingText: true },
  render: ({ size, theme, color }: CloseButtonProps) => (
    <CloseButton size={size} theme={theme} color="secondary" />
  ),
};

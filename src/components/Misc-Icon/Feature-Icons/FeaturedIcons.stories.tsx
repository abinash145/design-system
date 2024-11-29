import type { Meta, StoryObj } from '@storybook/react';

import { FeaturedIcons, FeaturedIconsProps } from './FeaturedIcons';

const meta: Meta<typeof FeaturedIcons> = {
  component: FeaturedIcons,
  title: 'components/Misc Icon/Featured Icons',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof FeaturedIcons>;

export const FeaturedIcon: Story = {
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['lightCircle', 'lightCircleOutline', 'modern'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ size, theme, color, iconSwap }: FeaturedIconsProps) => (
    <FeaturedIcons
      size={size}
      theme={theme}
      color={color}
      iconSwap={iconSwap}
    />
  ),
};
export const LightCircle: Story = {
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },

    color: {
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ size, color, iconSwap }: FeaturedIconsProps) => (
    <FeaturedIcons
      size={size}
      theme="lightCircle"
      color={color}
      iconSwap={iconSwap}
    />
  ),
};
export const LightCircleOutline: Story = {
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },

    color: {
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ size, color, iconSwap }: FeaturedIconsProps) => (
    <FeaturedIcons
      size={size}
      theme="lightCircleOutline"
      color={color}
      iconSwap={iconSwap}
    />
  ),
};
export const Modern: Story = {
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },

    color: {
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      control: { type: 'radio' },
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ size, color, iconSwap }: FeaturedIconsProps) => (
    <FeaturedIcons
      size={size}
      theme="modern"
      color={color}
      iconSwap={iconSwap}
    />
  ),
};

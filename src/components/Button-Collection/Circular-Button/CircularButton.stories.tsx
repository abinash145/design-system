import type { Meta, StoryObj } from '@storybook/react';

import { CircularButton, CircularButtonProps } from './CircularButton';

const meta: Meta<typeof CircularButton> = {
  component: CircularButton,
  title: 'components/Button/Cicular Button',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CircularButton>;

export const Group: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    type: {
      options: ['filled', 'outline'],
      control: { type: 'radio' },
    },
    progress: {
      options: [0, 20, 40, 60, 80, 100],
      control: { type: 'select' },
    },
  },
  args: { progress: 20, size: 'sm' },
  render: ({ size, progress, type }: CircularButtonProps) => (
    <div>
      <div className="flex gap-2">
        <CircularButton size={size} type="filled" progress={0} />
        <CircularButton size={size} type="filled" progress={20} />
        <CircularButton size={size} type="filled" progress={40} />
        <CircularButton size={size} type="filled" progress={60} />
        <CircularButton size={size} type="filled" progress={80} />
        <CircularButton size={size} type="filled" progress={100} />
      </div>
      <div className="flex gap-2 mt-4">
        <CircularButton size={size} type="outline" progress={0} />
        <CircularButton size={size} type="outline" progress={20} />
        <CircularButton size={size} type="outline" progress={40} />
        <CircularButton size={size} type="outline" progress={60} />
        <CircularButton size={size} type="outline" progress={80} />
        <CircularButton size={size} type="outline" progress={100} />
      </div>
    </div>
  ),
};
export const Filled: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    // type: {
    //   options: ['filled', 'outline'],
    //   control: { type: 'radio' },
    // },
    progress: {
      options: [0, 20, 40, 60, 80, 100],
      control: { type: 'select' },
    },
  },
  args: { progress: 20, size: 'sm' },
  render: ({ size, progress, type }: CircularButtonProps) => (
    <CircularButton size={size} type="filled" progress={progress} />
  ),
};
export const Outline: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    // type: {
    //   options: ['filled', 'outline'],
    //   control: { type: 'radio' },
    // },
    progress: {
      options: [0, 20, 40, 60, 80, 100],
      control: { type: 'select' },
    },
  },
  args: { progress: 20, size: 'sm' },
  render: ({ size, progress, type }: CircularButtonProps) => (
    <CircularButton size={size} type="outline" progress={progress} />
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { CheckBase, CheckBaseProps } from './CheckBase';

const meta: Meta<typeof CheckBase> = {
  component: CheckBase,
  title: 'components/Checkbox Collection/Check Base',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CheckBase>;

export const Default: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      options: ['checkCircle', 'radio', 'checkbox'],
      control: { type: 'radio' },
    },
  },
  args: { checked: false },
  render: ({ checked, size, disabled }: CheckBaseProps) => (
    <CheckBase size={size} checked={checked} disabled={disabled} />
  ),
};

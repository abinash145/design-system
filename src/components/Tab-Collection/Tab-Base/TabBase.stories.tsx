import type { Meta, StoryObj } from '@storybook/react';
import { TabBase, TabBaseProps } from './TabBase';
const meta: Meta<typeof TabBase> = {
  component: TabBase,
  title: 'components/Tab Collection/Tab Base',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TabBase>;
export const Underline: Story = {
  argTypes: {
    current: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    type: {
      options: ['underline'],
      control: { type: 'radio' },
    },
    fullWidth: {
      control: 'boolean',
    },
    withIcon: {
      options: [true, false, 'anchor'],
      control: { type: 'radio' },
    },
  },
  args: { label: 'label' },
  render: ({ label, current, fullWidth, size, withIcon }: TabBaseProps) => (
    <TabBase
      label={label}
      current={current}
      fullWidth={fullWidth}
      size={size}
      withIcon={withIcon}
    />
  ),
};

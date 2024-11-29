import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'components/Checkbox Collection/Checkbox Group',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    title: {
      options: [true, false, 'title....'],
      control: { type: 'select' },
    },
    subtitle: {
      options: [true, false, 'subtitle.....'],
      control: { type: 'select' },
    },
    description: {
      options: [true, false, 'description.....'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({
    size,
    disabled,
    selected,
    title,
    subtitle,
    description,
  }: CheckboxGroupProps) => (
    <CheckboxGroup
      disabled={disabled}
      size={size}
      selected={selected}
      description={description}
      subtitle={subtitle}
      title={title}
    />
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { InputFieldBase, InputFieldBaseProps } from './InputFieldBase';
const meta: Meta<typeof InputFieldBase> = {
  component: InputFieldBase,
  title: 'components/Input/Input Field Base',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof InputFieldBase>;
export const Default: Story = {
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    destructive: {
      control: 'boolean',
    },
  },
  args: { disabled: false },
  render: ({ size, disabled,destructive }: InputFieldBaseProps) => (
    <InputFieldBase size={size} disabled={disabled} destructive={destructive} />
  ),
};

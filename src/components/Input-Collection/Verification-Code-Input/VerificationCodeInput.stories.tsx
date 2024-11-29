import type { Meta, StoryObj } from '@storybook/react';
import {
  VerificationCodeInput,
  VerificationCodeInputProps,
} from './VerificationCodeInput';
const meta: Meta<typeof VerificationCodeInput> = {
  component: VerificationCodeInput,
  title: 'components/Input/Verification Code Input',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof VerificationCodeInput>;
export const Default: Story = {
  argTypes: {
    destructive: {
      control: 'boolean',
    },
    // size: {
    //   options: ['sm', 'md'],
    //   control: { type: 'radio' },
    // },
    label: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    hintText: {
      options: [true, false, 'Enter hintText here'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ label, hintText,destructive }: VerificationCodeInputProps) => (
    <VerificationCodeInput hintText={hintText} label={label} destructive={destructive} />
  ),
};

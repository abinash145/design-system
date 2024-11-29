import type { Meta, StoryObj } from '@storybook/react';

import { InputField, InputFieldProps } from './InputField';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'components/Input/Input Field',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    label: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    destructive: {
      control: 'boolean',
    },
    helpIcon: {
      options: [true, false, 'activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    hintText: {
      options: [true, false, 'Dynamic Hint For a user'],
      control: { type: 'select' },
    },
    toolTip: {
      options: [true, false, 'Enter Tool Tip here'],
      control: { type: 'select' },
    },
    inputType: {
      options: ['text', 'password', 'email', 'number'],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: true,
    destructive: false,
    helpIcon: true,
    hintText: true,
    inputType: 'text',
  },
  render: ({
    disabled,
    destructive,
    helpIcon,
    hintText,
    size,
    label,
    toolTip,
    inputType,
  }: InputFieldProps) => (
    <InputField
      disabled={disabled}
      destructive={destructive}
      helpIcon={helpIcon}
      hintText={hintText}
      size={size}
      label={label}
      toolTip={toolTip}
      inputType={inputType}
    />
  ),
};
export const IconLeading: Story = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    label: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    destructive: {
      control: 'boolean',
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    helpIcon: {
      options: [true, false, 'activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    hintText: {
      options: [true, false, 'Dynamic Hint For a user'],
      control: { type: 'select' },
    },
    toolTip: {
      options: [true, false, 'Enter Tool Tip here'],
      control: { type: 'select' },
    },
    inputType: {
      options: ['text', 'password', 'email', 'number'],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: true,
    destructive: false,
    helpIcon: true,
    hintText: true,
    inputType: 'text',
  },
  render: ({
    disabled,
    destructive,
    helpIcon,
    hintText,
    size,
    label,
    toolTip,
    inputType,
    iconSwap,
  }: InputFieldProps) => (
    <InputField
      disabled={disabled}
      destructive={destructive}
      helpIcon={helpIcon}
      hintText={hintText}
      size={size}
      label={label}
      toolTip={toolTip}
      inputType={inputType}
      type="iconLeading"
      iconSwap={iconSwap}
      hintClick={() => console.log('I am clicking')}
    />
  ),
};
export const PhoneCountryWithFlag: Story = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    label: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    destructive: {
      control: 'boolean',
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    helpIcon: {
      options: [
        true,
        false,
        'activity',
        'activity-heart',
        'anchor',
        'eye',
        'eye-off',
      ],
      control: { type: 'select' },
    },
    hintText: {
      options: [true, false, 'Dynamic Hint For a user'],
      control: { type: 'select' },
    },
    toolTip: {
      options: [true, false, 'Enter Tool Tip here'],
      control: { type: 'select' },
    },
    inputType: {
      options: ['text', 'password', 'email', 'number'],
      control: { type: 'radio' },
    },
  },
  args: {
    disabled: true,
    destructive: false,
    helpIcon: true,
    hintText: true,
    inputType: 'text',
  },
  render: ({
    disabled,
    destructive,
    helpIcon,
    hintText,
    size,
    label,
    toolTip,
    inputType,
    iconSwap,
  }: InputFieldProps) => (
    <InputField
      disabled={disabled}
      destructive={destructive}
      helpIcon={helpIcon}
      hintText={hintText}
      size={size}
      label={label}
      toolTip={toolTip}
      inputType={inputType}
      type="phoneCountryWithFlag"
      iconSwap={iconSwap}
      hintClick={() => console.log('I am clicking in phone Country')}
    />
  ),
};

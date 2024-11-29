import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'components/Alert Collection/Alert',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Alert>;
export const Default: Story = {
  argTypes: {
    alertIsOpen: {
      control: 'boolean',
    },
    action: {
      control: 'boolean',
    },

    closeButton: {
      control: 'boolean',
    },
    actionTitle: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    actionLinkText: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    actionLinkIcon: {
      options: [true, false, 'activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    title: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    supportingText: {
      options: [true, false, 'Enter Label here'],
      control: { type: 'select' },
    },
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    color: {
      options: ['default', 'primary', 'gray', 'error', 'warning', 'success'],
      control: { type: 'select' },
    },
    breakpoint: {
      options: ['mobile', 'default'],
      control: { type: 'radio' },
    },
  },
  args: {},
  render: ({ ...props }: AlertProps) => <Alert {...props} />,
};

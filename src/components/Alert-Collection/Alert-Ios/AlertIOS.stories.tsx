import type { Meta, StoryObj } from '@storybook/react';
import { AlertIOS, AlertIOSProps } from './AlertIOS';
const meta: Meta<typeof AlertIOS> = {
  component: AlertIOS,
  title: 'components/Alert Collection/AlertIOS',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AlertIOS>;
export const Default: Story = {
  argTypes: {
    alertOpen: {
      control: 'boolean',
      description: 'alert popup model open or close',
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
      description: 'dark mode and light mode',
    },
    actions: {
      options: ['vertical-1', 'vertical-2', 'vertical-3', 'horizontal-2'],
      control: { type: 'radio' },
      description: 'action type',
    },

    title: {
      options: [true, false],
      control: { type: 'select' },
      description: 'heading for the alert popup model component',
    },

    description: {
      options: [true, false],
      control: { type: 'select' },
      description: 'Description for the alert popup model component',
    },
  },
  args: {
    title: '“Go My Go - Operator” Would Like to Send you Notifications',
    description:
      'Notifications may include alerts, sounds, and icon badges.These can be configured in Settings.',
  },
  render: ({ ...props }: AlertIOSProps) => <AlertIOS {...props} />,
};

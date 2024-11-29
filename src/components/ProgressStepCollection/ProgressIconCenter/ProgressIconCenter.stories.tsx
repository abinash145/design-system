import type { Meta, StoryObj } from '@storybook/react';
import {
  ProgressIconCenter,
  ProgressIconCenterProps,
} from './ProgressIconCenter';
const meta: Meta<typeof ProgressIconCenter> = {
  component: ProgressIconCenter,
  title: 'components/Progress Step Collection/ProgressIconCenter',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ProgressIconCenter>;
const data = [
  {
    onClick: () => {
      console.log('data');
    },
    status: 'complete',
  },
  {
    onClick: () => {
      console.log('data');
    },
    status: 'incomplete',
  },
  {
    onClick: () => {
      console.log('data');
    },
    status: 'current',
  },
];
export const iconOnly: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },

    ProgressIconCenterArrayValue: {
      control: 'object',
      description:
        'accept a array of object where object take value and progress props',
    },
  },

  args: {
    ProgressIconCenterArrayValue: [
      { status: 'complete', title: 'Type' },
      { status: 'current', title: 'Second Type' },
      { status: 'incomplete', title: 'Third Type' },
    ],
  },

  render: ({ ...props }: ProgressIconCenterProps) => (
    <ProgressIconCenter {...props} />
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { ProgressMinimal, ProgressMinimalProps } from './ProgressMinimal';
const meta: Meta<typeof ProgressMinimal> = {
  component: ProgressMinimal,
  title: 'components/Progress Step Collection/ProgressMinimal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ProgressMinimal>;
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

    progressMinimalArrayValue: {
      control: 'object',
      description:
        'accept a array of object where object take value and progress props',
    },
  },

  args: {
    progressMinimalArrayValue: [
      { status: 'complete' },
      { status: 'current' },
      { status: 'incomplete' },
    ],
  },

  render: ({ ...props }: ProgressMinimalProps) => (
    <ProgressMinimal {...props} />
  ),
};

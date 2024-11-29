import type { Meta, StoryObj } from '@storybook/react';
import { StepIconBase, StepIconBaseProps } from './StepIconBase';
const meta: Meta<typeof StepIconBase> = {
  component: StepIconBase,
  title: 'components/Progress Step Collection/Step Icon Base',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof StepIconBase>;
export const light: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    status: {
      options: ['incomplete', 'current', 'complete'],
      control: { type: 'radio' },
    },
  },
  args: {},
  render: ({ ...props }: StepIconBaseProps) => <StepIconBase {...props} />,
};

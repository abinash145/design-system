 import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from './Icon';
const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'components/Icon/Icon',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  argTypes: {
    name: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
  },
  args: {},
  render: ({ name }: IconProps) => <Icon name={name} />,
};

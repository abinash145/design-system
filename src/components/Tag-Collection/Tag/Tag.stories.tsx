import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagProps } from './Tag';
const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'components/Tag Collection/Tag',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    flagSwap: {
      options: ['usa', 'nep'],
      control: { type: 'radio' },
    },
  },
  args: { label: 'Label' },
  render: ({ flagSwap }: TagProps) => <Tag flagSwap={flagSwap} />,
};

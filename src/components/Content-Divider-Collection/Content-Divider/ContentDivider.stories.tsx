import type { Meta, StoryObj } from '@storybook/react';
import { ContentDivider, ContentDividerProps } from './ContentDivider';
const meta: Meta<typeof ContentDivider> = {
  component: ContentDivider,
  title: 'components/ContentDivider Collection/ContentDivider',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContentDivider>;

export const Default: Story = {
  argTypes: {},
  args: { label: 'Label' },
  render: ({ label }: ContentDividerProps) => <ContentDivider label={label} />,
};

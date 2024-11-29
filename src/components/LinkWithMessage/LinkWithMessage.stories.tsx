import type { Meta, StoryObj } from '@storybook/react';
import { LinkWithMessage, LinkWithMessageProps } from './LinkWithMessage';
const meta: Meta<typeof LinkWithMessage> = {
  component: LinkWithMessage,
  title: 'components/LinkWithMessage/LinkWithMessage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof LinkWithMessage>;
export const Default: Story = {
  argTypes: {},
  args: { text: 'text', linkText: 'linkText' },
  render: ({ text, linkText }: LinkWithMessageProps) => (
    <LinkWithMessage text={text} linkText={linkText} />
  ),
};

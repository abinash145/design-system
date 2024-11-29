import type { Meta, StoryObj } from '@storybook/react';
import {
  PaginationDotIndicator,
  PaginationDotIndicatorProps,
} from './PaginationDotIndicator';
const meta: Meta<typeof PaginationDotIndicator> = {
  component: PaginationDotIndicator,
  title: 'components/Carousel Slider Collection/Pagination Dot Indicator',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PaginationDotIndicator>;

export const Default: Story = {
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
    style: {
      options: ['line', 'dot'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primaryLight', 'primaryDark', 'grayDark', 'grayLight'],
      control: { type: 'radio' },
    },
    current: {
      control: 'boolean',
    },
  },
  args: {},
  render: ({ ...props }: PaginationDotIndicatorProps) => (
    <PaginationDotIndicator {...props}></PaginationDotIndicator>
  ),
};

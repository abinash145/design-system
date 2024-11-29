import type { Meta, StoryObj } from '@storybook/react';
import {
  PaginationDotGroup,
  PaginationDotGroupProps,
} from './PaginationDotGroup';
const meta: Meta<typeof PaginationDotGroup> = {
  component: PaginationDotGroup,
  title: 'components/Carousel Slider Collection/Pagination Dot Group',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PaginationDotGroup>;

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
      options: ['grayDarkBg', 'primaryLightBg', 'primaryDarkBg', 'grayLightBg'],
      control: { type: 'radio' },
    },
    framed: { control: 'boolean' },
    noOfDots: { control: 'number' },
    activeNumber: { control: 'number' },
  },
  args: {},
  render: ({ ...props }: PaginationDotGroupProps) => (
    <PaginationDotGroup {...props}></PaginationDotGroup>
  ),
};

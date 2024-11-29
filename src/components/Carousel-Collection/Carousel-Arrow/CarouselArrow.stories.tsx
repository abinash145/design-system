import type { Meta, StoryObj } from '@storybook/react';
import { CarouselArrow, CarouselArrowProps } from './CarouselArrow';
const meta: Meta<typeof CarouselArrow> = {
  component: CarouselArrow,
  title: 'components/Carousel Slider Collection/Carousel Arrow',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CarouselArrow>;
export const Default: Story = {
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
    chevron: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primaryLightBg', 'primaryDarkBg', 'grayDarkBg', 'grayLightBg'],
      control: { type: 'radio' },
    },
  },
  args: {},
  render: ({ ...props }: CarouselArrowProps) => <CarouselArrow {...props} />,
};

import type { Meta, StoryObj } from '@storybook/react';

import { CarouselSlider, CarouselSliderProps } from './CarouselSlider';

const meta: Meta<typeof CarouselSlider> = {
  component: CarouselSlider,
  title: 'components/Carousel Slider Collection/Carousel Slider',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CarouselSlider>;

export const Default: Story = {
  argTypes: {
    showPagination: {
      control: 'boolean',
      description: 'Show or hide pagination',
    },
    showHandle: {
      control: 'boolean',
      description: 'Show or hide pagination',
    },
    slide: {
      control: 'number',
      description: 'Initial Slide to show',
    },
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
      description: 'Pagination size',
    },
    style: {
      options: ['line', 'dot'],
      control: { type: 'radio' },
      description: 'Pagination Style',
    },
    color: {
      options: ['grayDarkBg', 'primaryLightBg', 'primaryDarkBg', 'grayLightBg'],
      control: { type: 'radio' },
      description: 'Pagination color',
    },
    framed: { control: 'boolean', description: 'Pagination framed' },
    infinite: {
      control: 'boolean',
      description: ' slider slides continuously ',
    },
    speed: { control: 'number', description: 'Slider slide speed' },
    slidesToShow: { control: 'number', description: 'Number of Slide to show' },
    slidesToScroll: {
      control: 'number',
      description: 'number of slide to scroll',
    },
    autoSlide: {
      control: 'boolean',
      description: ' slider slides automatically ',
    },
    autoplaySpeed: { control: 'number', description: 'Speed to change slide' },
  },
  args: {},
  render: ({ ...props }: CarouselSliderProps) => (
    <CarouselSlider {...props}>
      <img
        src='https://imgix.ranker.com/list_img_v2/18020/2378020/original/2378020-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720'
        alt=''
        className='w-[50px] h-auto'
      />
      <img
        src='https://imgix.ranker.com/list_img_v2/18020/2378020/original/2378020-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720'
        alt=''
        className='w-[50px] h-auto'
      />
      <img
        src='https://imgix.ranker.com/list_img_v2/18020/2378020/original/2378020-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720'
        alt=''
        className='w-[50px] h-auto'
      />
      <img
        src='https://imgix.ranker.com/list_img_v2/18020/2378020/original/2378020-u1?fit=crop&fm=pjpg&q=60&dpr=2&w=1200&h=720'
        alt=''
        className='w-[50px] h-auto'
      />
    </CarouselSlider>
  ),
};

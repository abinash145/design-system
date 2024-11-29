import type { Meta, StoryObj } from '@storybook/react';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
const meta: Meta<typeof ModalFooter> = {
  component: ModalFooter,
  title: 'components/Modal Collection/Modal Footer',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ModalFooter>;
export const horizontalFillContainer: Story = {
  argTypes: {
    type: {
      options: [
        'verticalFillContainer',
        'horizontalFillContainer',
        'horizontalRightAligned',
      ],
      control: { type: 'radio' },
    },
    breakpoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
    ModalFooterPaddingTop: {
      control: 'boolean',
    },
    destructive: {
      control: 'boolean',
    },
  },
  args: { firstButtonLabel: 'Cancel', secondButtonLabel: 'confirm' },
  render: ({
    breakpoint,
    ModalFooterPaddingTop,
    firstButtonLabel,
    secondButtonLabel,
    destructive,
  }: ModalFooterProps) => (
    <ModalFooter
      type="horizontalFillContainer"
      breakpoint={breakpoint}
      ModalFooterPaddingTop={ModalFooterPaddingTop}
      firstButtonLabel={firstButtonLabel}
      secondButtonLabel={secondButtonLabel}
      destructive={destructive}
    />
  ),
};

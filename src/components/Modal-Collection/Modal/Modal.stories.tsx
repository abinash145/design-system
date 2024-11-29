import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'components/Modal Collection/Modal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Default: Story = {
  argTypes: {
    modalOpen: {
      control: 'boolean',
    },
    headerPaddingBottom: {
      control: 'boolean',
    },
    headerFeaturedIconTheme: {
      options: ['lightCircle', 'lightCircleOutline', 'modern'],
      control: { type: 'radio' },
    },
    headerFeaturedIconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    headerBreakPoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
    headerType: {
      options: ['leftAlign', 'centerAlign', 'horizontalLeftAligned'],
      control: { type: 'radio' },
    },
    headerDivider: {
      control: 'boolean',
    },
    footerType: {
      options: [
        'verticalFillContainer',
        'horizontalFillContainer',
        'horizontalRightAligned',
      ],
      control: { type: 'radio' },
    },
    footerBreakpoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
    footerDestructive: {
      control: 'boolean',
    },
    footerPaddingTop: {
      control: 'boolean',
    },
  },
  args: {
    headerTitle: 'Title',
    headerSubtitle: 'Subtitle',
    footerFirstButtonLabel: 'Submit',
    footerSecondButtonLabel: 'Cancel',
  },
  render: ({ ...props }: ModalProps) => <Modal {...props} />,
};

import type { Meta, StoryObj } from '@storybook/react';
import { BottomSheetModal, BottomSheetModalProps } from './BottomSheetModal';

const meta: Meta<typeof BottomSheetModal> = {
  component: BottomSheetModal,
  title: 'components/Button Sheet/Button Sheet Modal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof BottomSheetModal>;

export const stackedLeftAlign: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign'],
      control: { type: 'radio' },
    },
    bottomSheetModalType: {
      options: ['stackedLeftAlign'],
      control: { type: 'radio' },
    },
    breakpoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
    modalShow: {
      control: 'boolean',
    },
    closeButton: {
      control: 'boolean',
    },
    paddingBottom: {
      control: 'boolean',
    },
    divider: {
      control: 'boolean',
    },
    featuredIcon: {
      control: 'boolean',
    },
    showSubtitle: {
      control: 'boolean',
    },
    showTitle: {
      control: 'boolean',
    },
    bottomSheetHeight: {
      control: 'number',
    },
  },
  args: { title: 'Title', subtitle: 'Subtitle' },
  render: ({
    type,
    breakpoint,
    modalShow,
    closeButton,
    paddingBottom,
    divider,
    showSubtitle,
    showTitle,
    title,
    subtitle,
    bottomSheetModalType,
    bottomSheetHeight,
  }: BottomSheetModalProps) => (
    <BottomSheetModal
      bottomSheetModalType={bottomSheetModalType}
      type={type}
      breakpoint={breakpoint}
      modalShow={modalShow}
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      bottomSheetHeight={bottomSheetHeight}
    >
      <div className="flex justify-center p-4">Content here</div>
    </BottomSheetModal>
  ),
};

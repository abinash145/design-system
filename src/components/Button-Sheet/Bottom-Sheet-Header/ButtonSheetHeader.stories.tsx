import type { Meta, StoryObj } from '@storybook/react';

import { BottomSheetHeader, BottomSheetHeaderProps } from './BottomSheetHeader';

const meta: Meta<typeof BottomSheetHeader> = {
  component: BottomSheetHeader,
  title: 'components/Button Sheet/Button Sheet Header',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof BottomSheetHeader>;
export const leftAlign: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign'],
      control: { type: 'radio' },
    },
    breakpoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
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
  },
  args: { title: 'This is title', subtitle: 'This is Subtitle' },
  render: ({
    title,
    subtitle,
    closeButton,
    paddingBottom,
    divider,
    showSubtitle,
    showTitle,
  }: BottomSheetHeaderProps) => (
    <BottomSheetHeader
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      type="leftAlign"
    />
  ),
};
export const centerAlign: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign'],
      control: { type: 'radio' },
    },
    breakpoint: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
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
  },
  args: { title: 'This is title', subtitle: 'This is Subtitle' },
  render: ({
    title,
    subtitle,
    closeButton,
    paddingBottom,
    divider,
    showSubtitle,
    showTitle,
    featuredIcon,
  }: BottomSheetHeaderProps) => (
    <BottomSheetHeader
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      featuredIcon={featuredIcon}
      type="centerAlign"
    />
  ),
};

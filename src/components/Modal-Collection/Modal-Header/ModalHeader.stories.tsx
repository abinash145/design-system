import type { Meta, StoryObj } from '@storybook/react';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
const meta: Meta<typeof ModalHeader> = {
  component: ModalHeader,
  title: 'components/Modal Collection/Modal Header',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ModalHeader>;
export const leftAlign: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign', 'horizontalLeftAligned'],
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
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    theme: {
      options: ['lightCircle', 'lightCircleOutline', 'modern'],
      control: { type: 'select' },
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
    iconSwap,
    theme,
    breakpoint,
  }: ModalHeaderProps) => (
    <ModalHeader
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      type="leftAlign"
      iconSwap={iconSwap}
      theme={theme}
      breakpoint={breakpoint}
    />
  ),
};
export const centerAlign: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign', 'horizontalLeftAligned'],
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
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    showSubtitle: {
      control: 'boolean',
    },
    showTitle: {
      control: 'boolean',
    },
    theme: {
      options: ['lightCircle', 'lightCircleOutline', 'modern'],
      control: { type: 'select' },
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
    iconSwap,
    theme,
    breakpoint,
  }: ModalHeaderProps) => (
    <ModalHeader
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      featuredIcon={featuredIcon}
      type="centerAlign"
      iconSwap={iconSwap}
      theme={theme}
      breakpoint={breakpoint}
    />
  ),
};
export const horizontalLeftAligned: Story = {
  argTypes: {
    type: {
      options: ['leftAlign', 'centerAlign', 'horizontalLeftAligned'],
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
    iconSwap: {
      options: ['activity', 'activity-heart', 'anchor'],
      control: { type: 'select' },
    },
    theme: {
      options: ['lightCircle', 'lightCircleOutline', 'modern'],
      control: { type: 'select' },
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
    iconSwap,
    theme,
    breakpoint,
  }: ModalHeaderProps) => (
    <ModalHeader
      title={title}
      subtitle={subtitle}
      closeButton={closeButton}
      paddingBottom={paddingBottom}
      divider={divider}
      showSubtitle={showSubtitle}
      showTitle={showTitle}
      type="horizontalLeftAligned"
      iconSwap={iconSwap}
      theme={theme}
      breakpoint={breakpoint}
    />
  ),
};

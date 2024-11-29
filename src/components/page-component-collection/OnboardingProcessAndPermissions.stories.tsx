import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingProcessAndPermissions } from './OnboardingProcessAndPermissions';

import image2 from '../../assets/images/bro.png';

const meta: Meta<typeof OnboardingProcessAndPermissions> = {
  component: OnboardingProcessAndPermissions,
  title: 'components/page component collection/OnboardingProcessAndPermissions',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof OnboardingProcessAndPermissions>;
export const Default: Story = {
  argTypes: {
    footerButton: {
      options: ['circularButtonWithPaginationDotGroup', 'Button'],
      control: { type: 'select' },
    },
    paginationColor: {
      options: ['primaryLightBg', 'primaryDarkBg', 'grayLightBg', 'grayDarkBg'],
      control: { type: 'select' },
    },
    buttonSize: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' },
    },
    buttonIcon: {
      options: ['default', 'dotLeading', 'only'],
      control: { type: 'select' },
    },
    buttonIconLeading: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
    },
    buttonIconTrailing: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
    },
    pageHeading: {
      options: [true, false, 'string'],
      control: { type: 'select' },
    },
    pageSubHeading: {
      options: [true, false, 'string'],
      control: { type: 'select' },
    },
    pageSupporting: {
      options: [true, false, 'string'],
      control: { type: 'select' },
    },
    circularButtonProgress: {
      options: [0, 20, 40, 60, 80, 100],
      control: { type: 'select' },
    },
    PaginationActiveNumber:{
      control:'number'
    },
    PaginationNoOfDots:{
      control:'number'
    }
  },
  args: { imageSrc: '', buttonLabel: 'Button CTA' },
  render: ({
    imageSrc,
    footerButton,
    paginationColor,
    buttonSize,
    buttonIcon,
    buttonLabel,
    buttonIconLeading,
    buttonIconTrailing,
    pageHeading,
    pageSubHeading,
    pageSupporting,
    circularButtonProgress,
    PaginationActiveNumber,
    PaginationNoOfDots
  }) => (
    <OnboardingProcessAndPermissions
      footerButton={footerButton}
      imageSrc={imageSrc}
      paginationColor={paginationColor}
      buttonSize={buttonSize}
      buttonIcon={buttonIcon}
      buttonLabel={buttonLabel}
      buttonIconLeading={buttonIconLeading}
      buttonIconTrailing={buttonIconTrailing}
      pageHeading={pageHeading}
      pageSubHeading={pageSubHeading}
      pageSupporting={pageSupporting}
      circularButtonProgress={circularButtonProgress}
      PaginationActiveNumber={PaginationActiveNumber}
      PaginationNoOfDots={PaginationNoOfDots}
    />
  ),
};

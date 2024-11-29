import type { Meta, StoryObj } from '@storybook/react';

import { SocialButton, SocialButtonProps } from './SocialButton';

const meta: Meta<typeof SocialButton> = {
  component: SocialButton,
  title: 'components/Button/Social Button',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SocialButton>;
export const Group: Story = {
  argTypes: {
    social: {
      options: ['google', 'facebook', 'apple', 'twitter', 'figma', 'dribble'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { social: 'google', theme: 'brand', supportingText: true },
  render: ({ social, theme, supportingText }: SocialButtonProps) => (
    <div className="flex gap-6">
      <div className="w-[236px]">
        <SocialButton
          social="google"
          theme={theme}
          supportingText={supportingText}
        />
        <SocialButton
          social="facebook"
          theme={theme}
          supportingText={supportingText}
        />
        <SocialButton
          social="apple"
          theme={theme}
          supportingText={supportingText}
        />
        <SocialButton
          social="twitter"
          theme={theme}
          supportingText={supportingText}
        />
        <SocialButton
          social="figma"
          theme={theme}
          supportingText={supportingText}
        />
        <SocialButton
          social="dribble"
          theme={theme}
          supportingText={supportingText}
        />
      </div>
      <div>
        <SocialButton
          social={social}
          theme={theme}
          supportingText={supportingText}
        />
      </div>
    </div>
  ),
};
export const Google: Story = {
  argTypes: {
    social: {
      options: ['google', 'facebook', 'apple', 'twitter', 'figma', 'dribble'],
      control: { type: 'radio' },
    },
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { social: 'google', theme: 'brand', supportingText: true },
  render: ({ social, theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social={social}
      theme={theme}
      supportingText={supportingText}
    />
  ),
};
export const Facebook: Story = {
  argTypes: {
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { theme: 'brand', supportingText: true },
  render: ({ theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social="facebook"
      theme={theme}
      supportingText={supportingText}
    />
  ),
};
export const Apple: Story = {
  argTypes: {
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { theme: 'brand', supportingText: true },
  render: ({ theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social="apple"
      theme={theme}
      supportingText={supportingText}
    />
  ),
};
export const Twitter: Story = {
  argTypes: {
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { theme: 'brand', supportingText: true },
  render: ({ theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social="twitter"
      theme={theme}
      supportingText={supportingText}
    />
  ),
};
export const Figma: Story = {
  argTypes: {
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { theme: 'brand', supportingText: true },
  render: ({ theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social="figma"
      theme={theme}
      supportingText={supportingText}
    />
  ),
};
export const Dribble: Story = {
  argTypes: {
    theme: {
      options: ['brand', 'color', 'colorWithBrand'],
      control: { type: 'radio' },
    },
    supportingText: {
      control: 'boolean',
    },
  },
  args: { theme: 'brand', supportingText: true },
  render: ({ theme, supportingText }: SocialButtonProps) => (
    <SocialButton
      social="dribble"
      theme={theme}
      supportingText={supportingText}
    />
  ),
};

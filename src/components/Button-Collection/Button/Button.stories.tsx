import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button/Button",
  tags: ["autodocs"],
  argTypes: {
    iconLeadingSwap: {
      options: ["activity", "activity-heart", "anchor"],
      control: { type: "select" },
    },
    iconTrailingSwap: {
      options: ["activity", "activity-heart", "anchor"],
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const group: Story = {
  argTypes: {
    hierarchy: {
      options: [
        "primary",
        "secondaryGray",
        "secondaryColor",
        "tertiaryGray",
        "tertiaryColor",
        "linkGray",
        "linkColor",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },

    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
    iconLeading: {
      control: "boolean",
    },
    iconTrailing: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
  },
  render: ({
    label,
    size,
    disable,
    hierarchy,
    iconLeading,
    iconTrailing,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <div>
      <p className="text-center text-lg-m mb-2">{hierarchy}</p>
      <div className="mb-2 flex gap-2">
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size={size}
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size={size}
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            destructive={true}
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
      </div>
      <div className="mb-2 flex gap-2">
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size={size}
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            icon="dotLeading"
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size={size}
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            icon="dotLeading"
            destructive={true}
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
      </div>
      <div className="mb-2 flex gap-2">
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size="sm"
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            icon="only"
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
        <div className="w-full">
          <Button
            disable={disable}
            hierarchy={hierarchy}
            size="sm"
            label={label}
            iconLeading={iconLeading}
            iconTrailing={iconTrailing}
            icon="only"
            destructive={true}
            iconLeadingSwap={iconLeadingSwap}
            iconTrailingSwap={iconTrailingSwap}
            loading={loading}
          />
        </div>
      </div>
    </div>
  ),
};

export const PrimaryButton: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
    iconLeading: {
      control: "boolean",
    },
    iconLeadingSwap: {
      options: ["activity", "activity-heart", "anchor"],
      control: { type: "select" },
    },
    iconTrailingSwap: {
      options: ["activity", "activity-heart", "anchor"],
      control: { type: "select" },
    },
    iconTrailing: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeading,
    iconTrailing,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      hierarchy="primary"
      disable={disable}
      destructive={destructive}
      iconLeading={iconLeading}
      iconTrailing={iconTrailing}
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

export const secondaryGray: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="secondaryGray"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

export const SecondaryButtonColor: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="secondaryColor"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

export const TertiaryGray: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
    hierarchy: "tertiaryGray",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="tertiaryGray"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

export const TertiaryColor: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="tertiaryColor"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

export const LinkGray: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading"],
      control: { type: "radio" },
    },
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
    iconLeading: {
      control: "boolean",
    },
    iconTrailing: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    iconLeading,
    iconTrailing,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="linkGray"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
      iconLeading={iconLeading}
      iconTrailing={iconTrailing}
    />
  ),
};

export const LinkColor: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
    },
    // hierarchy: {
    //   options: [
    //     'primary',
    //     'secondaryGray',
    //     'secondaryColor',
    //     'tertiaryGray',
    //     'tertiaryColor',
    //     'linkGray',
    //     'linkColor',
    //   ],
    //   control: { type: 'radio' },
    //},
    loading: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    destructive: {
      control: "boolean",
    },
  },
  args: {
    label: "Button CTA",
    size: "sm",
  },
  render: ({
    label,
    size,
    icon,
    disable,
    destructive,
    iconLeadingSwap,
    iconTrailingSwap,
    loading,
  }: ButtonProps) => (
    <Button
      label={label}
      size={size}
      icon={icon}
      disable={disable}
      destructive={destructive}
      hierarchy="linkColor"
      iconLeadingSwap={iconLeadingSwap}
      iconTrailingSwap={iconTrailingSwap}
      loading={loading}
    />
  ),
};

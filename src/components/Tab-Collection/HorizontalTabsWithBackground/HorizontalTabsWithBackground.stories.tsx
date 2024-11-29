import type { Meta, StoryObj } from "@storybook/react";

import InputField from "../../Input-Collection/Input-Field/InputField";
import {
  HorizontalTabsWithBackground,
  HorizontalTabsWithBackgroundProps,
} from "./HorizontalTabsWithBackground";

const meta: Meta<typeof HorizontalTabsWithBackground> = {
  component: HorizontalTabsWithBackground,
  title: "components/Tab Collection/Horizontal With Background",
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof HorizontalTabsWithBackground>;
const firstContent = (
  <div>
    <div className="mb-5">
      <InputField
        disabled={false}
        helpIcon={false}
        hintText={false}
        type="phoneCountryWithFlag"
        iconSwap="mail-01"
      />
    </div>
    <InputField
      label="New password"
      inputType={"password"}
      type="iconLeading"
      iconSwap="lock-unlocked-01"
      helpIcon={"eye-off"}
      placeholder="Enter your new password"
      hintText={false}
      toolTip={false}
    />
  </div>
);
const secondContent = (
  <div>
    <div className="mb-5">
      <InputField
        disabled={false}
        helpIcon={false}
        hintText={false}
        type="iconLeading"
        iconSwap="mail-01"
      />
    </div>{" "}
    <InputField
      label="New password"
      inputType={"password"}
      type="iconLeading"
      iconSwap="lock-unlocked-01"
      helpIcon={"eye-off"}
      placeholder="Enter your new password"
      hintText={false}
      toolTip={false}
    />
  </div>
);
export const Default: Story = {
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    icon: {
      options: ["default", "dotLeading", "only"],
      control: { type: "radio" },
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
    buttonShow: {
      control: "boolean",
    },
    iconTrailing: {
      control: "boolean",
    },
    selected: {
      options: ["first", "second"],
      control: { type: "radio" },
    },
    firstTabIcon: {
      options: ["phone", "mail-01", "activity"],
      control: { type: "select" },
    },
    secondTabIcon: {
      options: ["phone", "mail-01", "anchor"],
      control: { type: "select" },
    },
  },
  args: {
    label: "Login",
    firstTabLabel: "Phone",
    secondTabLabel: "Email",
    selected: "first",
    firstTabButtonLabel: "phone",
    secondTabButtonLabel: "email",
  },
  render: ({ ...props }: HorizontalTabsWithBackgroundProps) => (
    <HorizontalTabsWithBackground
      {...props}
      firstContent={firstContent}
      secondContent={secondContent}
    />
  ),
};

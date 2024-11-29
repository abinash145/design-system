import type { Meta, StoryObj } from '@storybook/react';

import {
  CheckboxGroupCollection,
  CheckboxGroupCollectionProps,
} from './CheckGroupCollection';

const meta: Meta<typeof CheckboxGroupCollection> = {
  component: CheckboxGroupCollection,
  title: 'components/Checkbox Collection/Checkbox Group Collection',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CheckboxGroupCollection>;

export const Default: Story = {
  argTypes: {
    checkBoxArrayValue: {
      control: 'object',
      description:
        'accept a array of object where object take value and checkboxgroup props',
    },
  },
  args: {
    checkBoxArrayValue: [
      { value: '1', title: 'Title 1', selected: true },
      { value: '2' },
      { value: '3' },
    ],
  },
  render: ({ checkBoxArrayValue, ...prop }: CheckboxGroupCollectionProps) => (
    <CheckboxGroupCollection checkBoxArrayValue={checkBoxArrayValue} />
  ),
};

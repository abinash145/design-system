import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';
const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'components/PageHeader/PageHeader',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PageHeader>;
export const Default: Story = {
  argTypes: {
    alignment:{
        options:['center','left'],
        control:{type:'select'}
    },
    fontSize:{
      options:['sm','md'],
      control:{type:'radio'}
    },
    showTitleText:{
        options:[true,false,'Verify phone number'],
        control:{type:'select' },
    },
    showSupport:{
        options:[true,false],
        control:{type:'select'}
    },
    showLogomark:{
        options:[true,false,'logo'],
        control:{type:'select'}
    },
  
  },
  args: {fontSize:'sm', showTitleText:true, showSupport:true , showLogomark:true},
  render: ({fontSize, alignment,showTitleText ,showSupport,showLogomark}: PageHeaderProps) => (
    <PageHeader fontSize={fontSize}  alignment={alignment}  showTitleText={showTitleText} showSupport={showSupport} showLogomark={showLogomark} />
  ),
};

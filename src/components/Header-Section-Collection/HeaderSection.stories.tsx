import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSection, HeaderSectionProps } from './HeaderSection';
const meta: Meta<typeof HeaderSection> = {
  component: HeaderSection,
  title: 'components/HeaderSection/HeaderSection',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof HeaderSection>;
export const Default: Story = {
  argTypes: {
    alignment:{
        options:['center','left','spaceBetween'],
        control:{type:'select'}
    },
 
   actions:{
    options:[false,'buttons','tabs','emailCapture','searchBar'],
    control:{type:'select'}
   },
   color:{
    options:['default','grayDark','primaryDark'],
    control:{type:'select'}
   },
   breakPoint:{
    options:['mobile','desktop'],
    control:{type:'select'}
   },
   showSubHeading:{
    options:[true,false],
    control:{type:'select'}
   },
   showHeading:{
    options:[true,false],
    control:{type:'select'}
   },
   showSupporting:{
    options:[true,false],
    control:{type:'select'}
   }
   
  
  },
  args: {alignment:'center'},
  render: ({ alignment,actions,color,breakPoint,showSubHeading,showHeading,showSupporting }: HeaderSectionProps) => (
    <HeaderSection   alignment={alignment} actions={actions}  color={color} breakPoint={breakPoint} showSubHeading={showSubHeading} showHeading={showHeading} showSupporting={showSupporting}/>
  ),
};

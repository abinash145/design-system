import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';
import logo from '../../assets/images/logo.png';
const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'components/Logo/Logo',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const group = (): JSX.Element => {
  return (
    <>
      <div className=" mb-2">
        <Logo imageSrc={logo} />
      </div>
      <div className=" mb-2">
        <Logo imageSrc={logo} logoText="GO MY GO" />
      </div>
      <div className="  mb-2">
        <Logo imageSrc={logo} logoText="GO MY GO" />
      </div>
      <div className=" ml-4">
        <Logo logoText="GO MY GO" />
      </div>
    </>
  );
};

export const PrimaryLogo: Story = {
  render: ({ logoText, imageSrc }) => {
    return (
      <div className="">
        <Logo imageSrc={imageSrc} logoText={logoText} />
      </div>
    );
  },
  args: {
    logoText: 'GO MY GO',
  },
};

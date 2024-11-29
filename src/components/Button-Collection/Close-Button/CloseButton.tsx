'use client';

import React from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type CloseButtonProps = {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  theme?: 'light' | 'dark';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export const CloseButton: React.FC<CloseButtonProps> = ({
  size = 'md',
  theme = 'light',
  color = 'primary',
  type = 'button',
  className,
}) => {
  //button padding style
  const padding = {
    sm: `${theme === 'dark' ? 'p-2' : `p-2`}`,
    md: `${theme === 'dark' ? 'p-2' : `p-[10px]`}`,
    lg: `${theme === 'dark' ? 'p-2' : `p-[10px]`}`,
  };
  const style = {
    primary: {
      button: `bg-transparent ${clsx({
        'hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-50 text-primary-500  focus:shadow-primary100':
          theme === 'light',
        'text-base-white hover:bg-[#b192f1] focus:bg-[#b192f1] focus:shadow-primary500':
          theme === 'dark',
      })}`,

      icon: `${clsx({
        'w-6': (size === 'lg') === true,
        'w-5': (size === 'lg') === false,
      })}`,
    },

    secondary: {
      button: `bg-transparent ${clsx({
        'hover:bg-secondary-50 hover:text-secondary-600 focus:bg-secondary-50  text-secondary-500':
          theme === 'light',
        'text-base-white hover:bg-[#858d9d] focus:bg-[#858d9d] focus:shadow-secondary500':
          theme === 'dark',
      })}`,
      icon: `${clsx({
        'w-6': (size === 'lg') === true,
        'w-5': (size === 'lg') === false,
      })}`,
    },
  };
  const currentStyle = style[color];
  // const classJoint = `${['', ``, ``].join(' ')}`;
  return (
    <button
      className={`${[
        'flex justify-center items-center w-full rounded-lg svgContainer  ',
        `${padding[size]}`,
        `${currentStyle.button}`,
        `${className}`,
      ].join(' ')}`}
      type={type}>
      <Icon name='x-close' className={`${currentStyle.icon}`} />
    </button>
  );
};
export default CloseButton;

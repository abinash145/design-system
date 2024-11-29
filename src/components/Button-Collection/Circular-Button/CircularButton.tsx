'use client';

import React from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type progress = number;
export type progressType = 'filled' | 'outline';
export type progressSize = 'md' | 'sm';
export type onClick = () => void;

export type CircularButtonProps = {
  onClick?: onClick;
  size?: progressSize;
  type?: progressType;
  progress?: progress;
  swapIcon?: string;
};

export const CircularButton: React.FC<CircularButtonProps> = ({
  size,
  type = 'filled',
  progress = 20,
  onClick,
  swapIcon,
}) => {
  //progress style by progress
  const progressStyle: any = {
    0: `bg-[conic-gradient(theme(colors.primary.600)_0deg,#fbfbfc_0deg)]`,
    20: `bg-[conic-gradient(theme(colors.primary.600)_72deg,#fbfbfc_0deg)]`,
    40: `bg-[conic-gradient(theme(colors.primary.600)_144deg,#fbfbfc_0deg)]`,
    60: `bg-[conic-gradient(theme(colors.primary.600)_216deg,#fbfbfc_0deg)]`,
    80: `bg-[conic-gradient(theme(colors.primary.600)_288deg,#fbfbfc_0deg)]`,
    100: `bg-[conic-gradient(theme(colors.primary.600)_360deg,#fbfbfc_0deg)]`,
  };

  const style = {
    outline: {
      button: `${clsx(
        (size === 'md' && 'w-[100px]') ||
          (size === 'sm' && 'w-[70px]') ||
          'w-full'
      )}`,

      iconParentDiv: `${clsx('w-[calc(100%-18px)]  bg-base-white')} `,
      icon: `${clsx('w-[calc(100%-68.69%)] text-primary-600')}`,
    },
    filled: {
      button: `${clsx(
        (size === 'md' && 'w-[100px]') ||
          (size === 'sm' && 'w-[70px]') ||
          'w-full'
      )}`,

      iconParentDiv: `${clsx(
        'w-[calc(100%-6px)] bg-base-white  bg-primary-600  border-[6px] border-[#fbfbfc]'
      )}`,
      icon: `${clsx('w-[calc(100%-68.69%)] text-base-white')}`,
    },
  };
  const currentStyle = style[type];
  // const classJoint = `${['', ``, ``].join(' ')}`;
  return (
    <button
      className={`${[
        'aspect-square rounded-[50%] flex  items-center justify-center svgContainer ',
        `${currentStyle.button}`,
        `${progressStyle[`${progress}`]}`,
        ``,
      ].join(' ')}`}
      onClick={onClick}>
      {/* Icon Parent Div */}
      <div
        className={`${[
          'rounded-[50%] flex items-center justify-center aspect-square',
          `${currentStyle.iconParentDiv}`,
          ``,
        ].join(' ')}`}>
        {/* Icon here */}
        <Icon
          name={
            swapIcon
              ? swapIcon
              : progress === 100
              ? 'check'
              : 'arrow-narrow-right'
          }
          className={`${currentStyle.icon}`}
        />
      </div>
    </button>
  );
};
export default CircularButton;

'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type CarouselArrowColor =
  | 'primaryLightBg'
  | 'primaryDarkBg'
  | 'grayDarkBg'
  | 'grayLightBg';
export type CarouselArrowProps = {
  onClick?: () => void;
  size?: 'md' | 'lg';
  color?: CarouselArrowColor;
  chevron?: 'left' | 'right';
  containerClassName?: string;
  hide?: boolean;
};

export const CarouselArrow: React.FC<CarouselArrowProps> = ({
  onClick,
  chevron = 'left',
  color = 'primaryLightBg',
  size = 'md',
  containerClassName = '',
  hide = false,
}) => {
  //all style
  const allStyle: any = {
    primaryLightBg: {
      container: `${clsx({
        'bg-primary-700': true,
        'w-9 h-9 p-[8px]': size === 'md',
        'w-11 h-11 p-[10px]': size === 'lg',
      })}`,
      icon: `${clsx({
        'text-base-white': true,
      })}`,
    },
    primaryDarkBg: {
      container: `${clsx({
        'bg-primary-50': true,
        'w-9 h-9 p-[8px]': size === 'md',
        'w-11 h-11 p-[10px]': size === 'lg',
      })}`,
      icon: `${clsx({
        'text-primary-700': true,
      })}`,
    },
    grayDarkBg: {
      container: `${clsx({
        'bg-base-black': true,
        'w-9 h-9 p-[8px]': size === 'md',
        'w-11 h-11 p-[10px]': size === 'lg',
      })}`,
      icon: `${clsx({
        'text-base-white': true,
      })}`,
    },
    grayLightBg: {
      container: `${clsx({
        'bg-base-white': true,
        'w-9 h-9 p-[8px]': size === 'md',
        'w-11 h-11 p-[10px]': size === 'lg',
      })}`,
      icon: `${clsx({
        'text-secondary-700': true,
      })}`,
    },
  };
  const currentStyle = allStyle[color];
  return (
    //container start here
    <div
      className={`${[
        'svgContainer rounded-[50%] flex justify-center items-center cursor-pointer',
        `${currentStyle.container}`,
        `${containerClassName}`,
        `${hide ? 'hidden' : ''}`,
      ].join(' ')}`}
      onClick={onClick}>
      <div className={`${['w-full', `${currentStyle.icon}`].join(' ')}`}>
        <Icon name={chevron === 'left' ? 'chevron-left' : 'chevron-right'} />
      </div>
    </div>
  );
};
export default memo(CarouselArrow);

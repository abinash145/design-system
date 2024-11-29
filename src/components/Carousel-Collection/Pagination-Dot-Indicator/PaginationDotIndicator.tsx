'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

export type style = 'line' | 'dot';
export type size = 'md' | 'lg';
export type color = 'primaryLight' | 'primaryDark' | 'grayDark' | 'grayLight';
export type PaginationDotIndicatorProps = {
  onClick?: () => void;
  current?: boolean;
  style?: style;
  size?: size;
  color?: color;
  index?: number;
};

export const PaginationDotIndicator: React.FC<PaginationDotIndicatorProps> = ({
  size = 'md',
  current = false,
  style = 'dot',
  color = 'primaryDark',
  onClick,
  index,
}) => {
  //all style
  const allStyle: any = {
    line: {
      container: `${clsx({
        'w-10 rounded-lg': true,
        'h-[6px]': size === 'md',
        'h-2': size === 'lg',
        'bg-primary-700': color === 'primaryLight' && current,
        'bg-secondary-100': color === 'primaryLight' && current === false,
        'bg-base-white': color === 'primaryDark' && current,
        'bg-primary-500': color === 'primaryDark' && current === false,
        'bg-base-white ': color === 'grayDark' && current,
        'bg-secondary-500': color === 'grayDark' && current === false,
        'bg-secondary-900': color === 'grayLight' && current,
        'bg-secondary-300': color === 'grayLight' && current === false,
      })}`,
    },
    dot: {
      container: `${clsx({
        'rounded-[50%] ': true,
        'w-2 h-2': size === 'md',
        'w-[10px] h-[10px]': size === 'lg',
        'bg-primary-700': color === 'primaryLight' && current,
        'bg-secondary-100': color === 'primaryLight' && current === false,
        'bg-base-white': color === 'primaryDark' && current,
        'bg-primary-500': color === 'primaryDark' && current === false,
        'bg-base-white ': color === 'grayDark' && current,
        'bg-secondary-500': color === 'grayDark' && current === false,
        'bg-secondary-900': color === 'grayLight' && current,
        'bg-secondary-300': color === 'grayLight' && current === false,
      })}`,
    },
  };
  const currentStyle = allStyle[style];
  return (
    <div
      className={`${['cursor-pointer', `${currentStyle.container}`].join(' ')}`}
      onClick={onClick}
      key={1}
      tabIndex={index}></div>
  );
};
export default memo(PaginationDotIndicator);

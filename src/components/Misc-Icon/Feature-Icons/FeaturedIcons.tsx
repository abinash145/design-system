'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type theme = 'lightCircle' | 'lightCircleOutline' | 'modern';
export type FeaturedIconsProps = {
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  theme?: theme;
  color?: 'primary' | 'gray' | 'error' | 'warning' | 'success';
  iconSwap?: string;
};

export const FeaturedIcons: React.FC<FeaturedIconsProps> = ({
  color = 'primary',
  size = 'md',
  theme = 'lightCircle',
  iconSwap,
}) => {
  //ICON style for different size
  const iconStyle = clsx({
    'w-3': size === 'xs',
    'w-4': size === 'sm',
    'w-5': size === 'md',
    'w-6': size === 'lg',
    'w-7': size === 'xl',
  });

  const allStyle: any = {
    lightCircle: {
      container: `${clsx({
        'rounded-[50%]': true,
        //background color start here
        'bg-primary-100': color === 'primary',
        'bg-secondary-100': color === 'gray',
        'bg-error-100': color === 'error',
        'bg-warning-100': color === 'warning',
        'bg-success-100': color === 'success',
        //width of container start here
        'w-6': size === 'xs',
        'w-8': size === 'sm',
        'w-10': size === 'md',
        'w-12': size === 'lg',
        'w-14': size === 'xl',
      })}`,
      icon: `${clsx({
        //icon color here
        'text-primary-600': color === 'primary',
        'text-secondary-600': color === 'gray',
        'text-error-600': color === 'error',
        'text-warning-600': color === 'warning',
        'text-success-600': color === 'success',
      })}`,
    },
    lightCircleOutline: {
      container: `${clsx({
        'rounded-[50%]': true,
        'bg-primary-100': color === 'primary',
        'bg-secondary-100': color === 'gray',
        'bg-error-100': color === 'error',
        'bg-warning-100': color === 'warning',
        'bg-success-100': color === 'success',
        //width of container start here
        'w-[23px]': size === 'xs',
        'w-[30px]': size === 'sm',
        'w-[37px]': size === 'md',
        'w-[44px]': size === 'lg',
        'w-[51px]': size === 'xl',
        //container box shadow
        'shadow-[0_0px_0px_2px_theme(colors.primary.50)]':
          size === 'xs' && color === 'primary',
        'shadow-[0_0px_0px_4px_theme(colors.primary.50)]':
          size === 'sm' && color === 'primary',
        'shadow-[0_0px_0px_6px_theme(colors.primary.50)]':
          size === 'md' && color === 'primary',
        'shadow-[0_0px_0px_8px_theme(colors.primary.50)]':
          size === 'lg' && color === 'primary',
        'shadow-[0_0px_0px_10px_theme(colors.primary.50)]':
          size === 'xl' && color === 'primary',
        'shadow-[0_0px_0px_2px_theme(colors.secondary.50)]':
          size === 'xs' && color === 'gray',
        'shadow-[0_0px_0px_4px_theme(colors.secondary.50)]':
          size === 'sm' && color === 'gray',
        'shadow-[0_0px_0px_6px_theme(colors.secondary.50)]':
          size === 'md' && color === 'gray',
        'shadow-[0_0px_0px_8px_theme(colors.secondary.50)]':
          size === 'lg' && color === 'gray',
        'shadow-[0_0px_0px_10px_theme(colors.secondary.50)]':
          size === 'xl' && color === 'gray',
        'shadow-[0_0px_0px_2px_theme(colors.error.50)]':
          size === 'xs' && color === 'error',
        'shadow-[0_0px_0px_4px_theme(colors.error.50)]':
          size === 'sm' && color === 'error',
        'shadow-[0_0px_0px_6px_theme(colors.error.50)]':
          size === 'md' && color === 'error',
        'shadow-[0_0px_0px_8px_theme(colors.error.50)]':
          size === 'lg' && color === 'error',
        'shadow-[0_0px_0px_10px_theme(colors.error.50)]':
          size === 'xl' && color === 'error',
        'shadow-[0_0px_0px_2px_theme(colors.warning.50)]':
          size === 'xs' && color === 'warning',
        'shadow-[0_0px_0px_4px_theme(colors.warning.50)]':
          size === 'sm' && color === 'warning',
        'shadow-[0_0px_0px_6px_theme(colors.warning.50)]':
          size === 'md' && color === 'warning',
        'shadow-[0_0px_0px_8px_theme(colors.warning.50)]':
          size === 'lg' && color === 'warning',
        'shadow-[0_0px_0px_10px_theme(colors.warning.50)]':
          size === 'xl' && color === 'warning',
        'shadow-[0_0px_0px_2px_theme(colors.success.50)]':
          size === 'xs' && color === 'success',
        'shadow-[0_0px_0px_4px_theme(colors.success.50)]':
          size === 'sm' && color === 'success',
        'shadow-[0_0px_0px_6px_theme(colors.success.50)]':
          size === 'md' && color === 'success',
        'shadow-[0_0px_0px_8px_theme(colors.success.50)]':
          size === 'lg' && color === 'success',
        'shadow-[0_0px_0px_10px_theme(colors.success.50)]':
          size === 'xl' && color === 'success',
      })}`,
      icon: `${clsx({
        //icon color here
        'text-primary-600': color === 'primary',
        'text-secondary-600': color === 'gray',
        'text-error-600': color === 'error',
        'text-warning-600': color === 'warning',
        'text-success-600': color === 'success',
      })}`,
    },
    modern: {
      container: `${clsx({
        'rounded-[4px] shadow-xs border-secondary-200': true,
        //background color start here
        'bg-base-white': color === 'primary',
        //width of container start here
        'w-6': size === 'xs',
        'w-8': size === 'sm',
        'w-10': size === 'md',
        'w-12': size === 'lg',
        'w-14': size === 'xl',
      })}`,
      icon: `${clsx({
        //icon color here
        'text-secondary-7 00': color === 'primary',
      })}`,
    },
  };
  const currentStyle = allStyle[theme];
  return (
    //container start here
    <div
      className={`${[
        'svgContainer  flex justify-center items-center aspect-square ',
        `${currentStyle.container}`,
      ].join(' ')}`}>
      <Icon
        name={iconSwap ? iconSwap : 'alert-circle'}
        className={`${['', `${iconStyle}`, `${currentStyle.icon}`].join(' ')}`}
      />
    </div>
  );
};
export default memo(FeaturedIcons);

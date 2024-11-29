'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type TagProps = {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  icon?: 'country';
  action?: 'textOnly';
  label?: string;
  flagSwap?: string;
};

export const Tag: React.FC<TagProps> = ({
  icon = 'country',
  size = 'md',
  action = 'textOnly',
  flagSwap,
  label,
}) => {
  //all style
  const allStyle: any = {
    iconSimple: {
      container: `${clsx({
        '': true,
      })}`,
    },
  };

  return (
    <div
      className={`flex gap-1 justify-center items-center border border-secondary-300 rounded-lg ${clsx(
        {
          'py-[3px] pr-[8px] pl-[4px]': size === 'sm',
          'py-[2px] pr-[9px] pl-[5px]': size === 'md',
          'py-[4px] pr-[10px] pl-[7px]': size === 'lg',
        }
      )}`}>
      <div className='w-4 svgContainerWithColor'>
        <Icon name={flagSwap ? flagSwap : 'nep'} />
      </div>
      <p className='text-xs-m text-secondary-700'>{label ? label : 'Label'}</p>
    </div>
  );
};
export default memo(Tag);

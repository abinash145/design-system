'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Icon from '../../Icon/Icon';

export type TabBaseProps = {
  onClick?: () => void;
  size?: 'sm' | 'md';
  current?: true | false;
  type?: 'underline';
  fullWidth?: true | false;
  badge?: true | false;
  withIcon?: true | false | string;
  label?: string;
};

export const TabBase: React.FC<TabBaseProps> = ({
  withIcon = 'folder',
  size = 'md',
  label = 'label',
  type = 'underline',
  current = false,
  fullWidth = true,
}) => {
  //all style
  const allStyle: any = {
    underline: {
      container: `${clsx({
        'border-b-2 border-primary-700 focus:bg-primary-100': current,
        'focus:bg-primary-100': current && size === 'md',
        'hover:border-b-2 hover:border-primary-700 ': size === 'sm',
        'focus:bg-secondary-200': current === false && size === 'md',
        'w-full flex': fullWidth,
        'inline-flex mx-auto': fullWidth === false,
        'pt-[1px] px-[4px] pb-[11px] ': size === 'sm',
        'p-[6px] ': size === 'md',
      })}`,
      text: `${clsx({
        'text-primary-700': current,
        'text-secondary-500': current === false,
      })}`,
    },
  };
  const currentStyle = allStyle[type];
  return (
    //container start here
    <div
      className={`${[
        'justify-center items-center gap-[10px] svgContainer group cursor-pointer',
        `${currentStyle.container}`,
      ].join(' ')}`}
    >
      {withIcon && size !== 'sm' && (
        <div className="w-5">
          <Icon
            name={`${typeof withIcon === 'string' ? withIcon : 'folder'}`}
            className={`${currentStyle.text}`}
          />
        </div>
      )}
      <p className={`${['text-md-sb', `${currentStyle.text}`].join(' ')}`}>
        {label}
      </p>
    </div>
  );
};
export default memo(TabBase);

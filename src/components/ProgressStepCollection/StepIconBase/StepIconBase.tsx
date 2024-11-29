'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

export type status = 'incomplete' | 'current' | 'complete';
export type size = 'sm' | 'md' | 'lg';
export type theme = 'light';
export type StepIconBaseProps = {
  onClick?: () => void;
  status?: status;
  size?: size;
  theme?: theme;
};

export const StepIconBase: React.FC<StepIconBaseProps> = ({
  onClick,
  status = 'incomplete',
  size = 'sm',
  theme = 'light',
}) => {
  //all style
  const allStyle: any = {
    light: {
      container: `${clsx({
        'w-6 h-6  ': size === 'sm',
        'w-8 h-8 ': size === 'md',
        'w-10 h-10 ': size === 'lg',
        'bg-secondary-50 hover:bg-secondary-100 focus:bg-secondary-50':
          status === 'incomplete',

        'bg-primary-50 hover:bg-primary-100':
          status === 'current' || status === 'complete',
        'shadow-primary100': status === 'current',
      })}`,
      icon: `${clsx({
        'w-2 h-2 ': size === 'sm' && status !== 'complete',
        'w-[10px] h-[10px] ': size === 'md' && status !== 'complete',
        'w-3 h-3 ': size === 'lg' && status !== 'complete',
        'text-xs': size === 'sm' && status === 'complete',
        'text-base': size === 'md' && status === 'complete',
        'text-xl ': size === 'lg' && status === 'complete',
        'bg-secondary-200 hover:bg-secondary-300 focus:bg-secondary-200':
          status === 'incomplete',
        'bg-primary-600': status === 'current',
        'text-primary-600 ': status === 'complete',
      })}`,
    },
  };
  const currentStyle = allStyle[theme];
  return (
    //container start here

    <div
      className={`${[
        'rounded-[50%]  flex justify-center items-center ',
        `${currentStyle.container}`,
      ].join(' ')}`}>
      {status === 'complete' ? (
        <span
          className={`${['font-extrabold ', `${currentStyle.icon}`].join(
            ' '
          )}`}>
          &#10003;
        </span>
      ) : (
        <span
          className={`${['  rounded-[50%]', `${currentStyle.icon}`].join(
            ' '
          )}`}></span>
      )}
    </div>
  );
};
export default memo(StepIconBase);

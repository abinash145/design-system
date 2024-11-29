'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

export type InputFieldBaseProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: true | false;
  placeholder?: string;
  renderSeparator?: any;
  onKeyDown?: () => void;
  destructive?: true | false;
};
export const InputFieldBase: React.FC<InputFieldBaseProps> = ({
  size = 'xs',
  disabled = false,
  placeholder,
  renderSeparator,
  destructive = false,
  ...props
}) => {
  //all style
  const allStyle: any = {
    input: `${clsx({
      'w-[50px!important] max-w-[100%] h-[50px] text-md-m [&:not(:last-child)]:mr-[6px] ':
        size === 'xs',
      'w-[64px!important] max-w-[100%] h-[64px] text-lg-m [&:not(:last-child)]:mr-[8px] ':
        size === 'sm',
      'w-[80px!important] max-w-[100%] h-[80px] text-lg-m [&:not(:last-child)]:mr-[10px]':
        size === 'md',
      'w-[96px!important] max-w-[100%] h-[96px] text-xl-m [&:not(:last-child)]:mr-[12px]':
        size === 'lg',
      ' text-secondary-200 border-secondary-300': disabled,
      ' text-primary-600 border-secondary-300  focus:shadow-primary100 outline-none focus:placeholder-primary-600 focus:border-primary-600 valid:border-primary-600':
        disabled === false && destructive === false,

      ' text-error-600 border-error-300  focus:shadow-error100 outline-none focus:placeholder-error-600 focus:border-error-600':
        destructive && disabled === false,
    })}`,
  };

  return (
    <>
      <input
        {...props}
        maxLength={1}
        disabled={disabled}
        placeholder={placeholder ? placeholder : ''}
        required
        className={`${[
          'rounded-lg border shadow-xs bg-base-white  placeholder-secondary-300  outline-none   text-center maxMobile:max-w-[40px] maxMobile:max-h-[40px]',
          `${allStyle.input}`,
        ].join(' ')}`}
      />
      {renderSeparator && renderSeparator}
    </>
  );
};
export default memo(InputFieldBase);

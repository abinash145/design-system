'use client';
import React, { memo, useEffect, useState } from 'react';

import clsx from 'clsx';

export type CheckBaseProps = {
  onClick?: () => void;
  onChange?: () => void;
  size?: 'sm' | 'md';
  checked?: true | false;
  disabled?: true | false;
  type?: 'checkCircle' | 'radio' | 'checkbox';
  indeterminate?: true | false;
  selfToggle?: boolean;
};

export const CheckBase: React.FC<CheckBaseProps> = ({
  checked = false,
  type = 'radio',
  size = 'sm',
  indeterminate,
  disabled = false,
  onClick,
  selfToggle = true,
}) => {
  const [check, setCheck] = useState(checked);
  //check unched by props
  useEffect(() => {
    setCheck(checked);
  }, [checked]);
  //inputDisabled is disable or not
  const allStyle: any = {
    radio: {
      label: `${clsx({
        "content-[''] before:border-secondary-300 before:group-hover:border-primary-600   before:group-hover:border-primary-600 before:hover:border-primary-600 before:hover:bg-primary-100 before:group-focus:ring before:group-focus:ring-primary-100 before:group-focus:ring-offset":
          check === false,
        'before:bg-secondary-100': disabled === true && check === false,
        'before:bg-secondary-300 before:border-secondary-300':
          disabled === true && check === true,
        "before:bg-primary-600 before:border-primary-600 before:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMzMzMzIgMi41TDMuNzQ5OTkgNy4wODMzM0wxLjY2NjY2IDUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')]":
          check === true && size === 'sm',
        "before:bg-primary-600 before:border-primary-600 before:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY2NjYgMy41TDUuMjQ5OTggOS45MTY2N0wyLjMzMzMxIDciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=')] before:pt-1":
          check === true && size === 'md',
        'before:w-4 before:h-4 ': size === 'sm',
        'before:w-5 before:h-5 ': size === 'md',
      })}`,
      container: `${clsx({
        'w-4 h-4 ': size === 'sm',
        'w-5 h-5 ': size === 'md',
      })}`,
    },
  };
  const currentStyle = allStyle[type];
  return (
    <div
      className={`${[
        ' relative inline-block',
        `${currentStyle.container}`,
        ``,
      ].join(' ')}`}>
      {/* <input
        id='radio-checkboxBase'
        className=' opacity-0 align-middle m-[5px] cursor-pointer hidden'
        name='radio-group'
        type='radio'
        checked={check}
        disabled={disabled}
      /> */}
      <label
        htmlFor='radio-checkboxBase'
        onClick={() => {
          if (selfToggle) {
            setCheck((prev) => {
              if (disabled) {
                return prev;
              } else {
                return !prev;
              }
            });
          }
        }}
        className={`${[
          ' align-middle cursor-pointer   before:absolute before:top-0 before:left-0 before:border before:flex before:items-center  before:justify-center before:align-middle   before:text-center before:rounded-[50%]  outline-1 overflow-hidden ',
          `${currentStyle.label}`,
          ``,
        ].join(' ')}`}></label>
    </div>
  );
};
export default memo(CheckBase);

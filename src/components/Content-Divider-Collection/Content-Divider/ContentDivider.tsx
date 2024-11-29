'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

export type ContentDividerProps = {
  label?: string;
};

export const ContentDivider: React.FC<ContentDividerProps> = ({ label }) => {
  //all style
  const allStyle: any = {
    iconSimple: {
      container: `${clsx({
        '': true,
      })}`,
    },
  };
  return (
    <div className='flex items-center'>
      <hr className='flex-grow border-t border-secondary-200' />
      <span className='px-2 text-sm-m text-secondary-600'>
        {label ? label : 'Lable Here'}
      </span>
      <hr className='flex-grow border-t border-secondary-200' />
    </div>
  );
};
export default memo(ContentDivider);

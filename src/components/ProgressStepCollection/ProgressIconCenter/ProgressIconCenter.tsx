'use client';

import React, { memo } from 'react';

import { StepIconBase, StepIconBaseProps } from '../StepIconBase/StepIconBase';

export type breakpoint = 'desktop' | 'mobile';
type arrayValueUpdate = { title: string };
export type ProgressIconCenter = {
  onClick: (data: any) => void;
  breakpoint?: breakpoint;
  ProgressIconCenterArrayValue: Array<StepIconBaseProps & arrayValueUpdate>;
  title?: string;
};
export type ProgressIconCenterProps = ProgressIconCenter & StepIconBaseProps;

export const ProgressIconCenter: React.FC<ProgressIconCenterProps> = ({
  onClick,
  status,
  size = 'sm',
  theme = 'light',
  ProgressIconCenterArrayValue,
}) => {
  return (
    //container start here

    <div className='w-full '>
      <div
        className={`${['flex justify-between items-center mx-auto', ``].join(
          ' '
        )}`}>
        {ProgressIconCenterArrayValue.map((item, index) => (
          <div
            key={index}
            className='flex items-center justify-between [&:not(:first-child)]:flex-grow  relative'
            onClick={() => onClick(item)}>
            {index !== 0 && (
              <hr
                className={`${[
                  'flex-grow border-t-[2px] ',
                  `${
                    item?.status === 'incomplete'
                      ? 'border-secondary-200'
                      : 'border-primary-600'
                  }`,
                ].join(' ')}`}
              />
            )}
            <StepIconBase {...item} size={size} theme={theme} />
            <div
              className={`absolute top-[calc(100%_+_8px)] text-center left-full  ${
                index === ProgressIconCenterArrayValue.length - 1
                  ? '-translate-x-[101%]'
                  : '-translate-x-[80%]'
              } `}>
              <p className='text-secondary-600 text-[10px]'>{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(ProgressIconCenter);

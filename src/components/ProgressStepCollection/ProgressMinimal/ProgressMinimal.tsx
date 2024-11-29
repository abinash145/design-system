'use client';

import React, { memo } from 'react';

import { StepIconBase, StepIconBaseProps } from '../StepIconBase/StepIconBase';

export type breakpoint = 'desktop' | 'mobile';
export type ProgressMinimal = {
  onClick?: () => void;
  breakpoint?: breakpoint;
  progressMinimalArrayValue: Array<StepIconBaseProps>;
};
export type ProgressMinimalProps = ProgressMinimal & StepIconBaseProps;

export const ProgressMinimal: React.FC<ProgressMinimalProps> = ({
  onClick,
  status,
  size = 'sm',
  theme = 'light',
  progressMinimalArrayValue,
}) => {
  return (
    //container start here

    <div className='w-full '>
      <div
        className={`${['flex justify-between items-center mx-auto', ``].join(
          ' '
        )}`}>
        {progressMinimalArrayValue.map((item, index) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};
export default memo(ProgressMinimal);

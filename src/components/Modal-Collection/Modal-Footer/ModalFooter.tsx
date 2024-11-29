'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Button from '../../Button-Collection/Button/Button';

export type ModalFooterType =
  | 'verticalFillContainer'
  | 'horizontalFillContainer'
  | 'horizontalRightAligned';
export type ModalFooterProps = {
  onClick?: () => void;
  type?: ModalFooterType;
  breakpoint?: 'desktop' | 'mobile';
  destructive?: true | false;
  ModalFooterPaddingTop?: true | false;
  firstButtonLabel?: string;
  secondButtonLabel?: string;
  firstButtonClick?: () => void;
  secondButtonClick?: () => void;
  firstButtonType?: 'button' | 'submit' | 'reset';
  secondButtonType?: 'button' | 'submit' | 'reset';
};

export const ModalFooter: React.FC<ModalFooterProps> = ({
  type = 'horizontalFillContainer',
  breakpoint = 'mobile',
  destructive = false,
  ModalFooterPaddingTop,
  firstButtonLabel,
  secondButtonLabel,
  firstButtonClick,
  secondButtonClick,
  firstButtonType = 'submit',
  secondButtonType = 'submit',
  onClick,
}) => {
  const allStyle: any = {
    horizontalFillContainer: {
      container: `${clsx({
        'pb-6 px-6 ': breakpoint === 'desktop',
        'pb-4 px-4  flex-col-reverse': breakpoint === 'mobile',
        'pt-6': ModalFooterPaddingTop && breakpoint === 'desktop',
        'pt-4': ModalFooterPaddingTop === true && breakpoint === 'mobile',
      })}`,
    },
  };
  const currentStyle = allStyle[type];

  return (
    //container start here
    <div
      className={`${['flex gap-3  ', `${currentStyle.container}`].join(' ')}`}>
      <div className='w-full'>
        <Button
          size='lg'
          hierarchy='secondaryGray'
          destructive={false}
          label={firstButtonLabel}
          iconLeading={false}
          iconTrailing={false}
          onClick={firstButtonClick}
          type={firstButtonType}
        />
      </div>
      <div className='w-full'>
        <Button
          size='lg'
          hierarchy='primary'
          destructive={destructive}
          label={secondButtonLabel}
          iconLeading={false}
          iconTrailing={false}
          onClick={secondButtonClick}
          type={secondButtonType}
        />
      </div>
    </div>
  );
};
export default memo(ModalFooter);

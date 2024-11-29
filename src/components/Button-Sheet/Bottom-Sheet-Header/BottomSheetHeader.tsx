'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import CloseButton from '../../Button-Collection/Close-Button/CloseButton';
import Icon from '../../Icon/Icon';

export type BottomSheetHeaderProps = {
  onClick?: () => void;
  type?: 'leftAlign' | 'centerAlign';
  breakpoint?: 'desktop' | 'mobile';
  closeButton?: true | false;
  paddingBottom?: true | false;
  divider?: true | false;
  featuredIcon?: true | false;
  showSubtitle?: true | false;
  showTitle?: true | false;
  title?: string;
  subtitle?: string;
};

export const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  type = 'leftAlign',
  paddingBottom = true,
  closeButton = true,
  title,
  subtitle,
  showTitle = true,
  showSubtitle = true,
  featuredIcon = true,
  divider,
  onClick,
}) => {
  const allStyle = {
    leftAlign: {
      container: `${clsx({
        'pt-4': true,
        'pb-5': paddingBottom === true,
        'border-b border-secondary-200': divider === true,
      })}`,
      title: `${clsx({
        'text-left': true,
        'hidden ': showTitle === false,
      })}`,
      subtitle: `${clsx({
        'text-left': true,
        'hidden ': showSubtitle === false,
      })}`,
      closeButton: `${clsx({
        '': true,
      })}`,
      featuredIcon: `${clsx({
        hidden: true,
      })}`,
    },
    centerAlign: {
      container: `${clsx({
        '': true,
        'pb-5': paddingBottom === true,
        'pt-[25px]': featuredIcon === true,
        'border-b border-secondary-200': divider === true,
      })}`,
      title: `${clsx({
        'text-center': true,
        'hidden ': showTitle === false,
      })}`,
      subtitle: `${clsx({
        'text-center': true,
        'hidden ': showSubtitle === false,
      })}`,
      closeButton: `${clsx({
        'hidden ': true,
      })}`,
      featuredIcon: `${clsx({
        '': true,
      })}`,
    },
  };
  const currentStyle = allStyle[type];

  return (
    //container start here
    <div
      className={`${[
        'svgContainer  px-6 pr-8 relative bg-base-white overflow-hidden rounded-t-[20px]',
        `${currentStyle.container}`,
      ].join(' ')}`}>
      {/* featureIcon start here */}
      {featuredIcon && (
        <div
          className={`${[
            'w-[70px] mx-auto   text-secondary-500',
            `${currentStyle.featuredIcon}`,
          ].join(' ')}`}
          onClick={onClick}>
          <Icon
            name='minus'
            className='w-[70px] absolute bg-transparent top-[-22px]'
          />
        </div>
      )}
      {/* title start here */}
      {title && (
        <h3
          className={`${[
            'text-lg-sb text-secondary-900 ',
            `${currentStyle.title}`,
          ].join(' ')}`}>
          {title ? title : 'Header here'}
        </h3>
      )}
      {/* subtitle start here */}
      {subtitle && (
        <p
          className={`${[
            'text-sm-r text-secondary-600',
            `${currentStyle.subtitle}`,
          ].join(' ')}`}>
          {subtitle ? subtitle : 'Subtitle here'}
        </p>
      )}
      {/* close button */}
      {closeButton && (
        <div
          className={`${[
            'absolute top-[6px] right-3 w-[45px]',
            `${currentStyle.closeButton}`,
          ].join(' ')}`}
          onClick={onClick}>
          <CloseButton color='secondary' theme='light' size='lg' />
        </div>
      )}
    </div>
  );
};
export default memo(BottomSheetHeader);

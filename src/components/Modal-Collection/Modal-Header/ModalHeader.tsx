'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import CloseButton from '../../Button-Collection/Close-Button/CloseButton';
import FeaturedIcons, {
  FeaturedIconsProps,
} from '../../Misc-Icon/Feature-Icons/FeaturedIcons';

export type ModalHeaderType =
  | 'leftAlign'
  | 'centerAlign'
  | 'horizontalLeftAligned';
export type ModalHeader = {
  onClick?: () => void;
  type?: ModalHeaderType;
  breakpoint?: 'desktop' | 'mobile';
  closeButton?: true | false;
  paddingBottom?: true | false;
  divider?: true | false;
  featuredIcon?: true | false | string;
  showSubtitle?: true | false;
  showTitle?: true | false;
  title?: string;
  subtitle?: string;
  iconSwap?: string;
};
export type ModalHeaderProps = ModalHeader & FeaturedIconsProps;

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  type = 'leftAlign',
  paddingBottom = true,
  closeButton = true,
  title,
  subtitle,
  showTitle = true,
  showSubtitle = true,
  featuredIcon = true,
  divider,
  iconSwap,
  theme = 'lightCircleOutline',
  breakpoint = 'mobile',
  onClick,
}) => {
  const allStyle: any = {
    leftAlign: {
      container: `${clsx({
        'pt-6 px-6': breakpoint === 'desktop',
        'pt-5 px-4': breakpoint === 'mobile',
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
      featuredIcon: `${clsx({
        'justify-start': true,
      })}`,
    },
    centerAlign: {
      container: `${clsx({
        'pt-6 px-6': breakpoint === 'desktop',
        'pt-5 px-4': breakpoint === 'mobile',
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
      featuredIcon: `${clsx({
        'justify-center': true,
      })}`,
    },
    horizontalLeftAligned: {
      container: `${clsx({
        'pt-6 px-6': breakpoint === 'desktop',
        'pt-5 px-4': breakpoint === 'mobile',
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
      featuredIcon: `${clsx({
        'justify-start': true,
      })}`,
    },
  };
  const currentStyle = allStyle[type];

  return (
    //container start here
    <div
      className={`${[
        'svgContainer   relative ',
        `${currentStyle.container}`,
      ].join(' ')}`}>
      <div className='relative flex justify-between mb-3'>
        <div
          className={`${['w-full flex', `${currentStyle.featuredIcon}`].join(
            ' '
          )}`}>
          <FeaturedIcons
            size='lg'
            color='success'
            iconSwap={iconSwap ? iconSwap : 'check-circle'}
            theme={theme}
          />
        </div>
        {closeButton && (
          <div className='absolute right-0 top-[-2px]' onClick={onClick}>
            <CloseButton color='secondary' theme='light' size='lg' />
          </div>
        )}
      </div>
      {/* title start here */}
      {title && (
        <h3
          className={`${[
            'text-lg-sb text-secondary-900 mb-1',
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
    </div>
  );
};
export default memo(ModalHeader);

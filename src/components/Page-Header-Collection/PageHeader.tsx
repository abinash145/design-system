'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import image from '../../assets/images/Logomark.png';

export type PageHeaderProps = {
  type?: 'default';
  fontSize?: 'sm' | 'md';
  alignment: 'center' | 'left';
  showLogomark?: true | false | string;
  showTitleText?: true | false | string;
  showSupport?: true | false | string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  fontSize = 'sm',
  alignment = 'center',
  showLogomark = true,
  showTitleText = true,
  showSupport = true,
}) => {
  //all style
  const allStyle = {
    center: {
      container: `${clsx({
        'items-center': true,
      })}`,
      logoContainer: `${clsx({
        'items-center': true,
      })}`,
      supportText: `${clsx({
        'text-center': true,
      })}`,
      title: `${clsx({
        'aligns-center': true,
        'text-xl-sb text-gray-900 ': fontSize === 'sm',
        'text-secondary-900 aligns-center  text-d-xs text-dxs-sb':
          fontSize === 'md',
      })}`,
    },
    left: {
      container: `${clsx({
        'items-start': true,
      })}`,
      logoContainer: `${clsx({
        'items-start': true,
      })}`,
      supportText: `${clsx({
        'text-start': true,
      })}`,
      title: `${clsx({
        'aligns-start': true,
        'text-xl-sb text-gray-900 ': fontSize === 'sm',
        'text-secondary-900 aligns-start  text-d-xs text-dxs-sb':
          fontSize === 'md',
      })}`,
    },
  };
  const currentStyle = allStyle[alignment];
  return (
    <div className='w-full svgContainer'>
      {/* container */}
      <div
        className={`${[
          'flex flex-col justify-center',
          `${currentStyle.container}`,
        ].join(' ')}`}>
        {showLogomark && (
          //logo container
          <div
            className={`${[
              'flex items-center  w-[117px] auto ',
              `${currentStyle.logoContainer}`,
            ].join(' ')}`}>
            {typeof showLogomark !== 'string' ? (
              //@ts-ignore
              <img src={image} alt='logo' />
            ) : (
              //@ts-ignore
              <img src={showLogomark} alt='logo' />
            )}
          </div>
        )}
        {/* title */}
        {showTitleText && (
          <div className={`${['   mb-2 ', `${currentStyle.title}`].join(' ')}`}>
            {typeof showTitleText === 'string'
              ? showTitleText
              : 'Create your account'}
          </div>
        )}

        {/* support text */}
        {showSupport && (
          <div
            className={`${[
              'text-md-r text-gray-600 ',
              `${currentStyle.supportText}`,
            ].join(' ')}`}>
            {typeof showSupport === 'string'
              ? showSupport
              : 'Welcome! Please enter your details.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(PageHeader);

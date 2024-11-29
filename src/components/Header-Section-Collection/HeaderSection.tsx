'use client';

import React, { memo } from 'react';

import clsx from 'clsx';

import Button from '../Button-Collection/Button/Button';

export type showHeading = true | false | string;
export type showSubHeading = true | false | string;
export type showSupporting = true | false | string;
export type alignment = 'center' | 'left' | 'spaceBetween';

export type HeaderSectionProps = {
  type?: 'default';
  alignment?: alignment;
  actions?: false | 'buttons' | 'tabs' | 'emailCapture' | 'searchBar';
  color?: 'default' | 'grayDark' | 'primaryDark';
  breakPoint?: 'mobile' | 'desktop';
  showHeading?: showHeading;
  showSubHeading?: showSubHeading;
  showSupporting?: showSupporting;
};

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  alignment = 'center',
  actions = false,
  color = 'default',
  breakPoint = 'mobile',
  showHeading = true,
  showSubHeading = true,
  showSupporting = true,
}) => {
  //all alignment style
  const alignmentStyle = {
    center: {
      container: `${clsx({
        'items-center': true,
        'text-center': true,
      })}`,
      headingContent: `${clsx({
        'items-center': true,
        'text-center': true,
      })}`,
      subHeadingContent: `${clsx({
        'items-center': true,
        'text-center': true,
      })}`,
      SupportingContent: `${clsx({
        'items-center': true,
        'text-center': true,
      })}`,
    },
    left: {
      container: `${clsx({
        'items-start': true,
      })}`,

      headingContent: `${clsx({
        'items-start': true,
      })}`,
      subHeadingContent: `${clsx({
        'items-start': true,
      })}`,
      SupportingContent: `${clsx({
        'items-start': true,
      })}`,
    },
    spaceBetween: {
      container: `${clsx({
        'items-start': true,
      })}`,
      headingContent: `${clsx({
        'items-start': true,
      })}`,
      subHeadingContent: `${clsx({
        'items-start': true,
      })}`,
      SupportingContent: `${clsx({
        'items-start': true,
      })}`,
    },
  };

  //all colors style

  const colorStyle = {
    default: {
      bgColor: `${clsx({
        '': true,
      })}`,
      headingColor: `${clsx({
        'text-primary-700': true,
      })}`,

      subHeadingColor: `${clsx({
        'text-secondary-900': true,
      })}`,

      supportingColor: `${clsx({
        'text-secondary-600': true,
      })}`,
    },

    grayDark: {
      bgColor: `${clsx({
        'bg-secondary-800': true,
      })}`,
      headingColor: `${clsx({
        'text-secondary-200': true,
      })}`,

      subHeadingColor: `${clsx({
        'text-base-white': true,
      })}`,

      supportingColor: `${clsx({
        'text-secondary-200': true,
      })}`,
    },

    primaryDark: {
      bgColor: `${clsx({
        'bg-primary-800': true,
      })}`,
      headingColor: `${clsx({
        'text-primary-200': true,
      })}`,

      subHeadingColor: `${clsx({
        'text-base-white': true,
      })}`,

      supportingColor: `${clsx({
        'text-primary-200': true,
      })}`,
    },
  };

  const currentAlignmentStyle = alignmentStyle[alignment];
  const currentColorStyle = colorStyle[color];

  return (
    <div
      className={`${[
        'w-full flex flex-col justify-center ',
        `${currentColorStyle.bgColor}`,
      ].join(' ')}`}
    >
      <div
        className={`${['flex self-stretch ', `${currentColorStyle.bgColor}`]}`}
      >
        <div
          className={`${[
            'flex flex-col  flex-1 ',
            `${currentAlignmentStyle.container}`,
          ].join(' ')}`}
        >
          {showHeading && (
            <div
              className={`${[
                'text-sm-sb pb-[12px] ',
                `${currentAlignmentStyle.headingContent}`,
                `${currentColorStyle.headingColor}`,
              ].join(' ')} `}
            >
              {typeof showHeading === 'string' ? showHeading : 'Pricing'}
            </div>
          )}
          {showSubHeading && (
            <div
              className={`${[
                ' text-xl-sb pb-[16px]',
                ` ${currentAlignmentStyle.subHeadingContent}`,
                `${currentColorStyle.subHeadingColor}`,
              ].join(' ')}`}
            >
              {typeof showSubHeading === 'string'
                ? showSubHeading
                : 'Efficient Vehicle Management'}
            </div>
          )}
          {showSupporting && (
            <div
              className={`${[
                'text-md-r',
                `${currentAlignmentStyle.SupportingContent}`,
                `${currentColorStyle.supportingColor}`,
              ].join(' ')}`}
            >
              {typeof showSupporting === 'string'
                ? showSupporting
                : 'Easily add,edit, and remove vehicles from your fleet'}
            </div>
          )}
        </div>
      </div>

      {actions === 'buttons' && (
        <div className="w-full">
          <div className="mb-[16px]">
            <Button
              size="xl"
              hierarchy="primary"
              icon="default"
              destructive={false}
              iconLeading={false}
              iconTrailing={false}
              label="Get started"
            />
          </div>

          <Button
            size="xl"
            hierarchy="secondaryGray"
            icon="default"
            destructive={false}
            iconLeading={false}
            iconTrailing={false}
            label="Chat to sales"
          />
        </div>
      )}
    </div>
  );
};

export default memo(HeaderSection);

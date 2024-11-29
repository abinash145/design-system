'use client';

import React, { memo, useMemo } from 'react';

import clsx from 'clsx';

import {
  color,
  PaginationDotIndicator,
  size,
  style,
} from '../Pagination-Dot-Indicator/PaginationDotIndicator';

export type PaginationGroupColor =
  | 'primaryLightBg'
  | 'primaryDarkBg'
  | 'grayLightBg'
  | 'grayDarkBg';

export type activeNumber = Array<number> | number;
export type noOfDots = number;
export type framed = boolean;

export type PaginationDotGroupProps = {
  onClick?: () => void;
  containerClick?(): (event: any) => void;
  current?: boolean;
  style?: style;
  size?: size;
  color?: PaginationGroupColor;
  dotColor?: color;
  noOfDots?: noOfDots;
  framed?: framed;
  activeNumber?: activeNumber;
};

export const PaginationDotGroup: React.FC<PaginationDotGroupProps> = ({
  size = 'md',
  current,
  style = 'line',
  dotColor = 'primaryDark',
  color = 'primaryDarkBg',
  noOfDots = 3,
  framed = true,
  activeNumber,
  onClick,
  containerClick,
}) => {
  //all style
  const allStyle: any = {
    line: {
      container: `${clsx({
        'gap-3': size === 'md',
        'gap-4': size === 'lg',
        'p-2 rounded-lg': framed && size === 'md',
        'p-3 rounded-[17px]': framed && size === 'lg',
        'bg-': framed && color === 'primaryLightBg',
        'bg-primary-700': framed && color === 'primaryDarkBg',
        'bg-primary-50': framed && color === 'grayLightBg',
        'bg-base-black': framed && color === 'grayDarkBg',
        'bg-base-white': framed === false,
      })}`,
    },
    dot: {
      container: `${clsx({
        'gap-3': size === 'md',
        'gap-4': size === 'lg',
        'p-2 rounded-lg': framed && size === 'md',
        'p-3 rounded-[17px]': framed && size === 'lg',
        'bg-': framed && color === 'primaryLightBg',
        'bg-primary-700': framed && color === 'primaryDarkBg',
        'bg-primary-50': framed && color === 'grayLightBg',
        'bg-base-black': framed && color === 'grayDarkBg',
        'bg-base-white': framed === false,
      })}`,
    },
  };
  const currentStyle = allStyle[style];
  const paginationCurrentList = useMemo(() => {
    if (activeNumber) {
      if (activeNumber.constructor === Array) {
        return activeNumber;
      } else {
        return [activeNumber];
      }
    }
  }, [activeNumber]);
  //checking data is include  in array or not
  function checkDataExistArray(checkData: number) {
    if (paginationCurrentList) return paginationCurrentList.includes(checkData);
  }
  return (
    <div
      className={`${['inline-flex', `${currentStyle.container}`].join(' ')}`}>
      {Array.from({ length: noOfDots }, (_, index) => index + 1).map(
        (item, index) => (
          //@ts-ignore
          <div key={index} onClick={containerClick} aria-current={index}>
            <PaginationDotIndicator
              //@ts-ignore
              color={clsx({
                grayDark: color === 'grayDarkBg',
                primaryLight: color === 'primaryLightBg',
                primaryDark: color === 'primaryDarkBg',
                grayLight: color === 'grayLightBg',
              })}
              current={activeNumber ? checkDataExistArray(index + 1) : false}
              style={style}
              size={size}
              onClick={onClick}
              index={index}
              framed={framed}
            />
          </div>
        )
      )}
    </div>
  );
};
export default memo(PaginationDotGroup);

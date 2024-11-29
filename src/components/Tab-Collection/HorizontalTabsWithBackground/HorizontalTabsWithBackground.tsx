'use client';
import React, { memo, useEffect, useState } from 'react';

import Button, { ButtonProps } from '../../Button-Collection/Button/Button';
import TabBase from '../Tab-Base/TabBase';

type HorizontalTabsWithBackground = {
  onClick?: () => void;
  selected?: 'first' | 'second';
  firstTabLabel?: string;
  secondTabLabel?: string;
  firstTabIcon?: string;
  secondTabIcon?: string;
  firstContent?: JSX.Element;
  secondContent?: JSX.Element;
  children?: string | JSX.Element | JSX.Element[];
  firstTabButtonLabel?: string;
  secondTabButtonLabel?: string;
  buttonShow?: true | false;
  firstTabClick?: () => void;
  secondTabClick?: () => void;
  loading?: boolean;
};
export type HorizontalTabsWithBackgroundProps = HorizontalTabsWithBackground &
  ButtonProps;

export const HorizontalTabsWithBackground: React.FC<
  HorizontalTabsWithBackgroundProps
> = ({
  selected = 'first',
  firstTabLabel,
  secondTabLabel,
  firstTabIcon = 'phone',
  secondTabIcon = 'mail-01',
  firstContent,
  secondContent,
  children,
  buttonShow = false,
  firstTabButtonLabel,
  secondTabButtonLabel,
  firstTabClick,
  secondTabClick,
  loading,
  ...props
}) => {
  //state for active first tabs
  const [firstActive, setFirstActive] = useState(true);
  //active first or second tab
  useEffect(() => {
    if (selected === 'first') {
      setFirstActive(true);
    } else {
      setFirstActive(false);
    }
  }, [selected]);
  return (
    //container start here
    <div>
      <div className='py-2 mb-2 border rounded-xl border-secondary-200'>
        <div className='flex pb-[2px]'>
          <div
            className='w-full'
            onClick={() => {
              setFirstActive(true);
              if (firstTabClick) {
                firstTabClick();
              }
            }}>
            <TabBase
              current={firstActive}
              fullWidth={true}
              label={firstTabLabel}
              withIcon={firstTabIcon}
            />
          </div>
          <div
            className='w-full'
            onClick={() => {
              setFirstActive(false);
              if (secondTabClick) {
                secondTabClick();
              }
            }}>
            <TabBase
              current={firstActive ? false : true}
              fullWidth={true}
              label={secondTabLabel}
              withIcon={secondTabIcon}
            />
          </div>
        </div>
        <div className='px-4 py-5'>
          {firstActive ? firstContent : secondContent}
          {children}
        </div>
      </div>
      {buttonShow && (
        <div>
          <Button
            hierarchy='primary'
            iconLeading={false}
            iconTrailing={false}
            disable={true}
            size='xl'
            label={firstActive ? firstTabButtonLabel : secondTabButtonLabel}
            loading={loading}
            {...props}
          />
        </div>
      )}
    </div>
  );
};
export default memo(HorizontalTabsWithBackground);

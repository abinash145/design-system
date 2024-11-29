'use client';
import React, { memo, useEffect, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import Icon from '../../Icon/Icon';
import FeaturedIcons from '../../Misc-Icon/Feature-Icons/FeaturedIcons';

export type Color =
  | 'default'
  | 'primary'
  | 'gray'
  | 'error'
  | 'warning'
  | 'success';
export type Breakpoint = 'mobile' | 'default';
export type AlertProps = {
  onClose: () => void;
  color?: Color;
  breakpoint?: Breakpoint;
  closeButton?: true | false;
  action?: true | false;
  actionTitle?: true | false | string;
  actionLinkText?: true | false | string;
  actionLinkIcon?: true | false | string;
  title?: true | false | string;
  supportingText?: true | false | string;
  iconSwap?: string;
  actionClick?: () => void;
  alertIsOpen?: true | false;
  autoClose?: true | false | number;
};

export const Alert: React.FC<AlertProps> = ({
  color = 'default',
  breakpoint,
  closeButton,
  action = true,
  actionTitle = true,
  actionLinkText = true,
  actionLinkIcon = true,
  title = true,
  supportingText = true,
  actionClick,
  alertIsOpen = false,
  onClose,
  autoClose = 4000,
}) => {
  const [alertOpen, setAlertOpen] = useState(alertIsOpen);

  //toggling by alertIsOpen
  useEffect(() => {
    if (alertIsOpen) {
      setAlertOpen(alertIsOpen);
    } else {
      setAlertOpen(alertIsOpen);
    }
  }, [alertIsOpen]);
  //autoClose
  useEffect(() => {
    const timer =
      typeof autoClose === 'number'
        ? setTimeout(() => {
            onClose();
          }, autoClose)
        : autoClose
        ? setTimeout(() => {
            onClose();
          }, 4000)
        : setTimeout(() => {
            console.log('not closing alert');
          }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [autoClose, onClose]);
  //all style according to color
  const allStyle: any = {
    default: {
      container: `${clsx({
        'border-secondary-300': true,
      })}`,
      icon: `${clsx({
        'text-secondary-700 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-secondary-500': true,
      })}`,
      title: `${clsx({
        'text-primary-700': true,
      })}`,
      supportingText: `${clsx({
        'text-secondary-600': true,
      })}`,
      actionTitle: `${clsx({
        'text-secondary-600': true,
      })}`,
      actionLinkText: `${clsx({
        'text-primary-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-primary-700 w-5 ': true,
      })}`,
    },
    primary: {
      container: `${clsx({
        'border-primary-300 bg-primary-50': true,
      })}`,
      icon: `${clsx({
        'text-primary-700 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-primary-500 ': true,
      })}`,
      title: `${clsx({
        'text-primary-700': true,
      })}`,
      supportingText: `${clsx({
        'text-primary-700': true,
      })}`,
      actionTitle: `${clsx({
        'text-primary-600': true,
      })}`,
      actionLinkText: `${clsx({
        'text-primary-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-primary-700 w-5 ': true,
      })}`,
    },
    gray: {
      container: `${clsx({
        'border-secondary-300 bg-secondary-50': true,
      })}`,
      icon: `${clsx({
        'text-secondary-500 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-secondary-500 ': true,
      })}`,
      title: `${clsx({
        'text-secondary-700': true,
      })}`,
      supportingText: `${clsx({
        'text-secondary-600': true,
      })}`,
      actionTitle: `${clsx({
        'text-secondary-600': true,
      })}`,
      actionLinkText: `${clsx({
        'text-primary-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-primary-700 w-5 ': true,
      })}`,
    },
    error: {
      container: `${clsx({
        'border-error-300 bg-error-25': true,
      })}`,
      icon: `${clsx({
        'text-error-600 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-error-500 ': true,
      })}`,
      title: `${clsx({
        'text-error-700': true,
      })}`,
      supportingText: `${clsx({
        'text-error-700': true,
      })}`,
      actionTitle: `${clsx({
        'text-error-600': true,
      })}`,
      actionLinkText: `${clsx({
        'text-error-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-error-700 w-5 ': true,
      })}`,
    },
    warning: {
      container: `${clsx({
        'border-warning-300 bg-warning-25': true,
      })}`,
      icon: `${clsx({
        'text-warning-600 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-warning-500 ': true,
      })}`,
      title: `${clsx({
        'text-warning-700': true,
      })}`,
      supportingText: `${clsx({
        'text-warning-700': true,
      })}`,
      actionTitle: `${clsx({
        'text-warning-500': true,
      })}`,
      actionLinkText: `${clsx({
        'text-warning-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-warning-700 w-5 ': true,
      })}`,
    },
    success: {
      container: `${clsx({
        'border-success-300 bg-success-25': true,
      })}`,
      icon: `${clsx({
        'text-success-600 ': true,
      })}`,
      closeIcon: `${clsx({
        'text-success-500': true,
      })}`,
      title: `${clsx({
        'text-success-700': true,
      })}`,
      supportingText: `${clsx({
        'text-success-700': true,
      })}`,
      actionTitle: `${clsx({
        'text-success-600': true,
      })}`,
      actionLinkText: `${clsx({
        'text-success-700': true,
      })}`,
      actionLinkIcon: `${clsx({
        'text-success-700 w-5 ': true,
      })}`,
    },
  };
  const currentStyle = allStyle[color];
  return (
    <AnimatePresence>
      {/* Contaner start here */}
      {alertOpen && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          exit={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 1 }}
          className='top-4 fixed w-full left-0'>
          <div
            className={`${[
              'svgContainer  gap-3  p-4 border rounded-xl sm:right-4 flex  top-0  absolute w-[375px] max-w-[100%] bg-base-white max-w-100% right-[50%] transform translate-x-[50%] sm:transform-none',
              `${clsx({
                'flex-col': breakpoint === 'mobile',
                'flex-row': breakpoint === 'default',
              })}`,
              `${currentStyle.container}`,
            ].join(' ')}`}>
            <div className=''>
              {color === 'default' ? (
                <div
                  className={`${['w-10', `${currentStyle.icon}`].join(' ')}`}>
                  <FeaturedIcons theme='modern' />
                </div>
              ) : (
                <div className={`${['w-5', `${currentStyle.icon}`].join(' ')}`}>
                  <Icon name='info-circle' />
                </div>
              )}
            </div>
            <div>
              <div className='mb-3'>
                {title && (
                  <h2
                    className={`${[
                      'text-sm-sb  mb-1',
                      `${currentStyle.title}`,
                    ].join(' ')}`}>
                    {typeof title === 'string' ? title : 'Title'}
                  </h2>
                )}
                {supportingText && (
                  <p
                    className={`${[
                      'text-sm-r ',
                      `${currentStyle.supportingText}`,
                    ].join(' ')}`}>
                    {typeof supportingText === 'string'
                      ? supportingText
                      : 'Something went wrong'}
                  </p>
                )}
              </div>
              {action && (
                <div className='flex gap-3'>
                  {actionTitle && (
                    <p
                      className={`${[
                        'text-sm-sb ',
                        `${currentStyle.actionTitle}`,
                      ].join(' ')}`}>
                      {typeof actionTitle === 'string'
                        ? actionTitle
                        : 'Action Title'}
                    </p>
                  )}
                  <div
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={actionClick}>
                    {actionLinkText && (
                      <p
                        className={`${[
                          'text-sm-sb ',
                          `${currentStyle.actionLinkText}`,
                        ].join(' ')}`}>
                        {typeof actionLinkText === 'string'
                          ? actionLinkText
                          : 'View changes'}
                      </p>
                    )}
                    {actionLinkIcon && (
                      <div
                        className={`${[
                          '',
                          `${currentStyle.actionLinkIcon}`,
                        ].join(' ')}`}>
                        <Icon
                          name={
                            typeof actionLinkIcon === 'string'
                              ? actionLinkIcon
                              : 'arrow-right'
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {closeButton && (
              <div
                className={`${[
                  'absolute top-4 right-4 w-5 h-5',
                  `${currentStyle.closeIcon}`,
                ].join(' ')}`}
                onClick={onClose}>
                <Icon name='x-close' />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default memo(Alert);

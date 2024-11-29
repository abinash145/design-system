'use client';
import React, { Fragment, memo, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Dialog, Transition } from '@headlessui/react';

import { theme } from '../../Misc-Icon/Feature-Icons/FeaturedIcons';
import {
  ModalFooter,
  ModalFooterProps,
  ModalFooterType,
} from '../Modal-Footer/ModalFooter';
import {
  ModalHeader,
  ModalHeaderProps,
  ModalHeaderType,
} from '../Modal-Header/ModalHeader';

export type Modal = {
  onClick?: () => void;
  onClose?: () => void;
  modalOpen?: true | false;
  children?: string | JSX.Element | JSX.Element[];
  headerFeaturedIconTheme?: theme;
  headerPaddingBottom?: true | false;
  headerFeaturedIconSwap?: string;
  headerBreakPoint?: 'desktop' | 'mobile';
  headerTitle?: string;
  headerSubtitle?: string;
  headerType?: ModalHeaderType;
  headerDivider?: true | false;
  footerType?: ModalFooterType;
  footerBreakpoint?: 'desktop' | 'mobile';
  footerDestructive?: true | false;
  footerPaddingTop?: true | false;
  footerFirstButtonLabel?: string;
  footerSecondButtonLabel?: string;
  footerFirstButtonClick?: () => void;
  footerSecondButtonClick?: () => void;
  footerFirstButtonType?: 'button' | 'submit' | 'reset';
  footerSecondButtonType?: 'button' | 'submit' | 'reset';
  onSubmit?: () => void;
};
export type ModalProps = Modal & ModalHeaderProps & ModalFooterProps;

export const Modal: React.FC<ModalProps> = ({
  onClick,
  onClose = () => {
    console.log('send a closing function');
  },
  modalOpen = true,
  children,
  closeButton,
  headerPaddingBottom,
  headerDivider,
  headerFeaturedIconTheme,
  headerFeaturedIconSwap,
  headerBreakPoint = 'mobile',
  headerTitle,
  headerSubtitle,
  headerType,
  footerDestructive,
  footerPaddingTop,
  footerFirstButtonLabel = 'Confirm',
  footerSecondButtonLabel = 'Cancel',
  footerBreakpoint = 'mobile',
  footerSecondButtonClick = () => {
    console.log('');
  },
  footerFirstButtonClick = () => {
    console.log('');
  },
  footerFirstButtonType = 'submit',
  footerSecondButtonType = 'submit',
  onSubmit,
}) => {
  //modal open close state
  const [isOpen, setIsOpen] = useState(modalOpen);
  //change the modal state by modalOpen
  useEffect(() => {
    if (modalOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [modalOpen]);
  // const allStyle: any = {
  //   leftAlign: {
  //     container: `${clsx({
  //       'pt-6 px-6': breakpoint === 'desktop',
  //       'pt-5 px-4': breakpoint === 'mobile',
  //       'pb-5': paddingBottom === true,
  //       'border-b border-secondary-200': divider === true,
  //     })}`,
  //   },
  // };
  // const currentStyle = allStyle[type];

  return (
    //container start here
    //@ts-ignore
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10 ' onClose={onClose}>
        <Transition.Child
          //@ts-ignore
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='container fixed inset-0 overflow-y-auto'>
          <form
            className='flex items-center justify-center min-h-full'
            onSubmit={onSubmit}>
            <Transition.Child
              //@ts-ignore
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full max-w-md overflow-hidden transition-all transform rounded-xl bg-base-white'>
                <ModalHeader
                  onClick={onClose}
                  paddingBottom={headerPaddingBottom}
                  iconSwap={headerFeaturedIconSwap}
                  featuredIcon={headerFeaturedIconSwap}
                  breakpoint={headerBreakPoint}
                  closeButton={closeButton}
                  title={headerTitle}
                  subtitle={headerSubtitle}
                  type={headerType}
                  divider={headerDivider}
                  showSubtitle
                  showTitle
                  theme={headerFeaturedIconTheme}
                />
                <div
                  className={`${clsx({
                    'pb-6 px-6 ': headerBreakPoint === 'desktop',
                    'pb-4 px-4  flex-col-reverse':
                      headerBreakPoint === 'mobile',
                  })}`}>
                  {children}
                </div>
                <ModalFooter
                  firstButtonLabel={footerFirstButtonLabel}
                  secondButtonLabel={footerSecondButtonLabel}
                  ModalFooterPaddingTop={footerPaddingTop}
                  destructive={footerDestructive}
                  breakpoint={footerBreakpoint}
                  firstButtonClick={footerFirstButtonClick}
                  secondButtonClick={footerSecondButtonClick}
                  secondButtonType={footerSecondButtonType}
                  firstButtonType={footerFirstButtonType}
                />
              </Dialog.Panel>
            </Transition.Child>
          </form>
        </div>
      </Dialog>
    </Transition>
  );
};
export default memo(Modal);

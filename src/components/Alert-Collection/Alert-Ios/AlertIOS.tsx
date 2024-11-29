import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import React, { Fragment, memo, useEffect, useState } from 'react';
export interface AlertIOSProps {
  onClick?: () => void;
  actionClick?: () => void;
  onClose?: () => void;
  onSubmit?: () => void;
  alertOpen?: true | false;
  children?: string | JSX.Element | JSX.Element[];
  theme?: 'light' | 'dark';
  actions?: 'vertical-1' | 'vertical-2' | 'vertical-3' | 'horizontal-2';
  title?: string | true | false;
  description?: string | true | false;
  divider?: true | false;
}

export const AlertIOS: React.FC<AlertIOSProps> = ({
  onClick,
  actionClick,
  onClose = () => {
    console.log('send a closong function');
  },
  alertOpen = false,
  children,
  theme = 'light',
  actions = 'horizontal-2',
  title = true,
  description = true,
  divider,
  onSubmit,
}) => {
  const themeStyle: any = {
    dark: {
      bgColor: `${clsx({
        'bg-secondary-800': true,
      })}`,
    },
    light: {
      bgColor: `${clsx({
        'bg-base-white': true,
      })}`,
    },
  };

  const currentThemeStyle = themeStyle[theme];

  //alert open close status
  const [isOpen, setIsOpen] = useState(alertOpen);

  // change the alert state by alertOpen
  useEffect(() => {
    if (alertOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [alertOpen]);

  return (
    //containeer start here

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto container">
          <form
            className="flex min-h-full items-center justify-center"
            onSubmit={onSubmit}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full  max-w-md transform overflow-hidden rounded-xl transition-all bg-base-white dark:bg-secondary-800">
                <div className=" px-[16px] py-[20px] ">
                  {title && (
                    <p className="text-secondary-600 dark:text-[#FFFFFF] text-md-b text-center ">
                      {typeof title === 'string'
                        ? title
                        : '“Go My Go - Operator” Would Like to Send you Notifications'}
                    </p>
                  )}
                  {description && (
                    <p className="text-secondary-600 dark:text-[#FFFFFF] text-sm-r text-center">
                      {typeof description === 'string'
                        ? description
                        : 'Notifications may include alerts, sounds, and icon badges.These can be configured in Settings.'}
                    </p>
                  )}
                </div>
                {actions === 'vertical-3' && (
                  <>
                    <div className=" w-full cursor-pointer" onClick={onClick}>
                      <hr className="border-b border-secondary-200" />
                      <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                        Allow
                      </p>
                    </div>
                    <div className=" w-full cursor-pointer" onClick={onClick}>
                      <hr className="border-b border-secondary-200" />
                      <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                        Don't Allow
                      </p>
                    </div>
                    <div className=" w-full cursor-pointer" onClick={onClick}>
                      <hr className="border-b border-secondary-200" />
                      <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                        Cancel
                      </p>
                    </div>
                  </>
                )}

                {actions === 'vertical-2' && (
                  <>
                    <div className=" w-full cursor-pointer" onClick={onClick}>
                      <hr className="border-b border-secondary-200" />
                      <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                        Allow
                      </p>
                    </div>
                    <div className=" w-full cursor-pointer" onClick={onClick}>
                      <hr className="border-b border-secondary-200" />
                      <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                        Don't Allow
                      </p>
                    </div>
                  </>
                )}
                {actions === 'vertical-1' && (
                  <div className=" w-full cursor-pointer" onClick={onClick}>
                    <hr className="border-b border-secondary-200" />
                    <p className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center">
                      Allow
                    </p>
                  </div>
                )}

                {actions === 'horizontal-2' && (
                  <div className="flex justify-center items-center">
                    <div className=" w-full ">
                      <hr className="border-b border-secondary-200" />
                      <p
                        className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center cursor-pointer "
                        onClick={onClick}
                      >
                        Don't Allow
                      </p>
                    </div>
                    <hr className="h-[50px] border-l-2 border-secondary-200" />

                    <div className=" w-full">
                      <hr className="border-b border-secondary-200" />
                      <p
                        className="text-primary-600 text-lg-sb mt-[10.5px] mb-[11px] text-center cursor-pointer"
                        onClick={onClick}
                      >
                        Allow
                      </p>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </form>
        </div>
      </Dialog>
    </Transition>

    // <div className="text-center">

    //   <p className="text-sm-r text-secondary-600">
    //     {text}
    //     <span
    //       className="text-primary-700 text-sm-sb cursor-pointer"
    //       onClick={onClick}
    //     >
    //       {linkText}
    //     </span>
    //   </p>
    // </div>
  );
};

export default memo(AlertIOS);

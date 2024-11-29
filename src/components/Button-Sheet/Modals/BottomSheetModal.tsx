'use client';
import 'react-spring-bottom-sheet/dist/style.css';

import React, { memo, useEffect, useState } from 'react';

import clsx from 'clsx';
import { BottomSheet } from 'react-spring-bottom-sheet';

import BottomSheetHeader, {
  BottomSheetHeaderProps,
} from '../Bottom-Sheet-Header/BottomSheetHeader';

// import Modal from 'react-modal';
export type BottomSheetModal = {
  onClick?: () => void;
  onClose?: () => void;
  onDismiss?: () => void;
  breakpoint?: '';
  modalShow?: true | false;
  children?: string | JSX.Element | JSX.Element[];
  bottomSheetModalType?: 'stackedLeftAlign';
  bottomSheetHeight?: number;
  className?: string;
};
export type BottomSheetModalProps = BottomSheetModal & BottomSheetHeaderProps;
export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  type,
  breakpoint,
  modalShow = true,
  title,
  subtitle,
  closeButton,
  paddingBottom,
  showSubtitle,
  showTitle,
  featuredIcon,
  children,
  divider,
  onClose,
  bottomSheetModalType = 'stackedLeftAlign',
  bottomSheetHeight = 50,
  className,
}) => {
  const [mobileModalOpen, setMobileModalOpen] = useState(modalShow);
  const [bottomSheetMaxHeight, setBottomSheetMaxHeight] = useState<number>(0.8);
  // const [desktopModalOpen, setDesktopModalOpen] = useState(modalShow);
  // screen viewport
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  //checking the viewportWidth and setting viewport width
  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewportWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  //set a max height for button sheet header
  useEffect(() => {
    if (bottomSheetHeight) {
      if (bottomSheetHeight > 100) {
        setBottomSheetMaxHeight(1);
      } else if (bottomSheetHeight < 1) {
        setBottomSheetMaxHeight(0.1);
      } else {
        setBottomSheetMaxHeight(bottomSheetHeight / 100);
      }
    }
  }, [bottomSheetHeight]);
  //Toggle the open close model
  useEffect(() => {
    setMobileModalOpen(modalShow);
    // setDesktopModalOpen(modalShow);
  }, [modalShow]);

  //max height define
  const allStyle: any = {
    stackedLeftAlign: {
      container: `${clsx({})}`,
    },
  };
  //handle click header click onDissmiss
  function bottomSheetDismiss() {
    setMobileModalOpen(false);
    if (onClose) {
      onClose();
    }
  }
  //handle click header click onDissmiss
  function bottomSheetHeaderClick() {
    setMobileModalOpen(false);
    if (onClose) {
      onClose();
    }
  }

  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  return (
    <>
      {/* mobile break point style */}
      <BottomSheet
        // open={viewportWidth >= 768 ? false : mobileModalOpen}
        open={mobileModalOpen}
        onDismiss={() => {
          bottomSheetDismiss();
        }}
        header={
          <div>
            <div className='bottom-sheet-header'>
              <BottomSheetHeader
                onClick={() => {
                  bottomSheetHeaderClick();
                }}
                title={title}
                subtitle={subtitle}
                closeButton={closeButton}
                paddingBottom={paddingBottom}
                divider={divider}
                showSubtitle={showSubtitle}
                showTitle={showTitle}
                featuredIcon={featuredIcon}
                type={type}
              />
            </div>
          </div>
        }
        blocking={true}
        snapPoints={({ maxHeight }) => [
          // maxHeight / 2,
          maxHeight * bottomSheetMaxHeight,
        ]}
        className={className}>
        {children}
      </BottomSheet>
      {/* desktop break point style  */}

      {/* {viewportWidth >= 768 && (
        <div className="">
          <button onClick={openModal}>Open Modal</button>
          <Modal
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      )} */}
    </>
  );
};
export default memo(BottomSheetModal);

// Note: Only Mobile view disgn is done  of bottomSheetModalType of bottomSheetModalType = 'stackedLeftAlign'

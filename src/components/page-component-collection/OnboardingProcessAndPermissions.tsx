"use client";

import React, { memo } from "react";

import image from "../../assets/images/Image-1.png";
import Button, {
  icon,
  iconLeading,
  iconTrailing,
  label,
  size,
  type,
} from "../Button-Collection/Button/Button";
import CircularButton, {
  onClick,
  progress,
} from "../Button-Collection/Circular-Button/CircularButton";
import PaginationDotGroup, {
  activeNumber,
  framed,
  noOfDots,
  PaginationGroupColor,
} from "../Carousel-Collection/Pagination-Dot-Group/PaginationDotGroup";
import HeaderSection, {
  alignment,
  showHeading,
  showSubHeading,
  showSupporting,
} from "../Header-Section-Collection/HeaderSection";

export type OnBoardingProcessAndPermissionsProps = {
  circularButtonOnClick?: onClick;
  skipClick?: () => void;
  imageSrc?: any;
  paginationColor?: PaginationGroupColor;
  footerButton?: "circularButtonWithPaginationDotGroup" | "Button";
  buttonSize?: size;
  buttonIcon?: icon;
  buttonIconLeading?: iconLeading;
  buttonLabel?: label;
  buttonType?: type;
  buttonIconTrailing?: iconTrailing;
  pageHeading?: showHeading;
  pageSubHeading?: showSubHeading;
  pageSupporting?: showSupporting;
  pageAlignment?: alignment;
  circularButtonProgress?: progress;
  PaginationActiveNumber?: activeNumber;
  PaginationNoOfDots?: noOfDots;
  PaginationFramed?: framed;
};

export const OnboardingProcessAndPermissions: React.FC<
  OnBoardingProcessAndPermissionsProps
> = ({
  circularButtonOnClick,
  skipClick,
  imageSrc,
  paginationColor,
  buttonSize,
  buttonIcon,
  buttonIconLeading,
  buttonLabel,
  buttonType,
  buttonIconTrailing,
  pageHeading = true,
  pageSubHeading = true,
  pageSupporting = true,
  pageAlignment = "center",
  circularButtonProgress = 20,
  PaginationActiveNumber,
  PaginationNoOfDots,
  PaginationFramed = false,
  footerButton = "circularButtonWithPaginationDotGroup",
}) => {
  return (
    <div className=" pt-[50px] pb-[16px] pl-[10px] pr-[8px] flex flex-col justify-between min-h-screen items-center border">
      <div className="w-[100%]">
        <div className=" mb-[66px] flex justify-end ">
          <div className="">
            <Button
              size="sm"
              hierarchy="linkGray"
              icon="default"
              destructive={false}
              iconLeading={false}
              iconTrailing={false}
              label="skip"
              onClick={skipClick}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mb-[64px] ">
          {/* <div className="">{image['image-1']}</div> */}
          <img
            src={imageSrc ? imageSrc : image}
            alt=""
            height={200}
            width={200}
          />
        </div>
        <div className="mb-[84px] ">
          <HeaderSection
            alignment={pageAlignment}
            actions={false}
            color="default"
            breakPoint="mobile"
            showHeading={pageHeading}
            showSubHeading={pageSubHeading}
            showSupporting={pageSupporting}
          />
        </div>
      </div>
      <div className="">
        {footerButton === "circularButtonWithPaginationDotGroup" ? (
          <>
            {" "}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-[20px]">
                <PaginationDotGroup
                  size="md"
                  style="line"
                  color={paginationColor}
                  framed={PaginationFramed}
                  noOfDots={PaginationNoOfDots}
                  activeNumber={PaginationActiveNumber}
                />
              </div>
              <div>
                <CircularButton
                  size="md"
                  progress={circularButtonProgress}
                  type="filled"
                  onClick={circularButtonOnClick}
                />
              </div>
            </div>
          </>
        ) : (
          <div>
            <Button
              size={buttonSize}
              icon={buttonIcon}
              iconLeading={buttonIconLeading}
              label={buttonLabel}
              type={buttonType}
              iconTrailing={buttonIconTrailing}
              hierarchy="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(OnboardingProcessAndPermissions);

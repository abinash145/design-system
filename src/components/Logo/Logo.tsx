"use client";

import React from "react";

import mainlogo from "../../assets/images/dummy images/DummyImages";

type LogoProps = {
  imageSrc: any;
  logoText?: string;
};

export const Logo = ({ imageSrc, logoText }: LogoProps) => {
  return (
    <>
      {logoText ? (
        <div className="flex gap-[3px] items-center">
          <div className="w-50px">
            <img
              className="w-full"
              src={imageSrc ? imageSrc : mainlogo}
              alt=""
            />
          </div>

          <div>
            <p className="text-xl-sb text-black dark:text-[#FFFFFF] ">
              {logoText}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <img
            className="w-[100%!important] h-auto"
            src={imageSrc ? imageSrc : mainlogo}
            alt=""
          />
        </div>
      )}
      <></>
    </>
  );
};

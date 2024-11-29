"use client";
import React, { memo, useEffect, useState } from "react";

import clsx from "clsx";

import FeaturedIcons from "../../Misc-Icon/Feature-Icons/FeaturedIcons";
import CheckBase from "../Checkbox-Base/CheckBase";

export type CheckboxGroupProps = {
  selected?: true | false;
  type?: "iconSimple";
  breakpoint?: "mobile" | "desktop";
  title?: true | false | string;
  subtitle?: true | false | string;
  description?: true | false | string;
  disabled?: true | false;
  size?: "sm" | "md";
  hideCheckbox?: true | false;
  selfToggle?: boolean;
  onClick?: () => void;
  image?: any;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  selected = false,
  type = "iconSimple",
  breakpoint = "mobile",
  title = true,
  subtitle = true,
  description = true,
  disabled = false,
  hideCheckbox = false,
  selfToggle = true,
  image,
  onClick = () => {
    return;
  },
  ...props
}) => {
  const [select, setSelect] = useState<boolean | undefined>();
  useEffect(() => {
    if (selected) {
      setSelect(selected);
    } else {
      setSelect(false);
    }
  }, [selected]);
  const allStyle: any = {
    iconSimple: {
      container: `${clsx({
        "bg-primary-50 border-primary-600": select && disabled === false,
        "bg-secondary-50 border-secondary-200": disabled && select === false,
        "border-2": disabled && select,
      })}`,
      title: `${clsx({
        "text-primary-800": select && disabled === false,
        "text-secondary-700 ": disabled || select === false,
      })}`,
      subtitle: `${clsx({
        "text-primary-700": select && disabled === false,
        "text-secondary-600 ": disabled || select === false,
      })}`,
      description: `${clsx({
        "text-primary-700": select && disabled === false,
        "text-secondary-600 ": disabled || select === false,
      })}`,
    },
  };
  const currentStyle = allStyle[type];
  return (
    //cntainer start herer
    <div onClick={onClick}>
      <div
        className={`${[
          "p-4  relative w-full border rounded-lg flex  justify-between items-center group hover:border-primary-300 focus:shadow-primary100 cursor-pointer",
          `${currentStyle.container}`,
          ``,
        ].join(" ")}`}
        onClick={() => {
          if (selfToggle) {
            setSelect((prev) => {
              if (disabled) {
                return prev;
              } else {
                return !prev;
              }
            });
          }
        }}
      >
        <div className="flex items-center gap-4">
          <div className="">
            {image ? (
              <img src={image} alt={`${title}`} height={32} width={32} />
            ) : (
              <FeaturedIcons
                size="sm"
                iconSwap="layers-two-01"
                // theme="LightCircleOutline"
                theme="lightCircleOutline"
                color={disabled ? "gray" : "primary"}
              />
            )}
          </div>
          <div>
            {(subtitle || title) && (
              <p
                className={`${["text-sm-r ", `${currentStyle.subtitle}`].join(
                  " "
                )}`}
              >
                {title && (
                  <span
                    className={`${["text-sm-m ", `${currentStyle.title}`].join(
                      " "
                    )}`}
                  >
                    {typeof title === "string" ? title : "Basic plan"}{" "}
                  </span>
                )}
                {typeof subtitle === "string" ? subtitle : "$10/month"}
              </p>
            )}
            {description && (
              <p
                className={`${["text-sm-r", `${currentStyle.description}`].join(
                  " "
                )}`}
              >
                {typeof description === "string" ? description : ""}
              </p>
            )}
          </div>
        </div>
        <div className={`${hideCheckbox ? "hidden" : ""}`}>
          <CheckBase checked={select} selfToggle={false} disabled={disabled} />
        </div>
      </div>
    </div>
  );
};
export default memo(CheckboxGroup);

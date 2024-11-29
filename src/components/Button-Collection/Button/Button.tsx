"use client";

import React from "react";

import clsx from "clsx";

import Icon from "../../Icon/Icon";

export type hierarchy =
  | "primary"
  | "secondaryGray"
  | "secondaryColor"
  | "tertiaryGray"
  | "tertiaryColor"
  | "linkGray"
  | "linkColor";
export type size = "sm" | "md" | "lg" | "xl" | "2xl";
export type label = string;
export type type = "button" | "submit" | "reset";
export type icon = "default" | "dotLeading" | "only" | string;
export type iconLeading = true | false;
export type iconLeadingSwap = string;
export type iconTrailingSwap = string;
export type iconTrailing = true | false;
export type destructive = true | false;
export type disable = true | false;

export type ButtonProps = {
  size?: size;
  label?: label;
  onClick?: () => void;
  disable?: disable;
  type?: type;
  hierarchy?: hierarchy;
  icon?: icon;
  iconLeading?: iconLeading;
  iconLeadingSwap?: iconLeadingSwap;
  iconTrailing?: iconTrailing;
  iconTrailingSwap?: iconTrailingSwap;
  destructive?: destructive;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  size = "md",
  label = "button",
  onClick,
  disable = false,
  hierarchy = "primary",
  icon = "default",
  destructive = false,
  iconLeadingSwap,
  iconTrailingSwap,
  iconLeading = true,
  iconTrailing = true,
  type,
  loading = false,
  ...props
}) => {
  //button padding style
  const padding = {
    sm: `${icon === "only" ? "p-2" : "py-2 px-[14px]"}`,
    md: `${icon === "only" ? "p-[10px]" : "py-[10px] px-4"}`,
    lg: `${icon === "only" ? "p-[10px]" : "py-[10px] px-[18px]"}`,
    xl: `${icon === "only" ? "p-3" : "py-3 px-5"}`,
    "2xl": `${icon === "only" ? "p-4" : "py-4 px-7"}`,
  };
  //button label text size by size
  const fontSize = {
    sm: `text-sm-sb`,
    md: `text-sm-sb`,
    lg: `text-md-sb`,
    xl: `text-md-sb`,
    "2xl": `text-lg-sb`,
  };
  //all hierarchy style
  const style: any = {
    primary: {
      button: `border shadow-xs ${clsx({
        "hover:border-error-700 hover:bg-error-700  focusPrimaryWithDestructive focus:bg-error-600":
          destructive === true && disable === false && loading === false,

        "bg-error-200 border-error-200":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-error-600 border-error-600":
          destructive === true && disable === false && loading === false,

        "hover:border-primary-100 hover:bg-primary-700  focusPrimaryWithoutDestructive focus:bg-primary-600":
          destructive === false && disable === false && loading === false,

        "bg-secondary-200 border-secondary-200":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "bg-primary-600 border-primary-600":
          destructive === false && disable === false && loading === false,
      })}`,

      label: `${clsx({
        "text-base-white":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && disable === false && loading === false) ||
          (destructive === false && disable === false && loading === false) ||
          (destructive === true && loading === true),
        "text-secondary-400":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dot: `bg-base-white rounded-[50%] ${clsx({
        "bg-base-white":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && disable === false && loading === false) ||
          (destructive === false && disable === false && loading === false) ||
          (destructive === true && loading === true),
        "bg-secondary-400":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: ` ${clsx({
        "text-base-white":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && disable === false && loading === false) ||
          (destructive === false && disable === false && loading === false) ||
          (destructive === true && loading === true),
        "text-secondary-400":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,
    },
    secondaryGray: {
      button: `border shadow-xs ${clsx({
        "hover:border-error-300 hover:bg-error-50  focusPrimaryWithDestructive":
          destructive === true && disable === false && loading === false,
        "bg-base-white border-error-200":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-base-white border-error-300":
          destructive === true && disable === false && loading === false,
        "hover:bg-secondary-50  focusSecondaryGrayWithoutDestructive":
          destructive === false && disable === false && loading === false,
        "bg-base-white border-secondary-200":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "bg-base-white border-secondary-300":
          destructive === false && disable === false && loading === false,
      })}`,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-700":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false && loading === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-700":
          destructive === false && disable === false && loading === false,
      })}`,
    },
    secondaryColor: {
      button: `border shadow-xs ${clsx({
        "hover:border-error-300 hover:bg-error-50 focusPrimaryWithDestructive":
          destructive === true && disable === false && loading === false,
        "bg-base-white border-error-200":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-base-white border-error-300":
          destructive === true && disable === false && loading === false,
        "hover:bg-primary-100 focusSecondaryGrayWithoutDestructive":
          destructive === false && disable === false && loading === false,
        "bg-base-white border-secondary-200":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "bg-primary-50 border-primary-50":
          destructive === false && disable === false && loading === false,
      })}`,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-primary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-primary-700":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLable: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-700":
          destructive === false && disable === false && loading === false,
      })}`,
    },
    tertiaryGray: {
      button: `${clsx({
        "hover:bg-error-50":
          destructive === true && disable === false && loading === false,
        "hover:bg-secondary-50":
          destructive === false && disable === false && loading === false,
      })}`,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-700":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-600":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-700":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-600":
          destructive === false && disable === false && loading === false,
      })}`,
    },
    tertiaryColor: {
      button: `${clsx({
        "hover:bg-error-50":
          destructive === true && disable === false && loading === false,
        "hover:bg-primary-50":
          destructive === false && disable === false && loading === false,
      })}`,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-primary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-primary-700":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-primary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-primary-700":
          destructive === false && disable === false && loading === false,
      })}`,
    },
    linkGray: {
      button: `${clsx({})}` && loading === false,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-700":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-600":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-secondary-700":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-secondary-600":
          destructive === false && disable === false && loading === false,
      })}`,
    },
    linkColor: {
      button: `${clsx({})}` && loading === false,

      label: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-primary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-primary-700":
          destructive === false && disable === false && loading === false,
      })}`,

      dot: `rounded-[50%] ${clsx({
        "bg-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "bg-success-500":
          (destructive === true && disable === false) ||
          (destructive === false && disable === false && loading === false),
        "bg-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
      })}`,

      dotLabel: `${clsx({
        "group-hover:text-error-800":
          destructive === true && disable === false && loading === false,
        "text-error-300":
          (destructive === true && disable === true && loading === false) ||
          (destructive === true && loading === true),
        "text-error-700":
          destructive === true && disable === false && loading === false,
        "group-hover:text-primary-800":
          destructive === false && disable === false && loading === false,
        "text-secondary-300":
          (destructive === false && disable === true && loading === false) ||
          (destructive === false && loading === true),
        "text-primary-700":
          destructive === false && disable === false && loading === false,
      })}`,
    },
  };
  //select the current used style by hierarchy
  const currentStyle = style[hierarchy];
  //dymmy classJoint
  // const classJoint = ['' , `` , ``].join(' ');

  return (
    <button
      className={[
        "group w-full flex justify-center items-center duration-500 transition-all rounded-lg cursor-pointer svgContainer outline-none",
        `${
          hierarchy === "linkGray" || hierarchy === "linkColor"
            ? ""
            : padding[size]
        }`,
        `${currentStyle.button}`,
        ``,
      ].join(" ")}
      onClick={onClick}
      disabled={loading ? true : disable}
      type={type ? type : "submit"}
    >
      <div className={`flex items-center gap-2  ${currentStyle.label}`}>
        {/* render when icon is dotLeading */}
        {icon === "dotLeading" ? (
          <>
            <span
              className={["w-[10px] h-[10px]", `${currentStyle.dot}`].join(" ")}
            ></span>
            <p
              className={[
                `${currentStyle.dotLabel} flex items-center`,
                `${fontSize[size]}`,
              ].join(" ")}
            >
              {loading ? (
                <span className="flex gap-1">
                  <span
                    className={` flex p-[1.5px] ${
                      size === "2xl" ? "w-6 h-6" : "w-5 h-5"
                    }`}
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-full h-full text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                        className={`${currentStyle.dotLabel}`}
                      ></path>
                    </svg>
                  </span>
                  Loading...
                </span>
              ) : (
                <span>{label}</span>
              )}
            </p>
          </>
        ) : (
          <>
            {/* render when icon is only and doesn't render if hierarchy is linkGray or linkColor */}
            {icon === "only" &&
            hierarchy !== "linkGray" &&
            hierarchy !== "linkColor" ? (
              <div className={` ${size === "2xl" ? "w-6 h-6" : "w-5 h-5"}`}>
                {iconLeadingSwap ? (
                  <Icon name={iconLeadingSwap} />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g clipPath="url(#clip0_3468_418654)">
                      <path
                        d="M10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6024 1.66663 10 1.66663C5.39763 1.66663 1.66667 5.39759 1.66667 9.99996C1.66667 14.6023 5.39763 18.3333 10 18.3333Z"
                        stroke="#475467"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3468_418654">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>
            ) : (
              <>
                {/* render when icon is default or icon doesn't match with option */}
                {iconLeading && (
                  <div className={` ${size === "2xl" ? "w-6 h-6" : "w-5 h-5"}`}>
                    {iconLeadingSwap ? (
                      <Icon name={iconLeadingSwap} />
                    ) : (
                      <div className="">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          <g clipPath="url(#clip0_3468_418654)">
                            <path
                              d="M10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6024 1.66663 10 1.66663C5.39763 1.66663 1.66667 5.39759 1.66667 9.99996C1.66667 14.6023 5.39763 18.3333 10 18.3333Z"
                              stroke="#475467"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3468_418654">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    )}
                  </div>
                )}
                <p
                  className={[
                    "flex items-center",
                    currentStyle.label,
                    ` ${fontSize[size]}`,
                  ].join(" ")}
                >
                  {loading ? (
                    <span className="flex gap-1">
                      <span
                        className={` flex p-[1.5px] ${
                          size === "2xl" ? "w-6 h-6" : "w-5 h-5"
                        }`}
                      >
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-full h-full text-gray-200 animate-spin dark:text-gray-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                            className={`${currentStyle.label}`}
                          ></path>
                        </svg>
                      </span>
                      Loading...
                    </span>
                  ) : (
                    <>{label}</>
                  )}
                </p>
                {iconTrailing && (
                  <div className={`${size === "2xl" ? "w-6 h-6" : "w-5 h-5"}`}>
                    {iconTrailingSwap ? (
                      <Icon name={iconTrailingSwap} />
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <g clipPath="url(#clip0_3468_418654)">
                          <path
                            d="M10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6024 1.66663 10 1.66663C5.39763 1.66663 1.66667 5.39759 1.66667 9.99996C1.66667 14.6023 5.39763 18.3333 10 18.3333Z"
                            stroke="#475467"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3468_418654">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </button>
  );
};
export default Button;

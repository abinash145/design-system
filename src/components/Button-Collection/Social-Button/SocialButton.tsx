'use client';

import React from 'react';

import clsx from 'clsx';

import {
  AppleBlackSvg,
  AppleSecondarySvg,
  AppleWhiteSvg,
  DribbleSecondarySvg,
  DribbleSvg,
  DribbleWhiteSvg,
  FacebookSecondSvg,
  FacebookSvg,
  FacebookThirdSvg,
  FigmaSecondarySvg,
  FigmaSvg,
  GoogleSecondarySvg,
  GoogleSvg,
  TwitterBlueSvg,
  TwitterSecondarySvg,
  TwitterWhiteSvg,
} from '../../../assets/icons/Social Icon/socialIcon';

export type SocialButtonProps = {
  onClick?: () => void;
  social?: 'google' | 'facebook' | 'apple' | 'twitter' | 'figma' | 'dribble';
  supportingText?: true | false;
  theme?: 'brand' | 'color' | 'colorWithBrand';
  label?: string;
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  social = 'google',
  supportingText = true,
  theme = 'brand',
  label,
  onClick,
  ...props
}) => {
  //label text by social
  const labelText = {
    google: 'Sign in with Google',
    facebook: 'Sign in with Facebook',
    apple: 'Sign in with Apple',
    twitter: 'Sign in with Twitter',
    figma: 'Sign in with Figma',
    dribble: 'Sign in with Dribbble',
  };
  //svg icon by Social amd theme
  const buttonSvg = {
    google: theme === 'color' ? <GoogleSecondarySvg /> : <GoogleSvg />,
    facebook: (theme === 'brand' && <FacebookSvg />) ||
      (theme === 'color' && <FacebookThirdSvg />) || <FacebookSecondSvg />,
    apple: (theme === 'brand' && <AppleWhiteSvg />) ||
      (theme === 'color' && <AppleBlackSvg />) || <AppleSecondarySvg />,
    twitter: (theme === 'brand' && <TwitterWhiteSvg />) ||
      (theme === 'color' && <TwitterSecondarySvg />) || <TwitterBlueSvg />,
    figma: (theme === 'brand' && <FigmaSvg />) ||
      (theme === 'color' && <FigmaSecondarySvg />) || <FigmaSvg />,
    dribble: (theme === 'brand' && <DribbleWhiteSvg />) ||
      (theme === 'color' && <DribbleSecondarySvg />) || <DribbleSvg />,
  };

  //all social style
  const style = {
    google: {
      button: `${clsx(
        'border shadow-xs bg-base-white border border-secondary-300 shadow-xs hover:bg-secondary-50'
      )}`,
      label: `${clsx('text-secondary-700')}`,
    },

    facebook: {
      button: `border shadow-xs ${clsx({
        'bg-[#1877F2] hover:bg-[#0C63D4]': (theme === 'brand') === true,
        ' border-secondary-300 shadow-xs  hover:bg-secondary-50 bg-base-white':
          (theme === 'brand') === false,
      })}`,
      label: `${clsx({
        'text-base-white': (theme === 'brand') === true,
        'text-secondary-700': (theme === 'brand') === false,
      })}`,
    },
    apple: {
      button: `${clsx({
        'bg-base-black': (theme === 'brand') === true,
        'border-secondary-300 shadow-xs  hover:bg-secondary-50 bg-base-white':
          (theme === 'brand') === false,
      })}`,
      label: `${clsx({
        'text-base-white': (theme === 'brand') === true,
        'text-secondary-700': (theme === 'brand') === false,
      })}`,
    },

    twitter: {
      button: `border shadow-xs ${clsx({
        'bg-[#1DA1F2] hover:bg-[#0C8BD9]': (theme === 'brand') === true,
        ' border-secondary-300 shadow-xs  hover:bg-secondary-50 bg-base-white':
          (theme === 'brand') === false,
      })}`,
      label: `${clsx({
        'text-base-white': (theme === 'brand') === true,
        'text-secondary-700': (theme === 'brand') === false,
      })}`,
    },

    figma: {
      button: `border shadow-xs ${clsx({
        'bg-base-black': (theme === 'brand') === true,
        ' border-secondary-300 shadow-xs  hover:bg-secondary-50 bg-base-white':
          (theme === 'brand') === false,
      })}`,
      label: `${clsx({
        'text-base-white': (theme === 'brand') === true,
        'text-secondary-700': (theme === 'brand') === false,
      })}`,
    },

    dribble: {
      button: `border shadow-xs ${clsx({
        'bg-[#EA4C89] hover:bg-[#E62872]': (theme === 'brand') === true,
        ' border-secondary-300 shadow-xs  hover:bg-secondary-50 bg-base-white':
          (theme === 'brand') === false,
      })}`,
      label: `${clsx({
        'text-base-white': (theme === 'brand') === true,
        'text-secondary-700': (theme === 'brand') === false,
      })}`,
    },
  };
  //select the current used style by social
  const currentStyle = style[social];

  return (
    <button
      className={`${[
        'flex gap-3 items-center justify-center rounded-lg focusWithSecondary100 w-full',
        `${currentStyle.button}`,
        `${supportingText ? 'px-4 py-3' : 'p-3'}`,
        ``,
      ].join(' ')}`}
      onClick={onClick}
      {...props}>
      <div className='w-6 h-6 [&_svg]:w-full '>{buttonSvg[social]}</div>
      {supportingText && (
        <div>
          <p
            className={`${['text-md-sb', `${currentStyle.label}`, ``].join(
              ' '
            )}`}>
            {label ? label : labelText[social]}
          </p>
        </div>
      )}
    </button>
  );
};
export default SocialButton;

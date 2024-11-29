'use client';

import React, { memo } from 'react';

import clsx from 'clsx';
import OTPInput from 'react-otp-input';

import { InputFieldBaseProps } from '../InputFieldBase/InputFieldBase';

export type VerificationCodeInput = {
  verificationSize?: 'sm' | 'md';
  digit?: 4 | 6;
  label?: string | true | false;
  destructive?: true | false;
  hintText?: string | true | false;
  field?: any;
  onChange?: () => void;
  value?: any;
};
export type VerificationCodeInputProps = VerificationCodeInput &
  InputFieldBaseProps;
export const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  digit = 6,
  label = true,
  hintText = true,
  size = 'xs',
  disabled = false,
  placeholder,
  renderSeparator,
  field,
  value = '',
  destructive = false,
  onChange = () => console.log('changing'),
  ...props
}) => {
  //all style from inpput Base
  const allStyle: any = {
    input: `${clsx({
      'w-[50px!important] max-w-[100%] h-[50px] text-md-m [&:not(:last-child)]:mr-[6px] ':
        size === 'xs',
      'w-[64px!important] max-w-[100%] h-[64px] text-lg-m [&:not(:last-child)]:mr-[8px] ':
        size === 'sm',
      'w-[80px!important] max-w-[100%] h-[80px] text-lg-m [&:not(:last-child)]:mr-[10px]':
        size === 'md',
      'w-[96px!important] max-w-[100%] h-[96px] text-xl-m [&:not(:last-child)]:mr-[12px]':
        size === 'lg',
      ' text-secondary-200 border-secondary-300': disabled,
      ' text-primary-600 border-secondary-300  focus:shadow-primary100 outline-none focus:placeholder-primary-600 focus:border-primary-600 valid:border-primary-600':
        disabled === false && destructive === false,

      ' text-error-600 border-error-300  focus:shadow-error100 outline-none focus:placeholder-error-600 focus:border-error-600':
        destructive && disabled === false,
    })}`,
    hintText: `${clsx({
      ' text-secondary-600 ': disabled === false && destructive === false,
      ' text-secondary-200 border-secondary-300': disabled,
      ' text-error-200 border-error-300': destructive,
    })}`,
  };
  return (
    <div>
      {label && (
        <p className='text-secondary-700 text-sm-m mb-[6px]'>
          {typeof label === 'string' ? label : 'Secure code'}
        </p>
      )}
      <OTPInput
        numInputs={6}
        value={value}
        shouldAutoFocus={true}
        onChange={onChange}
        inputType='number'
        renderInput={(props) => (
          <>
            <input
              inputMode='numeric'
              {...props}
              maxLength={1}
              type='number'
              disabled={disabled}
              placeholder={placeholder ? placeholder : ''}
              required
              className={`${[
                'rounded-lg border shadow-xs bg-base-white  placeholder-secondary-300   text-center maxMobile:max-w-[40px] maxMobile:max-h-[40px]',
                `${allStyle.input}`,
              ].join(' ')}`}
            />
            <span className='[&:nth-child(6)]:block hidden mr-[6px] text-secondary-300'>
              -
            </span>
          </>
        )}
      />
      {/* <OTPInput
        numInputs={6}
        value={otp}
        shouldAutoFocus={true}
        onChange={setOtp}
        inputType="number"
        // inputProps={{ autoFocus: true }}

        renderInput={(props) =><InputFieldBase
            size="xs"
            {...props}
            // field={field}
            placeholder="-"
            renderSeparator={
              <span className="[&:nth-child(6)]:block hidden mr-[6px] text-secondary-300">
                -
              </span>
            }
          />}
      /> */}
      {hintText && (
        <p
          className={`${['text-sm-r mt-[6px]', `${allStyle.hintText}`].join(
            ' '
          )}`}>
          {typeof hintText === 'string'
            ? hintText
            : 'This is a hint text to help user.'}
        </p>
      )}
    </div>
  );
};

export default memo(VerificationCodeInput);

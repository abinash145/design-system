'use client';
import React, { memo, useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';
import Select, { components, ControlProps } from 'react-select';
//@ts-ignore
import Flag from 'react-world-flags';

import { COUNTRIES } from '../../../assets/handler/countries';
import Icon from '../../Icon/Icon';

export type InputFieldProps = {
  onClick?: () => void;
  size?: 'sm' | 'md';
  type?:
    | 'default'
    | 'iconLeading'
    | 'leadingDropdown'
    | 'trailingDropdowm'
    | 'leadingText'
    | 'paymentInput'
    | 'tags'
    | 'trailingButton'
    | 'phoneCountryWithFlag';
  destructive?: true | false;
  state?: '';
  label?: true | false | string;
  hintText?: true | false | string;
  helpIcon?: true | false | string;
  toolTip?: true | false | string;
  iconSwap?: string;
  disabled?: true | false;
  inputType?: 'text' | 'password' | 'email' | 'number';
  inputDefaultValue?: string;
  placeholder?: string;
  hintClick?: () => void;
  onChange?: any;
  onKeyDown?: any;
  field?: any;
};

interface CountryOption {
  label: string;
  value: string;
}
export const InputField: React.FC<InputFieldProps> = ({
  size = 'sm',
  iconSwap,
  disabled = false,
  type = 'default',
  destructive = false,
  helpIcon = false,
  hintText = false,
  label = false,
  toolTip = false,
  inputType,
  hintClick,
  placeholder,
  field,
  inputDefaultValue = '',
  onChange,
  ...props
}) => {
  //inputDisabled is disable or not
  const [inputDisabled, setInputDisabled] = useState<boolean>(disabled);
  const [countryCode, setCountryCode] = useState<CountryOption>({
    label: '+977',
    value: '+977',
  });
  //filter country code
  const selectedCountryCode = useMemo(
    () =>
      COUNTRIES.filter(
        (country: any) => country.prefix === countryCode.value
      )[0].iso,
    [countryCode]
  );
  //Tuggle the disable state if the disabled props change
  useEffect(() => {
    setInputDisabled(disabled);
  }, [disabled]);
  const style: any = {
    default: {
      inputContainer: `${clsx({
        'h-11 py-[10px] px-3 ': (size === 'sm') === true,
        'h-[50px] py-[13px] px-[14px]': (size === 'sm') === false,
        'border-error-300 focus-within:shadow-error100  focus-within:border-error-300':
          destructive === true,
        'border-secondary-300 focus-within:shadow-primary100  focus-within:border-primary-300 ':
          destructive === false,
      })}`,
    },
    iconLeading: {
      inputContainer: `pl-10 ${clsx({
        'h-11 py-[10px] px-3': (size === 'sm') === true,
        'h-[50px] py-[13px] px-[14px]': (size === 'sm') === false,
        'border-error-300 focus-within:shadow-error100  focus-within:border-error-300':
          destructive === true,
        'border-secondary-300 focus-within:shadow-primary100  focus-within:border-primary-300 ':
          destructive === false,
      })}`,
    },
    phoneCountryWithFlag: {
      mainContainer: `${clsx({
        'h-11 ': (size === 'sm') === true,
        'h-[50px]': (size === 'sm') === false,
        'border-error-300 focus-within:shadow-error100  focus-within:border-error-300':
          destructive === true,
        'border-secondary-300 focus-within:shadow-primary100  focus-within:border-primary-300 ':
          destructive === false,
      })}`,
      inputContainer: `rounded-r-lg ${clsx({
        ' pr-3 pl-[9px]': (size === 'sm') === true,
        'pr-[14px] pl-[6px]': (size === 'sm') === false,
      })}`,
    },
  };
  const currentStyle = style[type];

  //Select Component Icons for react-select
  const reactSelectIcon = (
    <div className='rounded-[50%] overflow-hidden w-4 h-4 flex justify-center items-center'>
      <Flag height='100%' code={selectedCountryCode} />
    </div>
  );
  //Select Component Control Icons for react-select
  const Control = ({ children, ...props }: ControlProps<false>) => {
    // @ts-ignore
    const { reactSelectIcon, onEmojiClick } = props.selectProps;
    const style = { cursor: 'pointer' };

    return (
      <components.Control {...props}>
        <span onMouseDown={onEmojiClick} style={style}>
          {reactSelectIcon}
        </span>
        {children}
      </components.Control>
    );
  };

  return (
    <div className='w-full svgContainer'>
      {label && (
        <label
          htmlFor=''
          className='text-secondary-700 text-sm-m mb-[6px] block '>
          {typeof label === 'string' ? label : 'Email'}
        </label>
      )}

      {/* phoneCountryWithFlag render this*/}
      {type === 'phoneCountryWithFlag' ? (
        <div
          className={`${[
            'w-full flex items-center bg-base-white border  shadow-xs rounded-lg  relative ',

            `${currentStyle.mainContainer}`,
          ].join(' ')}`}>
          <div className='flex px-3 border-r border-r-secondary-300 shrink-0'>
            {/* <SvgFlag iso="NPL" /> */}
            <Select
              id={'country'}
              options={COUNTRIES.map((item: any) => ({
                label: item.prefix,
                value: item.prefix,
              }))}
              //@ts-ignore
              defaultValue={{ label: '+977', value: '+977' }}
              // placeholder={'Select country'}
              onChange={(selectedOption) => {
                //@ts-ignore
                setCountryCode(selectedOption);
              }}
              isDisabled={true}
              className='[&_.css-4xgw5l-IndicatorsContainer2]:hidden [&_.css-art2ul-ValueContainer2]:p-[initial] '
              name='emoji'
              reactSelectIcon={reactSelectIcon}
              components={{ Control }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  height: size === 'sm' ? 43 : 50,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  backgroundColor: 'transparent',
                  outlineWidth: 0,

                  border: state.isFocused ? 'none' : 'none',
                  // This line disable the blue border
                  boxShadow: state.isFocused ? 'none' : 'none',
                  '&:hover': {
                    border: state.isFocused ? 'none' : 'none',
                  },
                  // borderColor: errors.country
                  //   ? '#F22F46'
                  //   : state.isFocused
                  //   ? '#000'
                  //   : '#CED4DA',
                }),
                option: (baseStyles) => ({
                  ...baseStyles,
                  fontWeight: 600,
                  flexShrink: 0,
                  cursor: 'pointer',
                  color: '#3f4247',
                  width: 400,
                }),
                indicatorsContainer: (provided) => ({
                  ...provided,
                  display: 'none',
                }),
              }}
            />
          </div>

          {/* inputContainer start here */}
          <div
            className={`${[
              'w-full flex items-center bg-base-white gap-[9px] relative h-full ` ',
              `${inputDisabled && 'bg-secondary-50'}`,
              `${currentStyle.inputContainer}`,
            ].join(' ')}`}>
            <input
              type={inputType ? inputType : 'text'}
              placeholder={placeholder ? placeholder : 'Enter here'}
              className='flex-grow w-full max-w-full bg-transparent text-secondary-900 text-md-r focus-visible:outline-none placeholder-secondary-500'
              disabled={inputDisabled}
              // defaultValue={inputDefaultValue}
              onChange={onChange}
              {...props}
              {...field}
            />
            {/* help Icon Start */}
            {helpIcon && (
              <div
                className='w-4 absolute right=[10px] '
                data-tooltip-id='inputField-tooltip'
                data-tooltip-content={
                  typeof toolTip === 'string' ? toolTip : 'Hello world!'
                }
                data-tooltip-place='top'
                onClick={hintClick}>
                {typeof helpIcon === 'string' ? (
                  <Icon
                    name={helpIcon}
                    className={
                      destructive ? 'text-error-500' : 'text-secondary-600 '
                    }
                  />
                ) : (
                  <Icon
                    name={destructive ? 'alert-circle' : 'help-circle'}
                    className={
                      destructive ? 'text-error-500' : 'text-secondary-400 '
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* inputContainer start here */}
          <div
            className={`${[
              'w-full flex items-center bg-base-white border  shadow-xs rounded-lg  gap-[9px] relative ',
              `${inputDisabled && 'bg-secondary-50'}`,
              `${currentStyle.inputContainer}`,
            ].join(' ')}`}>
            {/* icon Leading  type start here */}
            {type === 'iconLeading' && (
              <div className='w-5 absolute top-[50%] translate-y-[-50%] left-3 '>
                <Icon
                  name={iconSwap ? iconSwap : 'mail-01'}
                  className={
                    destructive ? 'text-error-500' : 'text-secondary-600 '
                  }
                />
              </div>
            )}

            <input
              type={inputType ? inputType : 'text'}
              placeholder={placeholder ? placeholder : 'Enter here'}
              className='flex-grow max-w-full bg-transparent text-secondary-900 text-md-r focus-visible:outline-none placeholder-secondary-500 '
              disabled={inputDisabled}
              // defaultValue={inputDefaultValue}
              onChange={onChange}
              {...props}
              {...field}
            />
            {/* help Icon Start */}
            {helpIcon && (
              <div
                className='w-4 absolute right-[10px]'
                data-tooltip-id='inputField-tooltip'
                data-tooltip-content={
                  typeof toolTip === 'string' ? toolTip : 'Hello world!'
                }
                data-tooltip-place='top'
                onClick={hintClick}>
                {typeof helpIcon === 'string' ? (
                  <Icon
                    name={helpIcon}
                    className={
                      destructive ? 'text-error-500' : 'text-secondary-600 '
                    }
                  />
                ) : (
                  <Icon
                    name={destructive ? 'alert-circle' : 'help-circle'}
                    className={
                      destructive ? 'text-error-500' : 'text-secondary-600 '
                    }
                  />
                )}
              </div>
            )}
          </div>
        </>
      )}
      {hintText && (
        <div className='mt-[6px]'>
          <p
            className={`text-sm-r  ${
              destructive ? 'text-error-500' : 'text-secondary-600'
            }`}>
            {typeof hintText === 'string'
              ? hintText
              : ' This is a hint text to help user in placeholder state.'}
          </p>
        </div>
      )}
      {/* {toolTip && <Tooltip id="inputField-tooltip" className="darkTooltip" />} */}
    </div>
  );
};
export default memo(InputField);

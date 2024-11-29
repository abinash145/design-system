'use client';
import React, { Fragment, memo, useEffect, useState } from 'react';

import {
  CheckboxGroup,
  CheckboxGroupProps,
} from '../Checkbox-Group/CheckboxGroup';

type value = {
  value: string;
};
type checkboxValue = value & CheckboxGroupProps;
export type CheckboxGroupCollectionProps = {
  checkBoxArrayValue: Array<checkboxValue>;
};

export const CheckboxGroupCollection: React.FC<
  CheckboxGroupCollectionProps
> = ({ checkBoxArrayValue, ...props }) => {
  const [selectedValue, setSelectedValue] = useState('');
  useEffect(() => {
    if (checkBoxArrayValue) {
      checkBoxArrayValue.forEach((item) => {
        item.selected && setSelectedValue(item.value);
      });
    }
  }, [checkBoxArrayValue]);
  return (
    <Fragment key='1'>
      {checkBoxArrayValue ? (
        <>
          {checkBoxArrayValue.map(({ value, ...item }, index) => (
            <div
              // onClick={() => setSelectedValue(value)}
              key={value}
              className='[&:not(:last-child)]:mb-3 '>
              <CheckboxGroup
                {...item}
                selfToggle={false}
                selected={value === selectedValue ? true : false}
              />
            </div>
          ))}
        </>
      ) : (
        <CheckboxGroup {...props} selfToggle={false} />
      )}
    </Fragment>
  );
};
export default memo(CheckboxGroupCollection);

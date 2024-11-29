'use client';

import React, { memo } from 'react';

export interface LinkWithMessageProps {
  text?: string;
  linkText?: string;
  onClick?: () => void;
}

export const LinkWithMessage: React.FC<LinkWithMessageProps> = ({
  text = 'text',
  linkText = 'Enter link test',
  onClick,
}) => {
  return (
    <div className='text-center'>
      <p className='text-sm-r text-secondary-600'>
        {text}
        <button
          className='cursor-pointer text-primary-700 text-sm-sb'
          onClick={onClick}
          type='button'>
          {linkText}
        </button>
      </p>
    </div>
  );
};

export default memo(LinkWithMessage);

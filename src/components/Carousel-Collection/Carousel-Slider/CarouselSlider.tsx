'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { memo, useRef, useState } from 'react';

import clsx from 'clsx';
// @ts-ignore
import Slider from 'react-slick';

import CarouselArrow from '../Carousel-Arrow/CarouselArrow';
import {
  PaginationDotGroup,
  PaginationDotGroupProps,
} from '../Pagination-Dot-Group/PaginationDotGroup';

export type CarouselSlider = {
  onClick?: () => void;
  size?: 'md' | 'lg';
  theme?: 'primary';
  breakpoint?: 'desktop' | 'mobile';
  autoSlide?: boolean;
  slide?: number;
  paginationBound?: 'inside' | 'outside';
  showHandle?: boolean;
  showPagination?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplaySpeed?: number;
  autoplay?: boolean;
  children?: string | JSX.Element | JSX.Element[];
};
export type CarouselSliderProps = CarouselSlider & PaginationDotGroupProps;

export const CarouselSlider: React.FC<CarouselSliderProps> = ({
  size = 'lg',
  theme,
  breakpoint,
  autoSlide = true,
  slide = 1,
  paginationBound = 'outside',
  showHandle = true,
  showPagination = true,
  framed = true,
  color,
  style,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplaySpeed = 3000,
  children,
}) => {
  const sliderRef = useRef(null);
  const [totalPage, setTotalPage] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  //react slick settings
  const settings = {
    dots: true,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: slide - 1,
    autoplay: autoSlide,
    autoplaySpeed: autoplaySpeed,
    prevArrow: (
      <CarouselArrow
        chevron='left'
        size={size}
        containerClassName='absolute top-[50%] left-5 z-[1] -translate-y-[50%]'
        hide={!showHandle}
      />
    ),
    nextArrow: (
      <CarouselArrow
        chevron='right'
        size={size}
        containerClassName='absolute top-[50%] right-5 z-[1] -translate-y-[50%]'
        hide={!showHandle}
      />
    ),
    beforeChange: (currentSlide: any, nextSlide: any) =>
      setActiveSlide(nextSlide),
    customPaging: (i: any) => {
      setTotalPage(i + 1);
      return <></>;
    },
  };
  //all style
  const allStyle: any = {
    container: `${clsx({
      '': true,
      'py-[2px] pr-[9px] pl-[5px]': size === 'md',
      'py-[4px] pr-[10px] pl-[7px]': size === 'lg',
    })}`,
    paginationGroup: `${clsx({
      '': true,
      'absolute bottom-4 left-[50%] -translate-x-[50%]':
        paginationBound === 'inside',
      'flex justify-center mt-[10px]': paginationBound === 'outside',
    })}`,
  };

  return (
    <div className='relative '>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
      {showPagination && (
        <div className={`${['', `${allStyle.paginationGroup}`].join(' ')}`}>
          <PaginationDotGroup
            noOfDots={totalPage}
            framed={framed}
            size={size}
            activeNumber={activeSlide + 1}
            color={color}
            style={style}
            // @ts-ignore
            containerClick={(e: any) => {
              e.stopPropagation();
              // @ts-ignore
              sliderRef.current.slickGoTo(
                Number(e.target.getAttribute('tabIndex'))
              );
            }}
          />
        </div>
      )}
    </div>
  );
};
export default memo(CarouselSlider);

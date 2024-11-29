'use client';

import React, { ReactNode } from 'react';

import AlertFeedback from '../../assets/icons/AlertFeedback Icon/AlertFeedback';
import Arrows from '../../assets/icons/Arrows Icon/Arrows';
import burger from '../../assets/icons/burgerIcon/burger';
import Charts from '../../assets/icons/Charts Icon/Charts';
import Communication from '../../assets/icons/Communication Icon/Communication';
import Country from '../../assets/icons/country Icon/CountryIcons';
import Development from '../../assets/icons/Development Icon/Development';
import Editor from '../../assets/icons/Editor Icon/Editor';
import Education from '../../assets/icons/Education Icon/Education';
import Files from '../../assets/icons/Files Icon/Files';
import FinaceEcommerce from '../../assets/icons/FinanceEcommerce Icon/FinanceEcommerce';
import General from '../../assets/icons/General Icon/General';
import GMGIcons from '../../assets/icons/GMG Icon/GMGIcons';
import Images from '../../assets/icons/Images Icon/Images';
import Layout from '../../assets/icons/Layout Icon/Layout';
import Logos from '../../assets/icons/Logos';
import MapTravels from '../../assets/icons/MapTravels Icon/MapTravels';
import MediaDevices from '../../assets/icons/MediaDevices Icon/MediaDevices';
import Seats from '../../assets/icons/Seats';
import Security from '../../assets/icons/Security Icon/Security';
import Shapes from '../../assets/icons/Shapes Icon/Shapes';
import Time from '../../assets/icons/Time Icon/Time';
import Users from '../../assets/icons/Users Icon/Users';
import Weather from '../../assets/icons/Weather Icon/Weather';

export interface IconProps {
  name: string;
  height?: string;
  className?: string;
  strokeWidth?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  svgContainer?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  strokeWidth,
  svgContainer = true,
}) => {
  //style for svg Stroke Width with strokeWidth
  const svgStrokeWidth: any = {
    1: `[&_path]:stroke-1`,
    2: `[&_path]:stroke-2`,
    3: `[&_path]:stroke-[3px]`,
    4: `[&_path]:stroke-[4px]`,
    5: `[&_path]:stroke-[5px]`,
    6: `[&_path]:stroke-[6px]`,
    7: `[&_path]:stroke-[7px]`,
    8: `[&_path]:stroke-[8px]`,
    9: `[&_path]:stroke-[9px]`,
    10: `[&_path]:stroke-[10px]`,
  };
  const getIconComponent = (): ReactNode => {
    // Map icon names to corresponding components or SVG paths
    const icons: { [key: string]: ReactNode } = {
      // Add more icons here as needed
      ...AlertFeedback,
      ...Arrows,
      ...Charts,
      ...Communication,
      ...Development,
      ...Editor,
      ...Education,
      ...Files,
      ...FinaceEcommerce,
      ...General,
      ...GMGIcons,
      ...Images,
      ...Layout,
      ...MapTravels,
      ...MediaDevices,
      ...Security,
      ...Shapes,
      ...Time,
      ...Users,
      ...Weather,
      ...Country,
      ...burger,
      ...Seats,
      ...Logos,
    };
    // Return the corresponding icon component or null if the icon is not found
    return icons[name] || null;
  };

  const iconComponent: ReactNode = getIconComponent();

  return (
    <div
      className={`${className} ${svgContainer ? 'svgContainer' : ''} ${
        strokeWidth ? svgStrokeWidth[strokeWidth] : ''
      }`}>
      {iconComponent}
    </div>
  );
};
export default Icon;

/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './Logo.module.scss';
import cn from 'classnames';

export default function Logo({ className }: ILogoProps) {
  return (
    <div className={cn(s.Logo, className)}>
      <img src="/logotype.svg" alt="SunDate" />
      <span>SunDate</span>
    </div>
  );
}

Logo.defaultProps = {
  className: '',
};

interface ILogoProps {
  className?: string;
}

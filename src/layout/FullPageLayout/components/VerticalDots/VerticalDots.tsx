/**
 * Created by westprophet on 06.05.2022
 */

import React from 'react';
import s from './VerticalDots.module.scss';
import cn from 'classnames';

export default function VerticalDots({ className }: IVerticalDotsProps) {
  return (
    <div className={cn(s.VerticalDots, className)}>
      <div></div>
    </div>
  );
}

VerticalDots.defaultProps = {
  className: '',
};

interface IVerticalDotsProps {
  className?: string;
}

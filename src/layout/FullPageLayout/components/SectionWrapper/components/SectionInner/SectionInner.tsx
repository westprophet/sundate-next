/**
 * Created by westprophet on 06.05.2022
 */

import React from 'react';
import s from './SectionInner.module.scss';
import cn from 'classnames';

export default function SectionInner({
  className,
  children,
}: ISectionInnerProps) {
  return (
    <div className={cn(s.SectionInner, 'with-screen-padding', className)}>
      {children}
    </div>
  );
}

SectionInner.defaultProps = {
  className: '',
};

interface ISectionInnerProps {
  className?: string;
  children: any;
}

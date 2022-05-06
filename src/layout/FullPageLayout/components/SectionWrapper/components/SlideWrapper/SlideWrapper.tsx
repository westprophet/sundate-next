/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SlideWrapper.module.scss';
import cn from 'classnames';

export default function SlideWrapper({
  className,
  children,
}: ISlideWrapperProps) {
  return (
    <section className={cn(s.SlideWrapper, 'slide', className)}>
      {children}
    </section>
  );
}

SlideWrapper.defaultProps = {
  className: '',
};

interface ISlideWrapperProps {
  className?: string;
  children: any;
}

/**
 * Created by westprophet on 05.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './SlideWrapper.module.scss';
import cn from 'classnames';

export const SlideWrapper = forwardRef(
  ({ className, children }: ISlideWrapperProps, ref: LegacyRef<HTMLElement> | undefined) => {
    return (
      <section ref={ref} className={cn(s.SlideWrapper, 'slide', className)}>
        {children}
      </section>
    );
  }
);

SlideWrapper.displayName = 'SlideWrapper';
SlideWrapper.defaultProps = {
  className: '',
};

interface ISlideWrapperProps {
  className?: string;
  children: any;
}

export default SlideWrapper;

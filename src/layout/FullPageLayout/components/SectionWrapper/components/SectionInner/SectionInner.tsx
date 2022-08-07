/**
 * Created by westprophet on 06.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './SectionInner.module.scss';
import cn from 'classnames';

export const SectionInner = forwardRef(
  ({ className, children }: ISectionInnerProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div ref={ref} className={cn(s.SectionInner, 'with-screen-padding', className)}>
        {children}
      </div>
    );
  }
);
SectionInner.displayName = 'SectionInner';
SectionInner.defaultProps = {
  className: '',
};

interface ISectionInnerProps {
  className?: string;
  children: any;
}
export default SectionInner;

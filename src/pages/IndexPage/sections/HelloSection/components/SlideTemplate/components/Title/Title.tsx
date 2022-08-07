/**
 * Created by westprophet on 05.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

export const Title = forwardRef(
  ({ className, children }: ITitleProps, ref: LegacyRef<HTMLHeadingElement> | undefined) => {
    return (
      <h2 ref={ref} className={cn(s.Title, className)}>
        {children}
      </h2>
    );
  }
);

Title.displayName = 'Title';

Title.defaultProps = {
  className: '',
};

interface ITitleProps {
  className?: string;
  children: any;
}

export default Title;

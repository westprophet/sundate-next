/**
 * Created by westprophet on 05.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './Description.module.scss';
import cn from 'classnames';

export const Description = forwardRef(
  (
    { className, children }: IDescriptionProps,
    ref: LegacyRef<HTMLParagraphElement> | undefined
  ) => {
    return (
      <p ref={ref} className={cn(s.Description, className)}>
        {children}
      </p>
    );
  }
);

Description.displayName = 'Description';
Description.defaultProps = {
  className: '',
};

interface IDescriptionProps {
  className?: string;
  children: any;
}
export default Description;

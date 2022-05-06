/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './Description.module.scss';
import cn from 'classnames';

export default function Description({
  className,
  children,
}: IDescriptionProps) {
  return <p className={cn(s.Description, className)}>{children}</p>;
}

Description.defaultProps = {
  className: '',
};

interface IDescriptionProps {
  className?: string;
  children: any;
}

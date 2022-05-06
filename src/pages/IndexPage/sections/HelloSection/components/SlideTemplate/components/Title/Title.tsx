/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './Title.module.scss';
import cn from 'classnames';

export default function Title({ className, children }: ITitleProps) {
  return <h2 className={cn(s.Title, className)}>{children}</h2>;
}

Title.defaultProps = {
  className: '',
};

interface ITitleProps {
  className?: string;
  children: any;
}

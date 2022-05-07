/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './CustomButton.module.scss';
import cn from 'classnames';

import Arrow from './Arrow.svg';

export default function CustomButton({
  className,
  children,
  arrow,
}: ICustomButtonProps) {
  return (
    <button className={cn(s.CustomButton, className)}>
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}

CustomButton.defaultProps = {
  className: '',
  arrow: true,
};

interface ICustomButtonProps {
  className?: string;
  children: any;
  arrow: boolean;
}

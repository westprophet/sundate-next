/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './Advantage.module.scss';
import cn from 'classnames';

export default function Advantage({
  className,
  title,
  children,
  Icon,
}: IAdvantageProps) {
  return (
    <div className={cn(s.Advantage, className)}>
      <h3>{title}</h3>
      <div className={cn(s.body)}>
        <Icon className={cn(s.icon)} />
        <p>{children}</p>
      </div>
    </div>
  );
}

Advantage.defaultProps = {
  className: '',
};

interface IAdvantageProps {
  className?: string;
  title: string;
  Icon: any;
  children: any;
}

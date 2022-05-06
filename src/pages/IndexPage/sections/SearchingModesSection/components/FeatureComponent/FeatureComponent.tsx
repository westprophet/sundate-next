/**
 * Created by westp on 06.05.2022
 */

import React from 'react';
import s from './FeatureComponent.module.scss';
import cn from 'classnames';

export default function FeatureComponent({
  className,
  color,
  children,
}: IFeatureComponentProps) {
  return (
    <div className={cn(s.FeatureComponent, className)}>
      <div
        className={cn(s.icon, {
          [s.yellow]: color === 'yellow',
          [s.purple]: color === 'purple',
          [s.aqua]: color === 'aqua',
          [s.green]: color === 'green',
          [s.red]: color === 'red',
        })}
      />
      <p>{children}</p>
    </div>
  );
}

FeatureComponent.defaultProps = {
  className: '',
};

interface IFeatureComponentProps {
  className?: string;
  children: any;
  color: 'yellow' | 'purple' | 'aqua' | 'green' | 'red';
}

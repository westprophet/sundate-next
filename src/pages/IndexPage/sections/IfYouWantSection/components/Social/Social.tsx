/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './Social.module.scss';
import cn from 'classnames';

export default function Social({ className, Icon, title }: ISocialProps) {
  return (
    <div className={cn(s.Social, className)}>
      <Icon />
      <span>{title}</span>
    </div>
  );
}

Social.defaultProps = {
  className: '',
};

interface ISocialProps {
  className?: string;
  Icon: any;
  title: string;
}

/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './News.module.scss';
import cn from 'classnames';

export default function News({ className }: INewsProps) {
  return (
    <div className={cn(s.News, className)}>
      <div></div>
    </div>
  );
}

News.defaultProps = {
  className: '',
};

interface INewsProps {
  className?: string;
}

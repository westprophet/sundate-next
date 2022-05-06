/**
 * Created by westp on 06.05.2022
 */

import React from 'react';
import s from './Panel.module.scss';
import cn from 'classnames';
import Circles from './images/bg.svg';

export default function Panel({ className }: IPanelProps) {
  return (
    <figure className={cn(s.Panel, className)}>
      <Circles />
      <div className={cn(s.inner)}></div>
    </figure>
  );
}

Panel.defaultProps = {
  className: '',
};

interface IPanelProps {
  className?: string;
}

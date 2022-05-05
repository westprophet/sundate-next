/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './Header.module.scss';
import cn from 'classnames';

export default function Header({ className }: IHeaderProps) {
  return (
    <header className={cn(s.Header, className)}>
      <div></div>
    </header>
  );
}

Header.defaultProps = {
  className: '',
};

interface IHeaderProps {
  className?: string;
}

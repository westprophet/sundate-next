/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './DesktopMenu.module.scss';
import cn from 'classnames';

export default function DesktopMenu({ className }: IDesktopMenuProps) {
  return (
    <nav className={cn(s.DesktopMenu, className)}>
      <a>About us</a>
      <a>Support</a>
      <a>For Investors</a>
      <a>News</a>
      <a>Contacts</a>
    </nav>
  );
}

DesktopMenu.defaultProps = {
  className: '',
};

interface IDesktopMenuProps {
  className?: string;
}

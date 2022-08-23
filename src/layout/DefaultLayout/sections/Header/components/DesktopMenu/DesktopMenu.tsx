/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './DesktopMenu.module.scss';
import cn from 'classnames';
import { IMenu, IMenuItem } from '../../../../../../interfaces/IMenu';

export default function DesktopMenu({ className, menu }: IDesktopMenuProps) {
  return (
    <nav className={cn(s.DesktopMenu, className)}>
      {menu.map((mi: IMenuItem) => {
        if (mi.anchor) {
          return (
            <span key={mi.anchor} data-menuanchor={mi.anchor}>
              <a href={`/#${mi.anchor}`}>{mi.title}</a>
            </span>
          );
        } else {
          return (
            <span key={mi.title}>
              <a href={mi.href}>{mi.title}</a>
            </span>
          );
        }
      })}
    </nav>
  );
}

DesktopMenu.defaultProps = {
  className: '',
};

interface IDesktopMenuProps {
  className?: string;
  menu: IMenu;
}

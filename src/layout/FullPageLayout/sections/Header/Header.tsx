/**
 * Created by westprophet on 05.05.2022
 */

import React, { useState } from 'react';
import s from './Header.module.scss';
import cn from 'classnames';
import Logo from './components/Logo';
import DesktopMenu from './components/DesktopMenu';
import { MenuButton } from 'components/BurgerButton/BurgerButton';
import { HEADER_MENU } from '../../constants';

export default function Header({ className, id }: IHeaderProps) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <header id={id} className={cn(s.Header, 'with-screen-padding', className)}>
      <Logo />
      <div className={cn(s.menuContainer)}>
        <DesktopMenu menu={HEADER_MENU} className={cn(s.desktop)} />
        <MenuButton
          isOpen={openMobileMenu}
          onClick={() => {
            setOpenMobileMenu(!openMobileMenu);
          }}
          className={cn(s.mobile)}
        />
      </div>
    </header>
  );
}

Header.defaultProps = {
  className: '',
  id: 'header-menu',
  // menu: HEADER_MENU,
};

interface IHeaderProps {
  className?: string;
  id?: string;
  // menu?: IMenu;
}

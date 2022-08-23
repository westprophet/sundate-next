/**
 * Created by westprophet on 05.05.2022
 */

import React, { useContext } from 'react';
import s from './Header.module.scss';
import cn from 'classnames';
import Logo from './components/Logo';
import DesktopMenu from './components/DesktopMenu';

import MobileMenu from './components/MobileMenu';
import { motion } from 'framer-motion';
import { HEADER_MENU } from "../../HEADER_MENU";

export default function Header({ className, id }: IHeaderProps) {
  return (
    <motion.header
      id={id}
      animate={{
        y: 0,
        transition: {
          delay: 0.5,
        },
      }}
      initial={{
        y: '-100%',
      }}
      className={cn(
        s.Header,
        'with-screen-padding',
        {
          [s.dark]: true,
          // [s.white]: fp.theme.value === 'white',
        },
        className
      )}
    >
      <Logo />
      <div className={cn(s.menuContainer)}>
        <DesktopMenu menu={HEADER_MENU} className={cn(s.desktop)} />
        <MobileMenu />
      </div>
    </motion.header>
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

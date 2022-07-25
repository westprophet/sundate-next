/**
 * Created by westp on 15.07.2022
 */

import React from 'react';
import s from './MobileMenu.module.scss';
import cn from 'classnames';
import { LayoutGroup, motion, useCycle } from 'framer-motion';
import { IconButton } from '@mui/material';
import BurgerButtonIcon from './components/BurgerButton';
import ClientOnlyPortal from 'components/ClientOnlyPortal';
import SidebarMenu from './components/SidebarMenu';
import useBreakpoint from '../../../../../../hooks/useBreakpoint';

export default function MobileMenu({ className }: IMobileMenuProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const b = useBreakpoint();
  return (
    <LayoutGroup id="sidebar">
      <motion.div
        className={cn(s.MobileMenu, className)}
        animate={isOpen ? 'open' : 'closed'}
        initial="closed"
      >
        {!b.lg && (
          <>
            <IconButton onClick={() => toggleOpen()} className={cn(s.burger)}>
              <BurgerButtonIcon />
            </IconButton>
            <ClientOnlyPortal selector="#__next">
              <SidebarMenu />
            </ClientOnlyPortal>
          </>
        )}
      </motion.div>
    </LayoutGroup>
  );
}

MobileMenu.defaultProps = {
  className: '',
};

interface IMobileMenuProps {
  className?: string;
}

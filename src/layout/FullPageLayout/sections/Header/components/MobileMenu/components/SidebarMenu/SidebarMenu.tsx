/**
 * Created by westp on 15.07.2022
 */

import React, { useContext } from 'react';
import s from './SidebarMenu.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FullPageContext } from '../../../../../../FullPageLayout';

const variants = {
  open: () => ({
    x: ['0%', '0%'],
    clipPath: ['circle(0vh at 100% 0%)', 'circle(120vh at 100% 0%)'],
    transition: {
      duration: 0.5,
      times: [0.3, 0, 0],
      type: 'ease',
    },
  }),
  closed: {
    x: ['0%', '0%', '100%'],
    clipPath: ['circle(120vh at 100% 0%)', 'circle(0vh at 100% 0%)'],
    transition: {
      duration: 0.5,
      times: [0.3, 0, 0],
      type: 'ease',
    },
  },
};

const variantsMenu = {
  open: () => ({
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  }),
  closed: {
    transition: {
      duration: 0,
      delayChildren: 0.3,
    },
  },
};

const variantsItems = {
  open: () => ({
    x: 0,
    opacity: 1,
  }),
  closed: {
    x: '20%',
    opacity: 0,
  },
};

export default function SidebarMenu({ className, toggleOpen }: ISidebarMenuProps) {
  return (
    <motion.aside
      layoutId="sidebar"
      variants={variants}
      className={cn(s.SidebarMenu, 'with-screen-padding', className)}
    >
      <motion.nav className={cn(s.menu)} variants={variantsMenu}>
        <motion.a href="/#NoDateNoFate" variants={variantsItems} onClick={() => toggleOpen()}>
          About us
        </motion.a>
        <motion.a href="/#Contacts" variants={variantsItems} onClick={() => toggleOpen()}>
          For Investors
        </motion.a>
        <motion.a href="/#SunDateFamily" variants={variantsItems} onClick={() => toggleOpen()}>
          Support
        </motion.a>
        <motion.a href="/#NewsAndEvents" variants={variantsItems} onClick={() => toggleOpen()}>
          News
        </motion.a>
        <motion.a href="/#Contacts" variants={variantsItems} onClick={() => toggleOpen()}>
          Contacts
        </motion.a>
      </motion.nav>
    </motion.aside>
  );
}

SidebarMenu.defaultProps = {
  className: '',
};

interface ISidebarMenuProps {
  className?: string;
  toggleOpen(): any;
}

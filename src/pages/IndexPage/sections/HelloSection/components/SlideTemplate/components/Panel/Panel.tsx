/**
 * Created by westp on 06.05.2022
 */

import React from 'react';
import s from './Panel.module.scss';
import cn from 'classnames';
import Circles from './components/Bg';
import { motion } from 'framer-motion';
import BubbleColor from 'components/BubbleColor';

const variants = {
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: '-100%',
  },
};

export default function Panel({ className }: IPanelProps) {
  return (
    <motion.figure className={cn(s.Panel, className)} variants={variants}>
      <Circles className={cn(s.shine)} />
      <svg className={cn(s.inner)} viewBox="0 0 1130 900">
        <BubbleColor color="green" cx="85" cy="247" reverse="reverse" variant="c" r={3} />
        <BubbleColor color="yellow" cx="100" cy="132" reverse="mirror" variant="b" r={8} />
        <BubbleColor color="pink" cx="166" cy="258" variant="c" />
        <BubbleColor color="yellow" cx="295" cy="241" reverse="reverse" r={4} />
        <BubbleColor color="pink" cx="187" cy="323" reverse="mirror" variant="b" />
        <BubbleColor color="pink" cx="420" cy="220" variant="c" r={10} />
        <BubbleColor color="pink" cx="116" cy="112" reverse="loop" variant="a" r={5} />
        <BubbleColor color="green" cx="185" cy="411" variant="c" />
        <BubbleColor color="yellow" cx="160" cy="540" reverse="mirror" variant="b" r={2} />
        <BubbleColor color="purple" cx="166" cy="621" variant="b" />
        <BubbleColor color="yellow" cx="72" cy="777" reverse="reverse" r={8} />
        <BubbleColor color="green" cx="262" cy="745" variant="c" />
        <BubbleColor color="purple" cx="411" cy="731" variant="b" r={4} />
        <BubbleColor color="pink" cx="605" cy="728" variant="c" />
        <BubbleColor color="pink" cx="344" cy="849" reverse="mirror" variant="b" />
        <BubbleColor color="yellow" cx="622" cy="267" variant="c" r={4} />
        <BubbleColor color="green" cx="548" cy="244" reverse="loop" r={9} />
      </svg>
    </motion.figure>
  );
}

Panel.defaultProps = {
  className: '',
};

interface IPanelProps {
  className?: string;
}

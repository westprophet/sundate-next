/**
 * Created by westprophet on 07.08.2022
 */

import React, { useEffect, useRef } from 'react';
import s from './BubleColor.module.scss';
import cn from 'classnames';
import { motion, useAnimationControls, useInView } from 'framer-motion';

const variants = {
  a: {
    scale: [1, 2, 1, 0.2, 1, 1, 2, 1, 0.2, 1, 1, 0.4, 0.9, 0.5, 1],
    x: ['0%', '5%', '10%', '-10%', '0%'],
    y: ['0%', '15%', '-10%', '-5%', '0%'],
  },
  b: {
    scale: [1, 1.3, 1.1, 0.2, 2, 1, 1, 0.4, 0.9, 0.5, 1],
    x: ['0%', '-10%', '12%', '-14%', '12%', '0%'],
    y: ['0%', '10%', '-3%', '-11%', '14%', '0%'],
  },
  c: {
    scale: [1, 1, 0.4, 0.9, 0.5, 0.9, 1, 2, 1, 0.2, 1],
    x: ['0%', '-5%', '-10%', '14%', '-12%', '0%'],
    y: ['0%', '-8%', '-16%', '-9%', '14%', '0%'],
  },
  hidden: {
    x: 0,
    y: 0,
    scale: 1,
  },
};

export default function BubbleColor({ className, variant, reverse, cy, cx, r, color }: Props) {
  return (
    <motion.circle
      variants={variants}
      whileInView={variant}
      viewport={{
        amount: 1,
      }}
      transition={{
        repeat: Infinity,
        duration: 43,
        ease: 'linear',
        repeatType: reverse,
      }}
      className={cn(s.BubbleColor, s[color], className)}
      r={r}
      cx={cx}
      cy={cy}
    ></motion.circle>
  );
}

BubbleColor.defaultProps = {
  className: '',
  variant: 'a',
  reverse: 'loop',
  r: 6,
};

interface Props {
  className?: string;
  cy: number | string;
  cx: number | string;
  r?: number;
  variant: 'a' | 'b' | 'c';
  reverse?: 'loop' | 'reverse' | 'mirror';
  color: 'yellow' | 'blue' | 'pink' | 'green' | 'purple';
}

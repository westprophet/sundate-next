/**
 * Created by westprophet on 07.08.2022
 */

import React from 'react';
import s from './Bg.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function Bg({ className }: Props) {
  return (
    <motion.svg
      animate={{
        scale: [1, 1.2, 1.5, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        // repeatDelay: 1,
        duration: 20,
      }}
      className={cn(s.Bg, className)}
      width="1615"
      height="1615"
      viewBox="0 0 1615 2034"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse opacity="0.03" cx="807.5" cy="1016.55" rx="807.5" ry="1016.55" fill="#FEFEFE" />
      <ellipse opacity="0.03" cx="807.5" cy="1016.55" rx="701.904" ry="883.619" fill="#FEFEFE" />
      <ellipse opacity="0.03" cx="807.499" cy="1016.55" rx="618.669" ry="778.836" fill="#FEFEFE" />
      <ellipse opacity="0.1" cx="807.5" cy="1016.55" rx="509.346" ry="641.21" fill="#FEFEFE" />
      <ellipse opacity="0.1" cx="807.5" cy="1016.55" rx="397.538" ry="500.457" fill="#FEFEFE" />
      <ellipse opacity="0.06" cx="807.5" cy="1016.55" rx="304.365" ry="383.162" fill="#FEFEFE" />
    </motion.svg>
  );
}

Bg.defaultProps = {
  className: '',
};

interface Props {
  className?: string;
}

/**
 * Created by westp on 15.07.2022
 */

import React from 'react';
import s from './BurgerButton.module.scss';
import cn from 'classnames';
import { motion, SVGMotionProps } from 'framer-motion';

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path fill="transparent" strokeWidth="3" stroke="#656565" strokeLinecap="round" {...props} />
);

export default function BurgerButtonIcon({ className }: IBurgerButtonIconProps) {
  return (
    <svg className={cn(s.BurgerButton, className)} viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  );
}

BurgerButtonIcon.defaultProps = {
  className: '',
};

interface IBurgerButtonIconProps {
  className?: string;
}

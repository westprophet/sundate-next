import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

import s from './BurgerButton.module.scss';
import cn from 'classnames';

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  className,
  onClick,
}: Props) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  const lineProps = {
    // stroke: '#000',
    // strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { ease: 'easeOut', duration: 0.2 },
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      onClick={onClick}
      className={cn(s.BurgerButton, className)}
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  lineProps?: any;
  className?: string;
  onClick?(): any;
}

export { MenuButton };

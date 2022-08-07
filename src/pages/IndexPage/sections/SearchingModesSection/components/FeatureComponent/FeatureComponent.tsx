/**
 * Created by westp on 06.05.2022
 */

import React from 'react';
import s from './FeatureComponent.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: '100%',
    opacity: 0,
  },
};
export default function FeatureComponent({
  className,
  color,
  children,
  Icon,
}: IFeatureComponentProps) {
  return (
    <motion.div className={cn(s.FeatureComponent, className)} variants={variants}>
      <div
        className={cn(s.icon, {
          [s.yellow]: color === 'yellow',
          [s.purple]: color === 'purple',
          [s.aqua]: color === 'aqua',
          [s.green]: color === 'green',
          [s.red]: color === 'red',
        })}
      >
        <Icon />
      </div>
      <p>{children}</p>
    </motion.div>
  );
}

FeatureComponent.defaultProps = {
  className: '',
};

interface IFeatureComponentProps {
  className?: string;
  children: any;
  Icon: any;
  color: 'yellow' | 'purple' | 'aqua' | 'green' | 'red';
}

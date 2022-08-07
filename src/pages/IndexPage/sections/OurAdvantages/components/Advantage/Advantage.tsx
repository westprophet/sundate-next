/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './Advantage.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function Advantage({ className, title, children, Icon }: IAdvantageProps) {
  return (
    <motion.div variants={variants} className={cn(s.Advantage, className)}>
      <h3>{title}</h3>
      <div className={cn(s.body)}>
        <Icon className={cn(s.icon)} />
        <p>{children}</p>
      </div>
    </motion.div>
  );
}

Advantage.defaultProps = {
  className: '',
};

interface IAdvantageProps {
  className?: string;
  title: string;
  Icon: any;
  children: any;
}

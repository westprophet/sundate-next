/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './SimpleAndQuickSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import BG from './images/bg3-min.webp';

import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const variants = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hidden: {},
};

const showVertVariants = {
  show: (custom: 'top' | 'bottom') => ({
    y: 0,
    opacity: 1,
  }),
  hidden: (custom: 'top' | 'bottom') => ({
    y: custom === 'bottom' ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function SimpleAndQuickSection({ className }: ISimpleAndQuickSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.SimpleAndQuickSection, className)}
      cover={BG}
      anchor="SimpleAndQuick"
    >
      <Section.Inner
        className={cn(s.inner)}
        variants={variants}
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
          amount: 1,
        }}
      >
        <h2>
          <motion.div variants={showVertVariants} custom="top">
            Simple and Quick
          </motion.div>
          <motion.div variants={showVertVariants} custom="bottom">
            3-steps dating system
          </motion.div>
        </h2>
        <motion.span variants={showVertVariants} custom="top">
          No more useless chats, just three quick steps:
        </motion.span>
        <motion.ol variants={showVertVariants} custom="top">
          <li>Make a match</li>
          <li>Share bonus video</li>
          <li>Approve one dating card.</li>
        </motion.ol>
        <motion.div variants={showVertVariants} custom="top">
          Trace your SunDate and Go for it!
        </motion.div>
        <Button
          component={motion.button}
          variants={showVertVariants}
          custom="bottom"
          className={cn(s.LinkButton, className)}
          endIcon={<ArrowForwardIcon />}
        >
          details
        </Button>
      </Section.Inner>
    </Section.Wrapper>
  );
}

SimpleAndQuickSection.defaultProps = {
  className: '',
};

interface ISimpleAndQuickSectionProps {
  className?: string;
}

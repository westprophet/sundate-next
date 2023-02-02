/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './OurAdvantages.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';

import bg from './images/bg1.webp';
import Advantage from './components/Advantage';

import ad1 from './images/scales.svg';
import ad2 from './images/approved.svg';
import ad3 from './images/hard.svg';
import ad4 from './images/bank.svg';
import { motion } from 'framer-motion';

const variants = {
  show: {
    transition: {
      duration: 0.2,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  hidden: {},
};

const showVertVariants = {
  show: (custom: 'top' | 'bottom') => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  }),
  hidden: (custom: 'top' | 'bottom') => ({
    y: custom === 'bottom' ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function OurAdvantages({ className }: IOurAdvantagesProps) {
  return (
    <Section.Wrapper className={cn(s.OurAdvantages, className)} cover={bg} anchor="OurAdvantages">
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
        <motion.h2 variants={showVertVariants} custom="top">
          Our advantages
        </motion.h2>
        {/*<CustomButton />*/}
        <div className={cn(s.advatages)}>
          <Advantage Icon={ad1} title="equal chance">
            The simple way for people with anу disabilities or major illness to make a Goal and to make a giant leap from loneliness. "That's one small step for man, one giant leap for mankind”
          </Advantage>
          <Advantage Icon={ad2} title="Only real video content and people">
            Only real video content to make matchmaking more interesting and to avoid fakes. Higher ratings with more videos and for more matches
          </Advantage>
          <Advantage Icon={ad3} title="Original interface for more Usability">
            Dynamic menu and all buttons in big finger zone. Auto play for additional comfort. Dating cards and much further
          </Advantage>
          <Advantage Icon={ad4} title="Dating without borders ">
            All Five searching modes are opened forever and for everyone. Additional services and many other unexpected features
          </Advantage>
        </div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

OurAdvantages.defaultProps = {
  className: '',
};

interface IOurAdvantagesProps {
  className?: string;
}

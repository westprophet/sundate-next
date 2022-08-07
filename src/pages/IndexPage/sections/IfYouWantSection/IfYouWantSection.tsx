/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './IfYouWantSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import { MSocial as Social } from './components/Social';

import BG from './images/bg6-min.webp';
import Twitter from 'assets/Twitter.svg';
import Facebook from 'assets/Facebook.svg';
import Inst from 'assets/Inst.svg';
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

export default function IfYouWantSection({ className }: IIfYouWantSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.IfYouWantSection, className)}
      cover={BG}
      anchor="SunDateFamily"
    >
      <Section.Inner
        variants={variants}
        whileInView="show"
        initial="hidden"
        viewport={{
          once: true,
          amount: 1,
        }}
      >
        <div className={cn(s.inner)}>
          <motion.h2 variants={showVertVariants} custom="top">
            Beсome a part of SunDate family
          </motion.h2>
          <div className={cn(s.socials)}>
            <Social variants={showVertVariants} custom="top" Icon={Twitter} title="@sundate_app" />
            <Social
              variants={showVertVariants}
              custom="top"
              Icon={Facebook}
              title="@sundateiscoming"
            />
            <Social variants={showVertVariants} custom="top" Icon={Inst} title="@sundate_app" />
          </div>
        </div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

IfYouWantSection.defaultProps = {
  className: '',
};

interface IIfYouWantSectionProps {
  className?: string;
}

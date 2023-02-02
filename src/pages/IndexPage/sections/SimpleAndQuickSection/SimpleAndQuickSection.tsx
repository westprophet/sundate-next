/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './SimpleAndQuickSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';

import phone1 from './images/phone1.webp';
import phone2 from './images/phone2.webp';
import phone3 from './images/phone3.webp';

import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import BubbleColor from 'components/BubbleColor';

const variants = {
  show: {
    transition: {
      delay: 0.3,
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
  }),
  hidden: (custom: 'top' | 'bottom') => ({
    y: custom === 'bottom' ? '-10%' : '10%',
    opacity: 0,
  }),
};

export default function SimpleAndQuickSection({ className }: ISimpleAndQuickSectionProps) {
  return (
    <Section.Wrapper className={cn(s.SimpleAndQuickSection, className)} anchor="SimpleAndQuick">
      <div className={cn(s.sub)}>
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
          <div className={cn(s.texts)}>
            <h2>
              <div>Simple and Quick</div>
              <div>3-steps dating system</div>
            </h2>
            <span>No more useless chats, just three quick steps:</span>
            <ol>
              <li>Make a match</li>
              <li>Share bonus video</li>
              <li>Approve one dating card.</li>
            </ol>
            <div>Trace your SunDate and Go for it!</div>
            <Button
              component={motion.button}
              custom="bottom"
              className={cn(s.LinkButton, className)}
              endIcon={<ArrowForwardIcon />}
            >
              details
            </Button>
          </div>
          <motion.div className={cn(s.preview)}>
            <svg className={cn(s.bganim)} viewBox="0 0 1130 900">
              <BubbleColor color="green" cx="185" cy="447" reverse="reverse" variant="c" r={3} />
              <BubbleColor color="yellow" cx="140" cy="132" reverse="mirror" variant="b" r={8} />
              <BubbleColor color="pink" cx="866" cy="258" variant="c" />
              <BubbleColor color="yellow" cx="295" cy="241" reverse="reverse" r={8} />
              <BubbleColor color="pink" cx="787" cy="623" reverse="mirror" variant="b" />
              <BubbleColor color="pink" cx="1020" cy="220" variant="c" r={10} />
              <BubbleColor color="green" cx="646" cy="82" reverse="loop" variant="b" r={9} />
              <BubbleColor color="pink" cx="1100" cy="112" reverse="loop" variant="a" r={5} />
              <BubbleColor color="green" cx="1100" cy="450" variant="c" />
              <BubbleColor color="purple" cx="1100" cy="450" variant="a" />
              <BubbleColor color="pink" cx="1100" cy="450" variant="b" />
              <BubbleColor color="green" cx="1100" cy="450" variant="c" />
              <BubbleColor color="purple" cx="601" cy="731" variant="b" r={4} />
              <BubbleColor color="green" cx="1101" cy="531" variant="a" r={8} />
              <BubbleColor color="yellow" cx="560" cy="840" reverse="mirror" variant="b" r={6} />
              <BubbleColor color="purple" cx="766" cy="821" variant="b" />
              <BubbleColor color="yellow" cx="1002" cy="900" reverse="reverse" r={8} />
              <BubbleColor color="green" cx="962" cy="745" variant="c" />
              <BubbleColor color="purple" cx="811" cy="731" variant="b" r={4} />
              <BubbleColor color="pink" cx="905" cy="728" variant="c" />
              <BubbleColor color="pink" cx="844" cy="749" reverse="mirror" variant="b" />
              <BubbleColor color="yellow" cx="622" cy="267" variant="c" r={4} />
              <BubbleColor color="green" cx="548" cy="244" reverse="loop" r={9} />
            </svg>
            <div className={cn(s.phones)}>
              <motion.div variants={showVertVariants} className={cn(s.img)}>
                <Image alt="1" src={phone1} layout="fixed" />
              </motion.div>
              <motion.div variants={showVertVariants} className={cn(s.img)}>
                <Image alt="1" src={phone2} layout="fixed" />
              </motion.div>
              <motion.div variants={showVertVariants} className={cn(s.img)}>
                <Image alt="1" src={phone3} layout="fixed" />
              </motion.div>
            </div>
          </motion.div>
        </Section.Inner>
      </div>
    </Section.Wrapper>
  );
}

SimpleAndQuickSection.defaultProps = {
  className: '',
};

interface ISimpleAndQuickSectionProps {
  className?: string;
}

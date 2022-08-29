/**
 * Created by westprophet on 05.05.2022
 */

import React, { useContext } from 'react';
import s from './HelloSection.module.scss';
import cn from 'classnames';

import { Section } from '../../../../layout/FullPageLayout';

import Slide from './components/SlideTemplate';
import Hello from './images/hello-2-min.webp';

import img2 from './images/2.webp';
import img3 from './images/3.webp';
import img4 from './images/4.webp';
import img5 from './images/young-asian-couple-watching-sunset-near-beach-sweet-couple-happy-relax-enjoy-love-and-romantic-momen.webp';
import img6 from './images/6.webp';

import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FullPageContext } from '../../../../layout/FullPageLayout/FullPageLayout';
import { useRouter } from 'next/router';

const titleVariants = {
  show: {
    transition: {
      delay: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const titleChildVariants = {
  show: (custom: 'left' | 'right') => ({
    x: 0,
    opacity: 1,
  }),
  hidden: (custom: 'left' | 'right') => ({
    x: custom === 'left' ? '-100%' : '100%',
    opacity: 0,
  }),
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

const variantsDescription = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function HelloSection({ className }: IHelloSectionProps) {
  const FullPageManager = useContext(FullPageContext);
  const r = useRouter();
  return (
    <Section.MWrapper className={cn(s.HelloSection, className)} anchor="NoDateNoFate">
      <Slide.Wrapper cover={Hello} isFirstSlide>
        <Slide.Title variants={titleVariants}>
          <motion.div variants={titleChildVariants} custom={'left'}>
            No Date
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'left'}>
            No Fate
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            {/*<Slide.Button title="Next" />*/}
            <a href="/#NoDateNoFate/1">
              <Button className={cn(s.LinkButton, className)} endIcon={<ArrowForwardIcon />}>
                Next
              </Button>
            </a>
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img2}>
        <Slide.Title>
          <motion.div variants={titleChildVariants} custom={'left'}>
            More than Dating
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'right'}>
            More than App
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            Our mission is to make people really unlonely
            <br />
            We provide the fastest and excitement way from online to offline meetings
            <br />
            So come with us to the real side, SunDate side
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img3}>
        <Slide.Title>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Real Side
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Real People
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            Only real Video without any Filters or fake Masks. Only real People around the Whole
            world and further to the stars
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img4}>
        <Slide.Title>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Mega Efficiency
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Mega Fun
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            First ever in your hands the Mega efficient Searching instrument with five or even six
            Modes for
            <br />
            self-advertisement, for having fun and finding your soulmates
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img5}>
        <Slide.Title>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Time priceless
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Life coolest
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            Limited time and just a few interesting steps to organize a date So, just a few hours
            and you go for a date, or you go for another date, but definitely, you go for a date
            Your time is a priceless thing in this World, so do not waste it
          </motion.div>
          {/*<motion.div variants={showVertVariants}>*/}
          {/*  <Slide.Button title="details" />*/}
          {/*</motion.div>*/}
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img6}>
        <Slide.Title variants={titleChildVariants} custom={'left'}>
          A few words By SUNDATE TEAM
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            Some say, metauniverse, but we say, it is Your universe and it is real Anything virtual
            cannot replace people around you, cannot replace real warm and support of the beloved
            person, cannot replace real You We can hide from life behind masks, but we cannot hide
            from our loneliness The best thing You have is this one life and it’s all yours, so be
            real, be yourself and go for a date, SunDate
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
    </Section.MWrapper>
  );
}

HelloSection.defaultProps = {
  className: '',
};

interface IHelloSectionProps {
  className?: string;
}

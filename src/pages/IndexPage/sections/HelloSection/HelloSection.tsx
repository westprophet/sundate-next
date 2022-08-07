/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './HelloSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import Slide from './components/SlideTemplate';
import Hello from './images/hello-2-min.webp';
import img2 from './images/2-min.webp';
import img3 from './images/3-min.webp';
import img4 from './images/4-min.webp';
import img5 from './images/5-min.webp';
import img6 from './images/6-min.webp';
import { motion } from 'framer-motion';

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
            <Slide.Button title="details" />
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
            Our mission is to make people Un-lonely in their Lives, Real lives in real World. The
            fastest way from online to offline meetings. Come to the Real side
          </motion.div>
          <motion.div variants={showVertVariants}>
            <Slide.Button title="details" />
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
          <motion.div variants={showVertVariants}>
            <Slide.Button title="details" />
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
            Only real Video without any Filters or fake Masks. Only real People around the Whole
            world and further to the stars
          </motion.div>

          <motion.div variants={showVertVariants}>
            <Slide.Button title="details" />
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img5}>
        <Slide.Title>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Time priceless
          </motion.div>
          <motion.div variants={titleChildVariants} custom={'left'}>
            Life wisest
          </motion.div>
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            Limited time to organize your date. 48 hours and you go for date, otherwise, you go for
            date but for another one, but definitely, you go for date. Respect yourself, respect
            your Time, respect each other and People will respect us too. Time is Priceless thing in
            this World.
          </motion.div>
          <motion.div variants={showVertVariants}>
            <Slide.Button title="details" />
          </motion.div>
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img6}>
        <Slide.Title variants={titleChildVariants} custom={'left'}>
          A few words By Alex (CEO of SD)
        </Slide.Title>
        <Slide.Description variants={variantsDescription}>
          <motion.div variants={showVertVariants}>
            “Some say - metauniverse, but I say - Your universe, Our universe, Real universe.
            Anything virtual cannot replace your life, cannot replace people around you, cannot
            replace real warm and support of beloved person, cannot replace You. We can hide behind
            the masks and smiles, but we cannot hide from ourselves and from our loneliness. The
            best thing we have, it is this one life and it’s ours.”
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

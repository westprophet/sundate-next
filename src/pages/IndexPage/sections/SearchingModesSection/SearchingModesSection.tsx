/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SearchingModesSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import FeatureComponent from './components/FeatureComponent';
import BG from './image/2-min.webp';
import Cubs from './image/cybs.svg';
import globus from './image/globus.svg';
import loops from './image/loops.svg';
import mapdot from './image/mapdot.svg';
import planet from './image/planet.svg';
import { motion } from 'framer-motion';

const variants = {
  show: {
    transition: {
      delay: 0.4,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hidden: {},
};

const variantsTitle = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    y: '200%',
  },
};
export default function SearchingModesSection({ className }: ISearchingModesSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.SearchingModesSection, className)}
      cover={BG}
      anchor="FiveSearchingModes"
    >
      <Section.Inner>
        <motion.h2
          variants={variantsTitle}
          whileInView="show"
          initial="hidden"
          viewport={{
            once: true,
            amount: 1,
          }}
        >
          Five Searching Modes
        </motion.h2>
        <motion.div
          className={cn(s.featuredContainer)}
          variants={variants}
          whileInView="show"
          initial="hidden"
          viewport={{
            once: true,
            amount: 1,
          }}
        >
          <FeatureComponent color="red" Icon={loops}>
            You want to find locals, so take this one – Local Mode
          </FeatureComponent>
          <FeatureComponent color="yellow" Icon={globus}>
            or You want to search around the world with additional parameters – World Mode
          </FeatureComponent>
          <FeatureComponent color="green" Icon={planet}>
            And what about if You see foreigners who will come to your city and see other travelers
            at place where will you go in future too – Travel Mode
          </FeatureComponent>

          <FeatureComponent color="purple" Icon={Cubs}>
            You want to go for a date immediately with somebody who also want it – Instant Mode
          </FeatureComponent>
          <FeatureComponent color="aqua" Icon={mapdot}>
            You want to find someone you have lost or you want to make any announcement, so make it
            with – Map Mode
          </FeatureComponent>
        </motion.div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

SearchingModesSection.defaultProps = {
  className: '',
};

interface ISearchingModesSectionProps {
  className?: string;
}

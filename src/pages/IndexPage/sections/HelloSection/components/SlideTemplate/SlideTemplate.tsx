/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SlideTemplate.module.scss';
import cn from 'classnames';
import { Section } from '../../../../../../layout/FullPageLayout';
import Image, { StaticImageData } from 'next/image';
import Panel from './components/Panel';

const variants = {
  show: {
    transition: {
      delay: 0,
        duration: 0.25,
      staggerChildren: 0.2,
    },
  },
  hidden: {
    // transition: {
    //   delay: 1,
    //   delayChildren: 1,
    //   staggerChildren: 1,
    // },
  },
};

export const SlideTemplate = ({
  className,
  children,
  cover,
  isFirstSlide,
}: ISlideTemplateProps) => {
  return (
    <Section.MSlide
      className={cn(s.SlideTemplate, className)}
      initial="hidden"
      variants={variants}
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.8,
      }}
    >
      <div className={cn(s.bg)}>
        <Image
          src={cover}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          height="100%"
          width="100%"
          quality="100"
          loading={isFirstSlide ? 'eager' : 'lazy'}
        />
      </div>
      <Panel />
      <Section.Inner className={cn(s.inner)}>{children}</Section.Inner>
    </Section.MSlide>
  );
};

SlideTemplate.displayName = 'SlideTemplate';

SlideTemplate.defaultProps = {
  className: '',
};

interface ISlideTemplateProps {
  className?: string;
  isFirstSlide?: boolean;
  children: any;
  // link: string;
  cover: StaticImageData;
}

export default SlideTemplate;

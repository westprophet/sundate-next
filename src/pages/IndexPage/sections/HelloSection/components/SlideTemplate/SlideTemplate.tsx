/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SlideTemplate.module.scss';
import cn from 'classnames';
import { Section } from '../../../../../../layout/FullPageLayout';
import Image, { StaticImageData } from 'next/image';
import Panel from './components/Panel';

export default function SlideTemplate({
  className,
  children,
  cover,

  isFirstSlide,
}: ISlideTemplateProps) {
  return (
    <Section.Slide className={cn(s.SlideTemplate, className)}>
      <div className={cn(s.bg)}>
        <Image
          src={cover}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          loading={isFirstSlide ? 'eager' : 'lazy'}
        />
      </div>
      <Panel />
      <Section.Inner className={cn(s.inner)}>{children}</Section.Inner>
    </Section.Slide>
  );
}

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

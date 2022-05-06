import React from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';

export default function SectionWrapper({
  children,
  className,
  cover,
  isFirstSlide,
}: ISectionWrapperProps) {
  return (
    <section className={cn(s.SectionWrapper, 'section', className)}>
      {cover ? (
        <div className={cn(s.bg)}>
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality={100}
            loading={isFirstSlide ? 'eager' : 'lazy'}
          />
        </div>
      ) : null}
      {children}
    </section>
  );
}

SectionWrapper.defaultProps = {
  className: '',
  children: null,
  isFirstSlide: false,
};

interface ISectionWrapperProps {
  children?: any;
  className?: string;
  isFirstSlide?: boolean;
  cover?: StaticImageData;
}

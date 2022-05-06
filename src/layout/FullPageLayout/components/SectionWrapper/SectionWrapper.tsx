import React from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';

export default function SectionWrapper({
  children,
  className,
}: ISectionWrapperProps) {
  return (
    <section className={cn(s.SectionWrapper, 'section', className)}>
      {children}
    </section>
  );
}

SectionWrapper.defaultProps = {
  className: '',
  children: null,
};

interface ISectionWrapperProps {
  children?: any;
  className?: string;
}

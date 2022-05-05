/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './HelloSection.module.scss';
import cn from 'classnames';
import { SectionWrapper } from '../../../../layout/FullPageLayout';

export default function HelloSection({ className }: IHelloSectionProps) {
  return (
    <SectionWrapper className={cn(s.HelloSection, className)}>
      <div></div>
    </SectionWrapper>
  );
}

HelloSection.defaultProps = {
  className: '',
};

interface IHelloSectionProps {
  className?: string;
}

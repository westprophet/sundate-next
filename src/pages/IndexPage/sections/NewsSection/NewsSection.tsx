/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './NewsSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';

export default function NewsSection({ className }: INewsSectionProps) {
  return (
    <Section.Wrapper className={cn(s.NewsSection, className)}>
      <Section.Inner>
        <h2>news and events</h2>
      </Section.Inner>
    </Section.Wrapper>
  );
}

NewsSection.defaultProps = {
  className: '',
};

interface INewsSectionProps {
  className?: string;
}

/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SearchingModesSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';

export default function SearchingModesSection({
  className,
}: ISearchingModesSectionProps) {
  return (
    <Section.Wrapper className={cn(s.SearchingModesSection, className)}>
      <Section.Inner>
        <div>2</div>
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

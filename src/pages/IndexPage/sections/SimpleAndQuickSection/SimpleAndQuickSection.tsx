/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './SimpleAndQuickSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import BG from './images/bg3-min.webp';

export default function SimpleAndQuickSection({
  className,
}: ISimpleAndQuickSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.SimpleAndQuickSection, className)}
      cover={BG}
      anchor="SimpleAndQuick"
    >
      <Section.Inner className={cn(s.inner)}>
        <h2>
          Simple and Quick <br /> 3-steps dating system
        </h2>
        <span>No more useless chats, just three quick steps:</span>
        <ol>
          <li>Make a match</li>
          <li>Share bonus video</li>
          <li>Approve one dating card.</li>
        </ol>
        <div>Trace your SunDate and Go for it!</div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

SimpleAndQuickSection.defaultProps = {
  className: '',
};

interface ISimpleAndQuickSectionProps {
  className?: string;
}

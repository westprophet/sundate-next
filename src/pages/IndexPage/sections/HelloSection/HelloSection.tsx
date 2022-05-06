/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './HelloSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import Slide from './components/SlideTemplate';
import Hello from './images/hello-2-min.webp';

export default function HelloSection({ className }: IHelloSectionProps) {
  return (
    <Section.Wrapper className={cn(s.HelloSection, className)}>
      <Slide.Wrapper cover={Hello}>
        <Slide.Title>
          No Date
          <br />
          No Fate
        </Slide.Title>
        <Slide.Description>
          Winter is coming… and You will be able to upload SunDate And make your
          Fate with the Most Efficient and Thrilling matchmaking App of modern
          Times. Let the SunDate be with You
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={Hello}>
        <Slide.Title>
          No Date
          <br />
          No Fate
        </Slide.Title>
        <Slide.Description>
          Winter is coming… and You will be able to upload SunDate And make your
          Fate with the Most Efficient and Thrilling matchmaking App of modern
          Times. Let the SunDate be with You
        </Slide.Description>
      </Slide.Wrapper>
    </Section.Wrapper>
  );
}

HelloSection.defaultProps = {
  className: '',
};

interface IHelloSectionProps {
  className?: string;
}

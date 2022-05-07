/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './OurAdvantages.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';

import bg from './images/bg4-min.webp';
import Advantage from './components/Advantage';

import ad1 from './images/scales.svg';
import ad2 from './images/approved.svg';
import ad3 from './images/hard.svg';
import ad4 from './images/bank.svg';

export default function OurAdvantages({ className }: IOurAdvantagesProps) {
  return (
    <Section.Wrapper className={cn(s.OurAdvantages, className)} cover={bg}>
      <Section.Inner>
        <h2>Our advantages</h2>
        <p className={cn(s.desc)}>
          We made a lot of simple innovations for online dating. Because we
          communicated with people, we observed and noticed, we made and we will
          make. Every function of our product is a life necessity, every
          instrument is a life situation, every our step had main purpose to
          make SunDate more Usability, more Efficiency, more Timesaving, more
          Entertaining and Socially oriented. From people who know what means
          loneliness, to people who know what it is too.
        </p>
        <div className={cn(s.advatages)}>
          <Advantage Icon={ad1} title="equal chance">
            Simple way for people with any disabilities or major illness to make
            a Goal and to make a giant leap from loneliness. "That's one small
            step for That's one small
          </Advantage>
          <Advantage Icon={ad2} title="Only real video content and people">
            Only real video content to make matchmaking more interesting and to
            avoid fakes. Higher ratings for...
          </Advantage>
          <Advantage Icon={ad3} title="Original interface for more Usability">
            Dynamic menu and all buttons in big finger zone. Auto play for
            additional comfort. With auto play, your...
          </Advantage>
          <Advantage Icon={ad4} title="Dating without borders ">
            All searching modes opened forever and for everyone. Additional
            services and many other unexpected...
          </Advantage>
        </div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

OurAdvantages.defaultProps = {
  className: '',
};

interface IOurAdvantagesProps {
  className?: string;
}

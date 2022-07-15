/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './IfYouWantSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import Social from './components/Social';

import BG from './images/bg6-min.webp';
import Twitter from 'assets/Twitter.svg';
import Facebook from 'assets/Facebook.svg';
import Inst from 'assets/Inst.svg';

export default function IfYouWantSection({ className }: IIfYouWantSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.IfYouWantSection, className)}
      cover={BG}
      anchor="SunDateFamily"
    >
      <Section.Inner>
        <div className={cn(s.inner)}>
          <h2>Beсome a part of SunDate family</h2>
          <div className={cn(s.socials)}>
            <Social Icon={Twitter} title="@sundate_app" />
            <Social Icon={Facebook} title="@sundateiscoming" />
            <Social Icon={Inst} title="@sundate_app" />
          </div>
        </div>
      </Section.Inner>
    </Section.Wrapper>
  );
}

IfYouWantSection.defaultProps = {
  className: '',
};

interface IIfYouWantSectionProps {
  className?: string;
}

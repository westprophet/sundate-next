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

export default function IfYouWantSection({
  className,
}: IIfYouWantSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.IfYouWantSection, className)}
      cover={BG}
      anchor="SunDateFamily"
    >
      <Section.Inner>
        <div className={cn(s.inner)}>
          <h2>
            If You want to be a part of <br /> SunDate family
          </h2>
          <span className={cn(s.subtitle)}>
            And to get the VIP account as a first user, just subscribe us before
            launch and share us in social media! Wright us in direct if You have
            any comments and proposals
          </span>
          <div className={cn(s.socials)}>
            <Social Icon={Twitter} title="@sundate_app" />
            <Social Icon={Facebook} title="@sundateiscoming" />
            <Social Icon={Inst} title="@sundate_app" />
          </div>
          <span className={cn(s.credits)}>
            Alex CEO of SunDate will reply You personally
          </span>
          <div className={cn(s.beginning)}>
            <b>It’s just a beginning… ;)</b>
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

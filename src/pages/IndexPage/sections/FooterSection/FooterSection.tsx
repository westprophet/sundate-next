/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './FooterSection.module.scss';
import cn from 'classnames';
import { Section } from 'src/layout/FullPageLayout';
import BG from './images/footer-min.webp';

export default function FooterSection({ className }: IFooterSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.FooterSection, className)}
      cover={BG}
      anchor="Contacts"
    >
      <Section.Inner>
        <h2>Lorem ipsum</h2>
      </Section.Inner>
      <div className={cn(s.copyright)}>
        <span>Copyright © 2021 Sundate inc .</span>
      </div>
    </Section.Wrapper>
  );
}

FooterSection.defaultProps = {
  className: '',
};

interface IFooterSectionProps {
  className?: string;
}

/**
 * Created by westprophet on 07.05.2022
 */

import React from 'react';
import s from './SimpleAndQuickSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import BG from './images/bg3-min.webp';
// import Hand from './images/handphone-min.png';
//
// import Image from 'next/image';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SimpleAndQuickSection({
  className,
}: ISimpleAndQuickSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.SimpleAndQuickSection, className)}
      cover={BG}
      anchor="SimpleAndQuick"
    >
      {/*<div className={cn(s.hand)}>*/}
      {/*  <Image*/}
      {/*    src={Hand}*/}
      {/*    alt="hend with smartphone"*/}
      {/*    layout="intrinsic"*/}
      {/*    objectFit="cover"*/}
      {/*  />*/}
      {/*</div>*/}
      <div></div>
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
        <Button
          className={cn(s.LinkButton, className)}
          endIcon={<ArrowForwardIcon />}
        >
          details
        </Button>
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

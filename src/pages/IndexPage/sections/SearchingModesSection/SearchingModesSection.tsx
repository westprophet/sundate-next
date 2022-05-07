/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './SearchingModesSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import FeatureComponent from './components/FeatureComponent';
import BG from './image/section-second.webp';
export default function SearchingModesSection({
  className,
}: ISearchingModesSectionProps) {
  return (
    <Section.Wrapper
      isFirstSlide
      className={cn(s.SearchingModesSection, className)}
      cover={BG}
      anchor="FiveSearchingModes"
    >
      <Section.Inner>
        <h2>Five Searching Modes</h2>
        <div className={cn(s.featuredContainer)}>
          <FeatureComponent color="red">
            You want to find locals, so take this one – Local Mode
          </FeatureComponent>
          <FeatureComponent color="yellow">
            or You want to search around the world with additional parameters –
            World Mode
          </FeatureComponent>
          <FeatureComponent color="green">
            And what about if You see foreigners who will come to your city and
            see other travelers at place where will you go in future too –
            Travel Mode
          </FeatureComponent>

          <FeatureComponent color="purple">
            You want to go for a date immediately with somebody who also want it
            – Instant Mode
          </FeatureComponent>
          <FeatureComponent color="aqua">
            You want to find someone you have lost or you want to make any
            announcement, so make it with – Map Mode
          </FeatureComponent>
        </div>
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

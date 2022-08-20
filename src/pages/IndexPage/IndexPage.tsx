/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './IndexPage.module.scss';
import cn from 'classnames';

import FullPageLayout from '../../layout/FullPageLayout';

import HelloSection from './sections/HelloSection';
import SearchingModesSection from './sections/SearchingModesSection';
import SimpleAndQuickSection from './sections/SimpleAndQuickSection';
import OurAdvantages from './sections/OurAdvantages';
import NewsSection from './sections/NewsSection';
import IfYouWantSection from './sections/IfYouWantSection';
import FooterSection from './sections/FooterSection';

export default function IndexPage({ className }: IIndexPageProps) {
  return (
    <FullPageLayout
      className={cn(s.IndexPage, className)}

      anchors={[
        'NoDateNoFate',
        'FiveSearchingModes',
        'SimpleAndQuick',
        'OurAdvantages',
        'NewsAndEvents',
        'SunDateFamily',
        'Contacts',
      ]}
    >
      <HelloSection />
      <SearchingModesSection />
      <SimpleAndQuickSection />
      <OurAdvantages />
      <NewsSection />
      <IfYouWantSection />
      <FooterSection />
    </FullPageLayout>
  );
}

IndexPage.defaultProps = {
  className: '',
};

interface IIndexPageProps {
  className?: string;
}

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
      {/*<HelloSection />*/}
      {/*<SearchingModesSection />*/}
      {/*<HelloSection />*/}
      {/*<SearchingModesSection />*/}
    </FullPageLayout>
  );
}

IndexPage.defaultProps = {
  className: '',
};

interface IIndexPageProps {
  className?: string;
}

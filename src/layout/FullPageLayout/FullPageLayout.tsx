/**
 * Created by westprophet on 05.05.2022
 */

import React, { createContext } from 'react';
import s from './FullPageLayout.module.scss';
import cn from 'classnames';
import ReactFullpage from '@fullpage/react-fullpage';
import { INITIAL_VALUE } from './constants';
import IFullPageContextValue from './types/IFullPageContextValue';

import Header from './sections/Header';

export const FullPageContext =
  createContext<IFullPageContextValue>(INITIAL_VALUE);

export default function FullPageLayout({
  className,
  children,
}: IFullPageLayoutProps) {
  return (
    <main className={cn(s.FullPageLayout, className)}>
      <Header />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={700} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <FullPageContext.Provider value={{ state, fullpageApi }}>
              <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
            </FullPageContext.Provider>
          );
        }}
      />
    </main>
  );
}

FullPageLayout.defaultProps = {
  className: '',
};

interface IFullPageLayoutProps {
  className?: string;
  children: any;
}

/**
 * Created by westprophet on 05.05.2022
 */

import React, { createContext, useState, startTransition, useRef, useCallback } from 'react';
import s from './FullPageLayout.module.scss';
import cn from 'classnames';
import ReactFullpage, { fullpageApi, Item } from '@fullpage/react-fullpage';
import { INITIAL_VALUE } from './constants';
import IFullPageContextValue from './types/IFullPageContextValue';

import variable from 'src/scss/_export.module.scss';

import Header from './sections/Header';
import { TFullPageTheme } from './types/TFullPageTheme';

export const FullPageContext = createContext<IFullPageContextValue>(INITIAL_VALUE);

export default function FullPageLayout({ className, children, anchors }: IFullPageLayoutProps) {
  const [current, setState] = useState<{
    origin: Item;
    destination: Item;
    direction: string;
  } | null>(null);
  const [theme, setTheme] = useState<TFullPageTheme>(INITIAL_VALUE.theme.value);
  const _setTheme = useCallback((t: TFullPageTheme) => {
    if (!t) return;
    setTheme((p: TFullPageTheme) => {
      document.body.classList.remove(p);
      document.body.classList.add(t);

      // document.body.classList.replace(p, t);
      return t;
    });
  }, []);
  const fapi = useRef<fullpageApi | null>(null);
  const fstate = useRef<any>(null);

  return (
    <FullPageContext.Provider
      value={{
        state: fstate.current,
        current,
        api: fapi.current,
        theme: { value: theme, setTheme: _setTheme },
      }}
    >
      <main id="FullPageLayout" className={cn(s.FullPageLayout, {}, className)}>
        <Header />
        <ReactFullpage
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={Number(variable.pageTransition)}
          controlArrows={false}
          navigation
          navigationPosition={'left'}
          slidesNavigation
          slidesNavPosition="bottom"
          showActiveTooltip
          onLeave={(origin: Item, destination: Item, direction: string) => {
            startTransition(() => setState({ origin, destination, direction }));
          }}
          navigationTooltips={['01', '02', '03', '04', '05', '06', '07']}
          waterEffect
          anchors={anchors}
          render={({ state, fullpageApi }) => {
            fapi.current = fullpageApi;
            fstate.current = state;
            return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
          }}
        />
      </main>
    </FullPageContext.Provider>
  );
}

FullPageLayout.defaultProps = {
  className: '',
  anchors: [],
};

interface IFullPageLayoutProps {
  className?: string;
  children: any;
  anchors: string[];
}

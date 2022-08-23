/**
 * Created by westp on 23.08.2022
 */

import React from 'react';
import s from './DefaultLayout.module.scss';
import cn from 'classnames';
import Header from './sections/Header';

export default function DefaultLayout({ className, children }: IDefaultLayoutProps) {
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <Header />
      <div className={cn(s.inner)}>
        {children}
      </div>
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
};

interface IDefaultLayoutProps {
  className?: string;
  children: any;
}

/**
 * Created by westp on 23.08.2022
 */

import React from 'react';
import s from './NewsDetailPage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layout/DefaultLayout';
import INews from '../../interfaces/INews';
import Image from 'next/image';

export default function NewsDetailPage({ className, news }: INewsDetailPageProps) {
  return (
    <DefaultLayout className={cn(s.NewsDetailPage, 'with-screen-padding', className)}>
      <h1>{news.title}</h1>
      {news.cover ? (
        <div className={cn(s.coverContainer)}>
          <div className={cn(s.fill)}>
            <Image
              src={news.cover}
              layout={'fill'}
              objectFit="cover"
              placeholder="blur"
              width="100%"
              height="100%"
              unoptimized
            />
          </div>
          <div className={cn(s.cover)}>
            <Image src={news.cover} layout="fill" objectFit="contain" placeholder="blur" unoptimized/>
          </div>
        </div>
      ) : null}
      <p className={cn(s.description)}>{news.description}</p>
    </DefaultLayout>
  );
}

NewsDetailPage.defaultProps = {
  className: '',
};

interface INewsDetailPageProps {
  className?: string;
  news: INews;
}

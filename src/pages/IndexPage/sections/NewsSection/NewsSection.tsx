/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './NewsSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import News from './components/News';
import CoverForNews from './images/news-min.jpg';
import TEST_NEWS from './constants/TEST_NEWS';
import INews from '../../../../interfaces/INews';
import sliceIntoChunks from '../../../../utils/sliceIntoChunks';
import useBreakpoint from '../../../../hooks/useBreakpoint';
import { Button } from '@mui/material';
import lioha from "*.jpg";

const variants = {
  show: {
    transition: {
      delay: 0,
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
  hidden: {},
};

export default function NewsSection({ className }: INewsSectionProps) {
  const b = useBreakpoint();
  let size = 1;
  if (b.md) size = 1;
  if (b.lg) size = 2;
  if (b.xxl) size = 3;

  const chanks = sliceIntoChunks<INews>(TEST_NEWS, size);

  return (
    <Section.Wrapper className={cn(s.NewsSection, className)} anchor="NewsAndEvents" theme="dark">
      {chanks.map((nc: INews[], index: number) => {
        return (
          <Section.Slide key={`slide-news-part-${index}`}>
            <Section.Inner
              className={cn(s.inner)}
              variants={variants}
              whileInView="show"
              initial="hidden"
              viewport={{
                once: true,
                amount: 0.8,
              }}
            >
              <h2>news and events</h2>
              <div className={cn(s.news)}>
                {nc.map((n: INews, i: number) => {
                  return (
                    <News
                      key={`slide-news-part-${index}-${i}`}
                      title={n.title}
                      date={n.date}
                      cover={n.cover}
                    >
                      {n.description}
                    </News>
                  );
                })}
              </div>
              <Button className={cn(s.allButton)}>All news</Button>
            </Section.Inner>
          </Section.Slide>
        );
      })}
    </Section.Wrapper>
  );
}

NewsSection.defaultProps = {
  className: '',
};

interface INewsSectionProps {
  className?: string;
}

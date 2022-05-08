/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './News.module.scss';
import cn from 'classnames';
import Image from 'next/image';

export default function News({
  className,
  title,
  children,
  cover,
  date,
}: INewsProps) {
  return (
    <div className={cn(s.News, className)}>
      <div className={cn(s.cover)}>
        <Image src={cover} layout="fill" objectFit="cover" placeholder="blur" />
      </div>
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p className={cn(s.description)}>{children}</p>
    </div>
  );
}

News.defaultProps = {
  className: '',
};

interface INewsProps {
  className?: string;
  title: string;
  cover: any;
  date: string;
  children: any;
}

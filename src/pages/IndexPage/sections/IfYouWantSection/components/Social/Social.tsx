/**
 * Created by westp on 07.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './Social.module.scss';
import cn from 'classnames';

export const Social = forwardRef(
  ({ className, Icon, title, href }: ISocialProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={href}>
        <div ref={ref} className={cn(s.Social, className)}>
          <Icon />
          <span>{title}</span>
        </div>
      </a>
    );
  }
);

Social.displayName = 'Social';
Social.defaultProps = {
  className: '',
};

interface ISocialProps {
  className?: string;
  Icon: any;
  title: string;
  href: string;
}
export default Social;

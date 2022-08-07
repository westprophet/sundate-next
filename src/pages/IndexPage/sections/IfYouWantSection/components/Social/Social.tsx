/**
 * Created by westp on 07.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './Social.module.scss';
import cn from 'classnames';

export const Social = forwardRef(
  ({ className, Icon, title }: ISocialProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div ref={ref} className={cn(s.Social, className)}>
        <Icon />
        <span>{title}</span>
      </div>
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
}
export default Social;

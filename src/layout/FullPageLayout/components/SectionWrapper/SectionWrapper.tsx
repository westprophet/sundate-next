import React, { forwardRef, Ref, useContext, useEffect, useRef } from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FullPageContext } from '../../FullPageLayout';
import { TFullPageTheme } from '../../types/TFullPageTheme';
import { motion } from 'framer-motion';

export const SectionWrapper = forwardRef(
  (
    { children, className, cover, anchor, theme }: ISectionWrapperProps,
    ref: Ref<HTMLElement> | undefined
  ) => {
    const fp = useContext(FullPageContext);
    const oldTheme = fp.theme.value;
    const oldThemeRef = useRef<TFullPageTheme>(oldTheme);

    useEffect(() => {
      if (!theme) return;
      if (fp.current?.destination.anchor === anchor) {
        fp.theme.setTheme(theme);
      } else if (fp.current?.origin.anchor === anchor) {
        fp.theme.setTheme(oldThemeRef.current);
      }
    }, [anchor, fp, fp.current?.destination]);

    return (
      <motion.section ref={ref} className={cn(s.SectionWrapper, 'section', className)}>
        {cover ? (
          <div className={cn(s.bg, 'background')}>
            <Image src={cover} layout="fill" objectFit="cover" placeholder="blur" loading="eager" />
          </div>
        ) : null}
        {children}
      </motion.section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

SectionWrapper.defaultProps = {
  className: '',
  children: null,
};

interface ISectionWrapperProps {
  children?: any;
  className?: string;
  anchor: string;
  theme?: TFullPageTheme;
  cover?: StaticImageData;
}

export default SectionWrapper;

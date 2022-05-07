import React, { useContext, useEffect, useRef } from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FullPageContext } from '../../FullPageLayout';
import { TFullPageTheme } from '../../types/TFullPageTheme';

export default function SectionWrapper({
  children,
  className,
  cover,
  anchor,
  theme,
}: ISectionWrapperProps) {
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
    <section className={cn(s.SectionWrapper, 'section', className)}>
      {cover ? (
        <div className={cn(s.bg, 'background')}>
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            quality={100}
            loading="eager"
          />
        </div>
      ) : null}
      {children}
    </section>
  );
}

SectionWrapper.defaultProps = {
  className: '',
  children: null,
  isFirstSlide: false,
};

interface ISectionWrapperProps {
  children?: any;
  className?: string;
  anchor: string;
  theme?: TFullPageTheme;
  cover?: StaticImageData;
}

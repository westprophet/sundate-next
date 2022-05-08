/**
 * Created by westprophet on 05.05.2022
 */

import React from 'react';
import s from './HelloSection.module.scss';
import cn from 'classnames';
import { Section } from '../../../../layout/FullPageLayout';
import Slide from './components/SlideTemplate';
import Hello from './images/hello-2-min.webp';
import img2 from './images/2-min.webp';
import img3 from './images/3-min.webp';
import img4 from './images/4-min.webp';
import img5 from './images/5-min.webp';
import img6 from './images/6-min.webp';

export default function HelloSection({ className }: IHelloSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.HelloSection, className)}
      anchor="NoDateNoFate"
    >
      <Slide.Wrapper cover={Hello} isFirstSlide>
        <Slide.Title>
          No Date
          <br />
          No Fate
        </Slide.Title>
        <Slide.Description>
          Winter is coming… and You will be able to upload SunDate And make your
          Fate with the Most Efficient and Thrilling matchmaking App of modern
          Times.
          <br />
          <p>Let the SunDate be with You</p>
          <Slide.Button title="details" />
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img2}>
        <Slide.Title>
          More than Dating
          <br />
          More than App
        </Slide.Title>
        <Slide.Description>
          Our mission is to make people Un-lonely in their Lives, Real lives in
          real World. The fastest way from online to offline meetings. Come to
          the Real side
          <Slide.Button title="details" />
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img3}>
        <Slide.Title>
          Real Side
          <br />
          Real People
        </Slide.Title>
        <Slide.Description>
          Only real Video without any Filters or fake Masks. Only real People
          around the Whole world and further to the stars
          <Slide.Button title="details" />
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img4}>
        <Slide.Title>
          Mega Efficiency
          <br />
          Mega Fun
        </Slide.Title>
        <Slide.Description>
          Only real Video without any Filters or fake Masks. Only real People
          around the Whole world and further to the stars
          <Slide.Button title="details" />
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img5}>
        <Slide.Title>
          Time priceless
          <br />
          Life wisest
        </Slide.Title>
        <Slide.Description>
          Limited time to organize your date. 48 hours and you go for date,
          otherwise, you go for date but for another one, but definitely, you go
          for date. Respect yourself, respect your Time, respect each other and
          People will respect us too. Time is Priceless thing in this World.
          <Slide.Button title="details" />
        </Slide.Description>
      </Slide.Wrapper>
      <Slide.Wrapper cover={img6}>
        <Slide.Title>
          A few words
          <br />
          By Alex (CEO of SD)
        </Slide.Title>
        <Slide.Description>
          “Some say - metauniverse, but I say - Your universe, Our universe,
          Real universe. Anything virtual cannot replace your life, cannot
          replace people around you, cannot replace real warm and support of
          beloved person, cannot replace You. We can hide behind the masks and
          smiles, but we cannot hide from ourselves and from our loneliness. The
          best thing we have, it is this one life and it’s ours.”
        </Slide.Description>
      </Slide.Wrapper>
    </Section.Wrapper>
  );
}

HelloSection.defaultProps = {
  className: '',
};

interface IHelloSectionProps {
  className?: string;
}

/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './FooterSection.module.scss';
import cn from 'classnames';
import { Section } from 'src/layout/FullPageLayout';
import BG from './images/bg2.webp';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Facebook from 'assets/Facebook.svg';
import Inst from 'assets/Inst.svg';
import Twitter from 'assets/Twitter.svg';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().max(500, 'To long').required('Required'),
});

export default function FooterSection({ className }: IFooterSectionProps) {
  return (
    <Section.Wrapper className={cn(s.FooterSection, className)} cover={BG} anchor="Contacts">
      <Section.Inner className={cn(s.inner)}>
        <div className={cn(s.menu)}>
          <div className={cn(s.head)}>
            <h2>Subscribe us</h2>
          </div>
          {/*<a href="/#Contacts">*/}
          {/*  <span>Contacts</span>*/}
          {/*</a>*/}
          <a href="/#NewsAndEvents">
            <span>News</span>
          </a>
          <a href="/#SunDateFamily">
            <span>Support</span>
          </a>
          <a target="_blank" href="/SunDate Inc. Pitch-deck War addition 2022.pdf">
            <span>For Investors</span>
          </a>
          <a target="_blank" href="/SunDate Inc. Forecast Financial Statements 2023-2032.pdf">
            <span>Financial Statements</span>
          </a>
          <a href="/#NoDateNoFate">
            <span>About us</span>
          </a>
        </div>
        <div className={cn(s.email)}>
          <div className={cn(s.head)}>
            <h2>Contact us</h2>
          </div>
          <a
            className={cn(s.emailLink)}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:Sundateinc@gmail.com"
          >
            Sundateinc@gmail.com
          </a>
        </div>
        {/*        <Formik
          initialValues={{ email: '', message: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ errors, touched, values, handleChange, isSubmitting }) => (
            <Form>
              <TextField
                fullWidth
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email ? errors.email : '  '}
              />
              <TextField
                fullWidth
                multiline
                type="text"
                name="message"
                rows={4}
                value={values.message}
                placeholder="Ask questions"
                onChange={handleChange}
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message ? errors.message : '  '}
              />
              <LoadingButton
                type="submit"
                loadingPosition="end"
                endIcon={<ArrowForwardIcon />}
                loading={isSubmitting}
                variant="contained"
              >
                Send
              </LoadingButton>
            </Form>
          )}
        </Formik>*/}
      </Section.Inner>
      <div className={cn(s.socials, 'with-screen-padding')}>
        <div className={cn(s.items)}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sundateiscoming/"
          >
            <Facebook />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/sundate_app/"
          >
            <Inst />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sundate_app">
            <Twitter />
          </a>
        </div>
      </div>
      <div className={cn(s.copyright)}>
        <span>Copyright © {new Date().getFullYear()} Sundate inc .</span>
      </div>
    </Section.Wrapper>
  );
}

FooterSection.defaultProps = {
  className: '',
};

interface IFooterSectionProps {
  className?: string;
}

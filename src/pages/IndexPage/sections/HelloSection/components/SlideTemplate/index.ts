import SlideTemplate from './SlideTemplate';
import Title from './components/Title';
import Button from './components/LinkButton';
import { motion } from 'framer-motion';

import Description from './components/Description';

const MDescription = motion(Description);
const MTitle = motion(Title);

export default {
  Wrapper: SlideTemplate,
  Title: MTitle,
  Description: MDescription,
  Button,
};

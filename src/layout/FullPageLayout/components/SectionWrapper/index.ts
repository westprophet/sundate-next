import Wrapper from './SectionWrapper';
import Inner from './components/SectionInner';
import Slide from './components/SlideWrapper';
import { motion } from 'framer-motion';

const MWrapper = motion(Wrapper);
const MSlide = motion(Slide);
const MInner = motion(Inner);

export default { Wrapper, Inner: MInner, Slide, MWrapper, MSlide };

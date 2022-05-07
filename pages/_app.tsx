// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

import '../src/scss/index.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

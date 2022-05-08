// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

import '../src/scss/index.scss';
import type { AppProps } from 'next/app';
import theme from '../mui-theme';
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

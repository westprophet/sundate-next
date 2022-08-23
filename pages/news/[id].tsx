import type { NextPage } from 'next';
import NewsDetailPage from '../../src/pages/NewsDetailPage';
import TEST_NEWS from '../../src/constants/TEST_NEWS';

const Home: NextPage = () => {
  return <NewsDetailPage news={TEST_NEWS[0]} />;
};

export default Home;

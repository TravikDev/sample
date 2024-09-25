import { Helmet } from 'react-helmet-async';
import HomeView from '../view/HomeView';
// import HomeView from '../view/homeView';

// import HomeView from '../view/homeView';

// ----------------------------------------------------------------------

const metadata = {
  title: 'MetaData Title',
  description: 'MetaData Description'
};

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <HomeView />
    </>
  );
}

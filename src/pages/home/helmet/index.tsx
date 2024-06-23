import { Helmet } from 'react-helmet-async';

import HomeView from '../view/HomeView';

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

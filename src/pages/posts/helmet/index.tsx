import { Helmet } from 'react-helmet-async';
import { PostsView } from '../view';

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

      <PostsView />
    </>
  );
}
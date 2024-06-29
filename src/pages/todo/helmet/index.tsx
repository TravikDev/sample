import { Helmet } from 'react-helmet-async';
import HomeView from '@/pages/home/view/homeView';
import { TodoView } from '../view/todoView';

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

      <TodoView />
    </>
  );
}

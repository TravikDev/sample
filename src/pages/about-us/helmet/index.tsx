import { Helmet } from 'react-helmet-async';

import { CONFIG } from '../../../app/config-global';

import { AboutView } from '../view/';

// ----------------------------------------------------------------------

const metadata = { title: `About us - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <AboutView />
    </>
  );
}
import { Helmet } from 'react-helmet-async';

import { CONFIG } from '../../../app/config-global';

import { QuestsView } from '../view/';

// ----------------------------------------------------------------------

const metadata = { title: `Quests - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <QuestsView />
    </>
  );
}
import { Helmet } from "react-helmet-async"
import FriendsView from "../view/friendsView"
// import { Box } from "@mui/material"
// import FriendsView from '../view/friendsView';
// import FriendsView from '../view/friendsView';
// import { FriendsView } from '../view';

// import HomeView from '../view/homeView';

// ----------------------------------------------------------------------

const metadata = {
  title: "MetaData Title",
  description: "MetaData Description",
}

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <FriendsView />
    </>
  )
}

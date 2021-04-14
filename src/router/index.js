import React from 'react';
import { Redirect } from "react-router-dom";

// import ANDiscover from "../pages/discover";
// import ANRecommend from "../pages/discover/c-pages/recommend";
// import ANRanking from "../pages/discover/c-pages/ranking";
// import ANSongs from "../pages/discover/c-pages/songs";
// import ANDjradio from "../pages/discover/c-pages/djradio";
// import ANArtist from "../pages/discover/c-pages/artist";
// import ANAlbum from "../pages/discover/c-pages/album";
// import ANPlayer from "../pages/player";

// import ANFriend from "../pages/friend";
// import ANMine from "../pages/mine";

const ANDiscover = React.lazy(() => import("../pages/discover"));
const ANRecommend = React.lazy(() => import("../pages/discover/c-pages/recommend"));
const ANRanking = React.lazy(() => import("../pages/discover/c-pages/ranking"));
const ANSongs = React.lazy(() => import("../pages/discover/c-pages/songs"));
const ANDjradio = React.lazy(() => import("../pages/discover/c-pages/djradio"));
const ANArtist = React.lazy(() => import("../pages/discover/c-pages/artist"));
const ANAlbum = React.lazy(() => import("../pages/discover/c-pages/album"));
const ANPlayer = React.lazy(() => import("../pages/player"));

const ANFriend = React.lazy(() => import("../pages/friend"));
const ANMine = React.lazy(() => import("../pages/mine"));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: ANDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: ANRecommend
      },
      {
        path: "/discover/ranking",
        component: ANRanking
      },
      {
        path: "/discover/songs",
        component: ANSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: ANDjradio
      },
      {
        path: "/discover/artist",
        component: ANArtist
      },
      {
        path: "/discover/album",
        component: ANAlbum
      },
      {
        path: "/discover/player",
        component: ANPlayer
      }
    ]
  },
  {
    path: "/friend",
    component: ANFriend
  },
  {
    path: "/mine",
    component: ANMine
  }
]

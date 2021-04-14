import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { Spin } from 'antd';

import routes from "@/router"
import ANAppHeader from '@/components/app-header';
import ANAppFooter from '@/components/app-footer';
import ANAppPlayBar from '@/pages/player/app-play-bar';

export default memo(function ANMain() {
  return (
    <HashRouter>
      <ANAppHeader />
      <Suspense fallback={<div><Spin size="large" /></div>}>
        {renderRoutes(routes)}
      </Suspense>
      <ANAppFooter />
      <ANAppPlayBar/>
    </HashRouter>
  )
})

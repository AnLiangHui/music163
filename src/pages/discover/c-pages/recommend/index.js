import React, { memo } from 'react';

import ANTopBanner from './c-cpns/top-banner';
import ANHotRecommend from './c-cpns/hot-recommend';
import ANNewAlbum from './c-cpns/new-album';
import ANRankingList from './c-cpns/ranking-list';
import ANUserLogin from './c-cpns/user-login';
import ANSettleSinger from './c-cpns/settle-singer';
import ANHotRadio from './c-cpns/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";

export default memo(function ANRecommend() {
  return (
    <RecommendWraper>
      <ANTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ANHotRecommend />
          <ANNewAlbum />
          <ANRankingList />
        </RecommendLeft>
        <RecommendRight>
          <ANUserLogin />
          <ANSettleSinger />
          <ANHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
})

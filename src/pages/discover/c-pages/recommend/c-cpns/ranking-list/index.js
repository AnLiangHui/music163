import React, { useEffect, memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';

import {
  getTopData
} from "../../store/actionCreators";

import ANThemeHeaderRCM from '@/components/theme-header-rcm';
import ANTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";


export default memo(function ANRankingList() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.recommend.topUpList,
    topNewList: state.recommend.topNewList,
    topOriginList: state.recommend.topOriginList
  }), shallowEqual);

  const history = useHistory();

  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  const moreClick = useCallback((index) => {
    history.push({pathname: "/discover/ranking", index: index});
  }, [history]);

  return (
    <RankingWrapper>
      <ANThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <ANTopRanking moreClick={moreClick} index={0} info={state.topUpList}/>
        <ANTopRanking moreClick={moreClick} index={1} info={state.topNewList}/>
        <ANTopRanking moreClick={moreClick} index={2} info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})

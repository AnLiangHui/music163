import React, { useEffect, memo, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from 'react-router-dom';

import {
  getRecommend
} from "../../store/actionCreators";

import { 
  RecommendWrapper
} from "./style";

import ANThemeHeaderRCM from '@/components/theme-header-rcm';
import ANThemeCover from '@/components/theme-cover';

export default memo(function ANHotRecommend() {
  // redux
  const state = useSelector(state => ({
    hotRecommends: state.recommend.hotRecommends
  }), shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getRecommend(8))
  }, [dispatch]);

  const keywordClick = useCallback((keyword) => {
    history.push({pathname: "/discover/songs", cat: keyword});
  }, [history]);

  return (
    <RecommendWrapper>
      <ANThemeHeaderRCM title="热门推荐" 
                        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
                        moreLink="/discover/songs"
                        keywordClick={keywordClick}/>
      <div className="recommend-list">
        {
          state.hotRecommends.map((item, index) => {
            return (
              <ANThemeCover info={item} key={item.id}/>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
})

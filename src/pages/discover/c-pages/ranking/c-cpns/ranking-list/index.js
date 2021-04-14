import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import ANThemeHeaderSong from '@/components/theme-header-song';
import { getSongDetailAction } from '@/pages/player/store';
import {
  RankingListWrapper
} from './style';

export default memo(function ANRankingList() {
  const state = useSelector(state => ({
    playList: state.ranking.playList
  }), shallowEqual);
  const tracks = state.playList.tracks || [];

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }
  const addMusic = (item) => {
    dispatch(getSongDetailAction(item.id, true));
  }


  return (
    <RankingListWrapper>
      <ANThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" onClick={e => playMusic(item)}></span>
                        <span className="name text-nowrap">{item.name}</span>
                      </div>
                    </td>
                    <td className="add-collect-share-download">
                      <span className="add sprite_icon2" onClick={e => addMusic(item)}></span>
                      <span className="collect sprite_table"></span>
                      <span className="share sprite_table"></span>
                      <span className="download sprite_table"></span>
                    </td>
                    <td className="timeHover">{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { formatMinuteSecond } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import { PlayListWrapper } from './style';

export default memo(function ANPlayList() {

  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.player.playList,
    currentSongIndex: state.player.currentSongIndex
  }), shallowEqual);

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <PlayListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div key={item.id}
                 className={classNames("play-item", {"active": currentSongIndex === index})}
                 onClick={e => playMusic(item)}>
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayListWrapper>
  )
})

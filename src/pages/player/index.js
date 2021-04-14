import React, { memo } from 'react';

import ANPlayerInfo from './c-cpns/player-info';
import ANPlayerComment from './c-cpns/player-comment';
import ANPlayerSongs from './c-cpns/player-songs';
import ANPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function ANPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <ANPlayerInfo/>
          <ANPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <ANPlayerSongs/>
          <ANPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

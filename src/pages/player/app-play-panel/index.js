import React, { memo } from 'react';

import ANPlayHeader from './c-cpns/play-header';
import ANPlayList from './c-cpns/play-list';
import ANLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function ANAppPlayList() {
  return (
    <PanelWrapper>
      <ANPlayHeader/>
      <div className="main">
        <img className="image" src="https://p2.music.126.net/z5Ne91WVlPc9jTyAtKPJwQ==/109951164900700352.jpg" alt=""/>
        <ANPlayList/>
        <ANLyricPanel/>
      </div>
    </PanelWrapper>
  )
})

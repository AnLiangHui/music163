import React, { useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
  getAlbum
} from "../../store/actionCreators";

import { Carousel } from 'antd';
import ANThemeHeaderRCM from '@/components/theme-header-rcm';
import ANAlbumCover from "@/components/album-cover";
import {
  AlbumWrapper
} from "./style";

export default memo(function ANNewAlbum(props) {
  // redux
  const state = useSelector(state => ({
    newAlbum: state.recommend.newAlbum
  }), shallowEqual);
  const dispatch = useDispatch();

  // hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getAlbum(10, 0));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ANThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
      <div className="content">
        <div className="arrow arrow-left sprite_02" 
            onClick={e => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      state.newAlbum.slice(item*5, (item+1)*5).map(iten => { 
                        return (
                          <ANAlbumCover key={iten.id} info={iten}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02"
             onClick={e => carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  )
})
